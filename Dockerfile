# Étape 1 : Construction de l'application Angular avec Node.js
FROM node:20 AS build
WORKDIR /app
# Copie des fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./
RUN npm install
# Copie du reste du code source dans l'image
COPY . .
# Construction de l'application Angular (le résultat sera dans /app/dist)
RUN npm run build --prod

# Étape 2 : Serveur Nginx pour héberger l'application compilée
FROM nginx:alpine
# Copie des fichiers compilés dans le dossier web de Nginx
COPY --from=build /app/dist/FormReactif /usr/share/nginx/html
# Copie de la configuration personnalisée de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Expose le port 80 pour accéder à l'application
EXPOSE 80
# Commande de démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
