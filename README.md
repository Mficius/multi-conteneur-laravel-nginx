# 🚀 Starter Fullstack Laravel + Frontend (Dockerisé)

![Docker](https://img.shields.io/badge/Docker-Containerisé-blue)
![Laravel](https://img.shields.io/badge/Laravel-API-red)
![Node](https://img.shields.io/badge/Node.js-Frontend-green)
![Nginx](https://img.shields.io/badge/Nginx-Reverse--Proxy-brightgreen)
![Licence](https://img.shields.io/badge/Licence-MIT-lightgrey)

Ce projet fournit un **environnement de développement fullstack moderne** utilisant :

* ⚙️ **Backend Laravel (API REST)**
* 🎨 **Frontend (React / Vue / Next.js)**
* 🌐 **Proxy inverse Nginx**
* 🐳 **Orchestration avec Docker Compose**

L'objectif est de permettre de **lancer toute l'application avec une seule commande**, sans installer **PHP, Node.js ou Nginx** sur la machine locale.

---

# 📚 Table des matières

* Architecture
* Services
* Structure du projet
* Démarrage rapide
* Configuration de l'API Laravel
* Routage du proxy inverse
* Dépannage
* Commandes Docker utiles
* Améliorations possibles
* Auteur

---

# 🏗️ Architecture

```
Navigateur
   │
   ▼
Nginx Reverse Proxy
   │
 ┌─┴────────────┐
 ▼              ▼
Frontend       Backend Laravel
(React/Vue)        API REST
```

---

# 📦 Services

| Service  | Description                       | URL                                            |
| -------- | --------------------------------- | ---------------------------------------------- |
| Frontend | Application React / Vue / Next.js | [http://localhost:3000](http://localhost:3000) |
| Backend  | API Laravel                       | [http://localhost:8000](http://localhost:8000) |
| Nginx    | Point d'entrée principal          | [http://localhost:8080](http://localhost:8080) |

---

# 📁 Structure du projet

```bash
.
├── backend/
│   ├── Dockerfile
│   └── routes/api.php
│
├── frontend/
│   ├── Dockerfile
│   └── ...
│
├── nginx/
│   └── default.conf
│
└── docker-compose.yml
```

---

# 🚀 Démarrage rapide

## 1️⃣ Prérequis

Assurez-vous d'avoir installé :

* Docker
* Docker Compose

Vérifiez l'installation :

```bash
docker -v
docker compose version
```

---

## 2️⃣ Cloner le projet

```bash
git clone https://github.com/Mficius/multi-conteneur-laravel-nginx.git

cd docker-react-laravel-app
```

---

## 3️⃣ Lancer l'environnement

```bash
docker-compose up -d --build
```

Docker va :

* construire les images
* créer le réseau
* démarrer les conteneurs

---

# ⚙️ Configuration de l'API Laravel

Depuis **Laravel 11**, les routes API ne sont plus activées par défaut.

Exécutez :

```bash
docker-compose exec laravel-container php artisan install:api
```

Cela va créer :

```bash
routes/api.php
```

---

# 🔎 Vérifier les routes Laravel

```bash
docker-compose exec laravel-container php artisan route:list
```

Exemple de sortie :

```
GET|HEAD   api/users
POST       api/login
```

---

# 🌐 Routage du Proxy Inverse

Nginx écoute sur :

```
http://localhost:8080
```

Règles de routage :

| Requête | Destination             |
| ------- | ----------------------- |
| /       | frontend-container:3000 |
| /api    | laravel-container:80    |

Configuration correcte :

```bash
proxy_pass http://laravel-container:80;
```

Configuration incorrecte :

```bash
proxy_pass http://localhost:8000;
```

Les conteneurs Docker communiquent **via leur nom de service**, et non via localhost.

---

# 🛠️ Dépannage

## Erreur Connection Refused

Erreur typique :

```
connect() failed (111: Connection refused)
```

Cause : mauvais port dans la configuration Nginx.

Mauvais :

```bash
proxy_pass http://laravel-container:8000;
```

Correct :

```bash
proxy_pass http://laravel-container:80;
```

---

## Erreur 404 sur /api

Exemple :

```
http://localhost:8080/api/test
```

Vérifiez que la route existe :

```php
Route::get('/test', function () {
    return response()->json([
        "message" => "API fonctionnelle"
    ]);
});
```

---

# 🧰 Commandes Docker utiles

Démarrer les conteneurs

```bash
docker-compose up -d
```

Arrêter les conteneurs

```bash
docker-compose down
```

Reconstruire les conteneurs

```bash
docker-compose up -d --build
```

Accéder au conteneur Laravel

```bash
docker-compose exec laravel-container bash
```

Voir les logs

```bash
docker-compose logs -f
```

---

# 📦 Améliorations possibles

Ce projet peut être enrichi avec :

* 🗄 **MySQL ou PostgreSQL**
* ⚡ **Redis (cache et queues)**
* 🔐 **Authentification JWT**
* 📬 **Laravel Queues**
* ☁️ **CI/CD (GitHub Actions, GitLab CI, Jenkins)**
* ☸️ **Déploiement Kubernetes**

---

# 👨‍💻 Auteur

**Sigmund Mayitoukou**

DevOps Engineer • Cloud Architect • Backend Developer

LinkedIn
[https://www.linkedin.com/in/sigmund-mayitoukou-8179b5147/](https://www.linkedin.com/in/sigmund-mayitoukou-8179b5147/)

---

⭐ Si ce projet vous est utile, n'hésitez pas à **mettre une étoile sur le dépôt GitHub**.
