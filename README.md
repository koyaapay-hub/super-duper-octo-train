# KoyaPay — Landing page

Fichiers séparés pour modifier facilement.

## Structure

- `index.html` → contenu (textes, sections, liens)
- `style.css` → design (couleurs, tailles, mise en page)
- `script.js` → animations au scroll, menu mobile, modal contact

## Comment modifier

### Textes / contenus
Ouvre `index.html` et change les titres, paragraphes, tarifs, liens, etc.

### Couleurs
En haut de `style.css`, dans `:root` :
```css
--navy: #0F1B2D;
--green: #2FAF64;
--paper: #FBF9F5;
...
```

### Logo
Le logo est en base64 dans `index.html` (balise `<img src="data:image/png;base64,...">`).
Pour le changer : remplace par `src="logo.png"` et place ton fichier logo dans ce dossier.

### Formulaire contact
Dans le modal, l’action Formspree est encore `YOUR_FORM_ID`.
Remplace par ton vrai ID Formspree :
```html
<form id="demoForm" action="https://formspree.io/f/TON_ID" method="POST">
```

## Hébergement
Glisse le dossier sur Vercel ou Netlify (comme actuellement).
