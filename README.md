# ThovinAPI
Simple API de test pour le projet Android du module HMIN205.

* [Pré-requis](#pré-requis)
* [Installation](#installation)
* [Variables d'environnement](#variables-denvironnement)
* [Lancer](#lancer)


## Pré-requis
Pour installer l'API, vous devez avoir installé Node.Js 12+ avec npm.

## Installation
```bash
git clone git@github.com:DocAmaroo/ThovinAPI.git
cd ThovinAPI
npm i
```

## Variables d'environnement
```bash
export THOVIN_PORT=<listening_port> # (default: 8888)
export THOVIN_DB=<url_database_connection> # (default: Thovin)
```

## Lancer
```bash
# Serveur de développement
npm run dev

# Serveur de production
node index.js
```
