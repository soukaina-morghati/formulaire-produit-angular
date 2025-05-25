pipeline {
  agent any

  environment {
    EMAIL_RECEPT = 'morghatisoukaina22@gmail.com'
  }

  stages {
    stage('Clone') {
      steps {
        echo 'Cloning the repository...'
        git 'https://github.com/soukaina-morghati/formulaire-produit-angular.git'
      }
    }
    stage('Install') {
      steps {
        echo 'Installing dependencies...'
        bat 'npm install'
      }
    }
    stage('Quality Check') {
      steps {
        echo 'Running quality checks...'
        bat 'npm run lint'
      }
    }
    stage('Build Angular app') {
            steps {
                bat 'npx run build --configuration production'
            }
        }
  
    stage('Build Docker Image') {
      steps {
        echo 'Building the Docker image...'
        bat 'docker build -t angular-app .'
      }
      
    }
      stage('RUN') {
      steps {
        echo 'Running the application...'
        bat 'docker run -d -p 8080:80 angular-app'
      }
    }
  }

  post {
    success {
      mail to: "${EMAIL_RECEPT}",
           subject: '✅ Build Success',
           body: 'Le pipeline Angular s’est exécuté avec succès.'
    }
    failure {
      mail to: "${EMAIL_RECEPT}",
           subject: '❌ Build Failed',
           body: 'Le pipeline Angular a échoué.'
    }
  }
}
