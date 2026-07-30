# robotane.github.io

Mon portfolio personnel, hébergé via GitHub Pages.

Site statique (HTML/CSS/JS) présentant mon parcours et mes projets.

```
index.html          page unique
css/style.css       styles, thèmes clair et sombre
js/script.js        menu mobile et bascule de thème
assets/cv/          CV au format PDF
assets/images/      photo de profil
markdown.md         ancienne version Markdown, conservée pour référence
```

## Développement local

Le site est servi tel quel par GitHub Pages (config Jekyll minimale via
`_config.yml`) : ouvrir `index.html` suffit pour prévisualiser en local.

Pour tester le chargement des ressources dans les mêmes conditions qu'en ligne :

```sh
python3 -m http.server 8000
```

## Thème

Le thème suit les préférences du système. La bascule dans la barre de navigation
enregistre un choix explicite dans `localStorage`, qui prend alors le pas sur le
système. Le thème initial est appliqué par un script inline dans `<head>` pour
éviter un flash de couleurs au chargement.

## Mettre à jour le CV

Le PDF servi par le site est une copie du CV générique, dont la source LaTeX est
maintenue hors de ce dépôt :

```sh
cp /chemin/vers/cv_generique_hellowork_informatique.pdf assets/cv/cv-serge-olivier-baye.pdf
```
