# 🚀 Portfolio Dan LAINE

Un portfolio moderne et professionnel développé avec Next.js et Tailwind CSS, conçu pour présenter les compétences et l'expérience d'un technicien informatique en recherche d'alternance.

![Interface du site](public/Interface-site.png)

## 🌐 [Voir le site en ligne](https://portfolio-dan-laine.netlify.app)

## ✨ Fonctionnalités

- **Design moderne et responsive** - Adaptation parfaite sur tous les appareils
- **Animations fluides** - Transitions et effets visuels élégants
- **Mode sombre/clair** - Support automatique des préférences système
- **Navigation fluide** - Défilement smooth entre les sections
- **Formulaire de contact** - Intégration complète pour les recruteurs
- **Optimisé SEO** - Structure sémantique et métadonnées optimisées
- **Performance optimale** - Chargement rapide et expérience utilisateur fluide

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React avec rendu côté serveur
- **TypeScript** - Typage statique pour un code plus robuste
- **Tailwind CSS** - Framework CSS utilitaire pour un design cohérent
- **Framer Motion** - Animations et transitions fluides
- **React Hook Form** - Gestion des formulaires
- **Netlify** - Déploiement et hébergement

## 📁 Structure du projet

```
portfolio-dan/
├── src/
│   ├── app/                 # Pages et layout Next.js
│   ├── components/          # Composants React réutilisables
│   └── hooks/              # Hooks personnalisés
├── public/                  # Assets statiques
└── tailwind.config.js      # Configuration Tailwind CSS
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio-dan.git
cd portfolio-dan

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Construit l'application pour la production
npm run start        # Démarre le serveur de production
npm run lint         # Vérifie le code avec ESLint
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `src/app/globals.css` :

```css
:root {
  --primary: #1e4d2b;      /* Vert principal */
  --secondary: #2d5a3d;    /* Vert secondaire */
  --accent: #3a7c4f;       /* Vert accent */
}
```

### Contenu

Modifiez les composants dans `src/components/` pour adapter le contenu :
- `Hero.tsx` - Section d'accueil
- `Parcours.tsx` - Expérience professionnelle
- `Formations.tsx` - Parcours de formation
- `Projets.tsx` - Projets réalisés
- `Contact.tsx` - Formulaire de contact

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🌙 Mode sombre

Le site supporte automatiquement le mode sombre selon les préférences système de l'utilisateur.

## 📈 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` pour les variables d'environnement :

```env
NEXT_PUBLIC_SITE_URL=https://votre-site.com
```

### Déploiement

Le site est configuré pour un déploiement facile sur Netlify :

1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `.next`

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Antonin Gourinchas**
- 💻 Portfolio : https://gourinchas.com
- 📍 Localisation : Caen, Normandie
  
**Dan LAINE**
- 📧 Email : dan.laine.contact@gmail.com
- 📱 Téléphone : 07 49 17 43 59
- 📍 Localisation : Caen, Normandie

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- [Netlify](https://netlify.com/) pour l'hébergement
- [Framer Motion](https://www.framer.com/motion/) pour les animations

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
