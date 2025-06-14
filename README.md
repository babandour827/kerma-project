# Kerma Architect Web

## 📋 Présentation

**Kerma Architect Web** est une application web moderne développée avec **Vite**, **React** et **Tailwind CSS**, dédiée à la présentation du portfolio et des services de l’architecte Kerma. Elle offre une interface élégante, responsive et performante, permettant de mettre en valeur les projets architecturaux.

## ✨ Fonctionnalités

- **Page d’accueil** dynamique avec bannière et introduction.
- **Section Projets** : galerie d’images illustrant les réalisations.
- **Page À propos** : biographie, compétences et philosophie de l’architecte.
- **Page Contact** avec formulaire fonctionnel et liens vers réseaux sociaux.
- **Optimisation SEO** et métadonnées pour un meilleur référencement.
- **Responsive design** : expérience utilisateur optimale sur mobiles, tablettes et desktops.

## 🛠️ Prérequis

- Node.js (>=14)
- npm ou yarn

## 🚀 Installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-compte/kerma-architect-web.git
   cd kerma-architect-web
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Démarrer le serveur de développement :**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   L’application sera accessible via `http://localhost:5173`.

## 🔧 Scripts Disponibles

| Script         | Description                             |
| -------------- | --------------------------------------- |
| `dev`          | Démarrage en mode développement         |
| `build`        | Compilation pour la production          |
| `preview`      | Prévisualiser le build de production    |
| `lint`         | Analyse de la qualité du code (ESLint)  |
| `format`       | Formatage du code (Prettier)           |

## 🗂️ Structure du projet

```
kerma-architect-web/
├─ public/                # Fichiers statiques (favicon, images)
├─ src/
│  ├─ components/         # Composants React réutilisables
│  ├─ pages/              # Pages principales de l’application
│  ├─ assets/             # Styles, images et fichiers statiques
│  ├─ App.jsx             # Point d’entrée principal
│  └─ main.jsx            # Initialisation React + Vite
├─ tailwind.config.ts     # Configuration Tailwind CSS
├─ vite.config.ts         # Configuration Vite
├─ package.json           # Dépendances et scripts
└─ README.md              # Documentation du projet
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour proposer des améliorations :

1. Forkez le projet.
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`).
3. Commitez vos modifications (`git commit -m "feat: ajout de ..."`)..
4. Pushez la branche (`git push origin feature/ma-fonctionnalite`).
5. Ouvrez une Pull Request.
