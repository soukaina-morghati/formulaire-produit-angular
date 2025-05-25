pipeline {
  agent any

  environment {
    EMAIL_RECEPT = 'morghatisoukaina22@gmail.com'
  }

  tools {
    nodejs 'NodeJS 20' // Assure-toi que ce nom existe dans Jenkins > Global Tools
  }

  stages {
    stage('Clone') {
      steps {
        echo '📥 Cloning the repository...'
        git 'https://github.com/soukaina-morghati/formulaire-produit-angular.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing dependencies...'
        bat 'npm install'
      }
    }

    stage('Quality Check (Lint)') {
      steps {
        echo '🔍 Running quality checks...'
        bat 'npm run lint'
      }
    }

    stage('Build Docker Image') {
      steps {
        echo '🐳 Building the Docker image...'
        bat 'docker build -t formreactif-app .'
      }
    }

    stage('Run Docker Container') {
      steps {
        echo '🚀 Running the application container...'
        bat 'docker run -d -p 8080:80 --name angular-container angular-app'
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline succeeded, sending success email...'
      mail to: "${EMAIL_RECEPT}",
           subject: '✅ Build Success',
           body: 'Le pipeline Angular s’est exécuté avec succès.'
    }
    failure {
      echo '❌ Pipeline failed, sending failure email...'
      mail to: "${EMAIL_RECEPT}",
           subject: '❌ Build Failed',
           body: 'Le pipeline Angular a échoué.'
    }
  }
}
