Starter Fullstack Laravel + Frontend (Dockerisé)

Ce projet fournit un environnement de développement fullstack conteneurisé comprenant :

⚙️ Backend Laravel (API REST)

🎨 Frontend (React / Vue / Next.js)

🌐 Proxy inverse Nginx

🐳 Orchestration avec Docker Compose

L’objectif est de permettre de démarrer toute l’application avec une seule commande, sans installer PHP, Node.js ou Nginx sur la machine locale.

🏗️ Vue d’ensemble de l’architecture

L’application est composée de trois services Docker principaux orchestrés avec Docker Compose.

Navigateur
    │
    ▼
Nginx Reverse Proxy
    │
 ┌──┴───────────┐
 ▼              ▼
Frontend       Backend Laravel
(React/Vue)    API
Services disponibles
Service	Description	URL
Frontend	Application React / Vue / Next.js	http://localhost:3000

Backend	API Laravel	http://localhost:8000

Nginx	Point d’entrée principal	http://localhost:8080
📁 Structure du projet
.
├── backend/                 # Application Laravel
│   ├── Dockerfile
│   └── routes/api.php
│
├── frontend/                # Application Frontend
│   ├── Dockerfile
│   └── ...
│
├── nginx/
│   └── default.conf         # Configuration Nginx
│
└── docker-compose.yml
🐳 Services Docker
⚙️ Backend (Laravel)

Le backend exécute une application Laravel exposant une API REST.

Responsabilités :

logique métier

authentification

interaction avec la base de données

exposition d’API REST

Accessible directement via :

http://localhost:8000

Exemple d’endpoint API :

http://localhost:8000/api/users
🎨 Frontend

Le frontend est développé avec un framework JavaScript moderne comme :

React

Vue

Next.js

Il s’exécute via un serveur Node.js de développement.

Accessible via :

http://localhost:3000

Fonctionnalités :

rechargement automatique (Hot Reload)

développement rapide

consommation de l’API Laravel

🌐 Proxy Inverse Nginx

Nginx agit comme point d’entrée unique pour l’application.

Accessible via :

http://localhost:8080

Il redirige les requêtes vers les bons services.

Table de routage
Chemin	Destination	Port interne
/	Frontend	3000
/api	Backend Laravel	80

Exemples :

http://localhost:8080/        → Frontend
http://localhost:8080/api     → API Laravel

⚠️ Important :
Nginx communique avec les conteneurs en utilisant le réseau Docker interne, pas les ports exposés sur la machine hôte.

🚦 Mise en route
1️⃣ Prérequis

Assurez-vous d’avoir installé :

Docker

Docker Compose

Vérifiez l’installation :

docker -v
docker compose version
2️⃣ Cloner le projet
git clone https://github.com/votre-utilisateur/fullstack-laravel-docker.git

cd fullstack-laravel-docker
3️⃣ Lancer l’environnement

Construire et démarrer les conteneurs :

docker-compose up -d --build

Docker va :

construire les images

créer le réseau

démarrer les conteneurs

4️⃣ Configuration de l’API Laravel (Laravel 11+)

Depuis Laravel 11, les routes API ne sont plus activées par défaut.

Exécutez cette commande :

docker-compose exec laravel-container php artisan install:api

Cela va créer :

routes/api.php
5️⃣ Vérifier les routes Laravel

Pour vérifier les routes enregistrées :

docker-compose exec laravel-container php artisan route:list

Exemple de sortie :

GET|HEAD   api/users
POST       api/login
🔗 Routage du Proxy Inverse

Nginx écoute sur :

http://localhost:8080

Le routage interne fonctionne ainsi :

Requête	Destination
/	frontend-container:3000
/api	laravel-container:80

Dans Docker, les conteneurs communiquent via leur nom de service.

Correct :

proxy_pass http://laravel-container:80;

Incorrect :

proxy_pass http://localhost:8000;
🛠️ Dépannage (Troubleshooting)
❌ Connection Refused (111)

Erreur typique :

connect() failed (111: Connection refused)

Cause :

Nginx pointe vers le mauvais port.

Mauvaise configuration :

proxy_pass http://laravel-container:8000;

Bonne configuration :

proxy_pass http://laravel-container:80;
❌ 404 Not Found sur /api

Exemple :

http://localhost:8080/api/test

Vérifiez :

1️⃣ La route existe
backend/routes/api.php

Exemple :

Route::get('/test', function () {
    return response()->json([
        "message" => "API fonctionnelle"
    ]);
});
2️⃣ Configuration Laravel 11

Vérifiez dans :

bootstrap/app.php

Que cette ligne existe :

api: __DIR__.'/../routes/api.php'
3️⃣ Configuration Nginx

Mauvais :

proxy_pass http://laravel-container:80/;

Correct :

proxy_pass http://laravel-container:80;

Le slash final peut casser le préfixe /api.

🧰 Commandes Docker utiles

Démarrer les conteneurs

docker-compose up -d

Arrêter les conteneurs

docker-compose down

Reconstruire les conteneurs

docker-compose up -d --build

Accéder au conteneur Laravel

docker-compose exec laravel-container bash

Voir les logs

docker-compose logs -f
📦 Améliorations possibles

Ce projet peut être enrichi avec :

🗄 MySQL ou PostgreSQL

⚡ Redis (cache / queues)

🔐 Authentification JWT

📬 Laravel Queues

☁️ CI/CD (GitHub Actions, GitLab CI, Jenkins)

☸️ Déploiement Kubernetes

👨‍💻 Auteur

Sigmund Mayitoukou

DevOps Engineer • Cloud Architect • Backend Developer

LinkedIn
https://www.linkedin.com/in/sigmund-mayitoukou-8179b5147/

⭐ Si ce projet vous est utile, n’hésitez pas à mettre une étoile sur le dépôt GitHub.