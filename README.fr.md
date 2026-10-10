# animated-text-profile-header

[English](README.md) | [日本語](README.ja.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | Français | [Español](README.es.md)

Des titres animés et soignés pour le README de votre profil GitHub, avec vos propres mots. Écrivez un court texte dans l'URL, ou utilisez des mots intégrés comme « About me » et « Projects ». Vous pouvez aussi afficher un statut que vous changez d'un seul lien, ou une citation du jour. Choisissez un effet comme la frappe, la vague, le fondu ou la lueur, puis collez une ligne de Markdown.

<p align="center">
  <img src="https://readmes.pages.dev/text/say/Hi%2C%20I'm%20a%20developer/typing/size-48" alt="Hi, I'm a developer, tapé lettre par lettre derrière un curseur clignotant">
</p>
<p align="center">
  <img src="https://readmes.pages.dev/text/about-me/wave/gradient" alt="About me en dégradé, les lettres ondulant comme une vague">
  <img src="https://readmes.pages.dev/text/projects/underline/sparkles" alt="Projects avec un soulignement et des étincelles scintillantes">
</p>

Chaque titre ci-dessus est un SVG généré en direct à partir de vrai texte. Ouvrez la [page d'aide](https://readmes.pages.dev/text/help) pour essayer toutes les options avec un aperçu en direct.

Pour les agents d'IA et les outils, un guide Markdown se trouve sur [readmes.pages.dev/text/agents](https://readmes.pages.dev/text/agents).

Mots-clés : texte animé, titre de README de profil GitHub, SVG de frappe, animation de frappe, texte en vague, texte en dégradé, titre de README, titre de section, badge de statut, statut de disponibilité, citation du jour, décoration de profil, Cloudflare Pages Functions.

## Démarrage rapide

Écrivez votre propre texte après `say/` et collez la ligne dans le `README.md` de votre profil, c'est-à-dire le dépôt qui porte votre nom d'utilisateur :

```markdown
![Hi, I'm Aki](https://readmes.pages.dev/text/say/Hi%2C%20I'm%20Aki/wave)
```

Le français fonctionne tel quel, accents compris :

```markdown
![Bonjour, à tous !](https://readmes.pages.dev/text/say/Bonjour%2C%20%C3%A0%20tous%20!/wave)
```

Les espaces s'écrivent `%20` et les virgules `%2C`, la façon habituelle de mettre du texte dans une adresse web. Le générateur de la page d'aide fait cet encodage pour vous. Si vous préférez, le même texte fonctionne aussi en paramètre de requête, comme dans `/text/wave?text=Hi%20there`.

Le texte personnalisé peut compter jusqu'à 60 caractères, dans n'importe quelle langue. Les liens comme `https://` ou `www.` sont refusés, pour qu'un titre ne puisse pas devenir une publicité.

Les mots intégrés vous évitent l'encodage pour les titres de section courants :

```markdown
![About me](https://readmes.pages.dev/text/about-me/wave)
```

Utilisez-les comme titres de section dans tout votre README :

```markdown
![Projects](https://readmes.pages.dev/text/projects/underline)
...
![Contact](https://readmes.pages.dev/text/contact/underline)
```

Pour centrer un titre, utilisez du HTML :

```html
<p align="center">
  <img src="https://readmes.pages.dev/text/hello/typing/size-56" alt="Hello!">
</p>
```

## Pourquoi des images pour les titres

Les titres Markdown sont sobres et se ressemblent sur tous les profils. Beaucoup de gens aimeraient un peu plus de caractère en haut de leur README ou entre les sections. Les images sont le seul moyen d'ajouter du style, de la couleur et du mouvement, car GitHub retire le CSS personnalisé et les scripts des README.

Le problème, c'est que la plupart des images de titre sont des captures d'écran ou des GIF. Elles sont lourdes, floues sur les écrans haute définition et figées dans une seule couleur, si bien qu'elles détonnent en mode sombre. Ces titres sont différents. Ce sont des fichiers SVG qui contiennent du vrai texte et quelques lignes de CSS. Ils restent légers et nets à toutes les tailles, suivent le thème clair ou sombre du visiteur et s'animent sans aucun script.

## Les mots intégrés

| Mot | Texte affiché |
|---|---|
| `hello` | Hello! |
| `hi` | Hi there |
| `welcome` | Welcome |
| `hello-world` | Hello, world! |
| `about-me` | About me |
| `projects` | Projects |
| `featured` | Featured projects |
| `skills` | Skills |
| `tech-stack` | Tech stack |
| `tools` | Tools |
| `experience` | Experience |
| `open-source` | Open source |
| `now` | Now |
| `currently` | Currently |
| `learning` | Currently learning |
| `working-on` | Working on |
| `blog` | Blog |
| `stats` | Stats |
| `contact` | Contact |
| `get-in-touch` | Get in touch |
| `support` | Support my work |
| `thanks` | Thanks for visiting |

Ils couvrent les sections de la plupart des profils, et se lisent un peu plus proprement dans votre README qu'un texte personnalisé encodé. Pour tout le reste, utilisez `say/` avec vos propres mots.

## Effets

Les effets se choisissent avec une seule option. Un seul effet s'applique à la fois, tandis que les couleurs et les décorations se combinent librement avec chacun d'eux.

`typing` écrit le texte une lettre à la fois derrière un curseur clignotant. Il garde la ligne complète un instant, puis l'efface et recommence. C'est le look classique du terminal, idéal pour de courtes salutations.

`wave` fait monter et descendre les lettres l'une après l'autre, comme une ondulation qui passe. C'est vivant mais facile à lire, et cela convient aux profils ludiques.

`fade` fait apparaître les lettres de gauche à droite. Après une courte pause, elles s'effacent dans le même ordre. C'est calme et élégant, et cela s'accorde bien avec la police à empattements.

`glow` garde le texte immobile et ajoute derrière lui un halo doux qui pulse lentement. C'est particulièrement réussi en mode sombre avec une couleur d'accent.

`none` est la valeur par défaut et dessine le texte sans mouvement, ce qui est idéal pour les titres de section qui ne doivent pas distraire.

`speed-N` modifie le rythme de n'importe quel effet, de 25 à 400 pour cent. `static` coupe tout mouvement, y compris les couleurs arc-en-ciel et les étincelles.

## Statut

`/text/status` affiche votre statut actuel, comme « Open to work », « Busy » ou « On vacation ». Vous le choisissez avec un lien secret au lieu de modifier votre README. Chaque profil et chaque page qui affiche l'image se met à jour en une minute environ.

La démo sur `readmes.pages.dev` affiche un statut d'exemple pour que vous puissiez essayer les styles. Pour afficher le vôtre, déployez une copie comme décrit plus bas. Votre liste de statuts va dans une variable d'environnement privée, un par ligne :

```
Writing code
In a meeting
Open to work
On vacation until Monday
```

Changer de statut tient en une seule requête avec votre jeton :

```sh
curl https://my-badges.pages.dev/text/swap/<token>        # statut suivant
curl https://my-badges.pages.dev/text/swap/<token>/4      # statut numéro 4
curl https://my-badges.pages.dev/text/state/<token>       # voir la liste et le statut actuel
```

Un mauvais jeton reçoit le même 404 que n'importe quelle page inexistante, si bien que personne ne peut savoir de l'extérieur si le changement de statut est activé. L'image de statut n'est jamais mise en cache, donc un changement atteint les visiteurs presque immédiatement.

### Bien rédiger ses statuts

Un statut fonctionne le mieux quand le visiteur peut agir en conséquence. « Open to work » invite à écrire, tandis que « On vacation until Monday » indique quand attendre une réponse. Les statuts courts se lisent mieux que les longs, et quelques mots suffisent généralement.

Gardez une liste courte et prévisible. Cinq à dix entrées couvrent la plupart des situations, et vous retiendrez leurs numéros, ce qui rend le changement avec `/text/swap/<token>/<n>` rapide. Placez en premier le statut que vous utilisez le plus souvent, car une nouvelle installation commence par l'entrée numéro un.

Évitez tout ce que vous ne voudriez pas voir lu par des inconnus, comme des dates de voyage précises ou l'adresse d'un événement. Un profil est public, et tout ce que montre l'image l'est aussi.

## Citations

`/text/quote` affiche une ligne tirée d'une liste. Il en choisit une nouvelle à chaque affichage de la page, ou une par jour avec `daily`. La démo utilise quelques courtes phrases originales. Votre propre copie lit votre liste depuis une variable d'environnement privée, une citation par ligne.

Les bonnes citations pour un profil sont courtes. Une ligne de 60 caractères au plus tient joliment dans un README, et tout ce qui dépasse 80 caractères est coupé. Citez l'auteur quand vous reprenez les mots de quelqu'un, et gardez à l'esprit qu'une longue citation d'un livre récent peut être protégée par le droit d'auteur.

### Aléatoire ou quotidienne

Les citations aléatoires changent à chaque affichage de la page, ce qui récompense les visiteurs qui reviennent souvent. Les citations quotidiennes changent une fois par jour à minuit UTC, si bien que tous ceux qui passent le même jour voient la même ligne. C'est donc le meilleur choix quand une citation est placée à côté d'autres contenus et doit sembler choisie plutôt que due au hasard.

Une liste d'une trentaine de citations avec `daily` offre un mois de variété avant toute répétition. Ajoutez de nouvelles lignes quand vous le souhaitez ; elles apparaîtront la prochaine fois que la liste sera lue.

Avec la police à empattements, à une taille modeste d'environ 22 à 28 pixels, une citation se lit comme une ligne de livre et trouve sa place sous un titre. L'effet `fade` lui va bien, car les mots arrivent en douceur plutôt que d'un coup. Pour une page plus calme, associez une citation quotidienne à `static` : elle change chaque jour sans bouger.

## Composer un profil avec des titres

Commencez par un titre marquant près de votre nom, comme `hello` avec l'effet de frappe ou `welcome` avec une vague. Cela donne le ton. En dessous, utilisez des titres sobres pour chaque section, comme `about-me`, `projects` et `contact`, sans mouvement. Une page pleine de texte qui bouge devient vite fatigante à lire.

Gardez des tailles cohérentes. Une grande salutation d'environ 56 pixels avec des titres de section d'environ 28 à 32 pixels crée une hiérarchie claire, un peu comme un document avec un titre et des chapitres.

Accordez la police au reste de votre profil. La police sans empattements est neutre et moderne. La police à empattements convient aux auteurs et aux chercheurs, et la police à chasse fixe évoque le terminal ou l'esprit hacker. Mélanger les polices aide rarement : choisissez-en une et utilisez-la pour tous les titres.

### Choisir les couleurs

Laissez le thème sur `auto` sauf raison particulière. Le texte devient alors clair sur fond sombre et foncé sur fond clair, exactement comme le reste de GitHub.

Si vous voulez de la couleur, choisissez une seule couleur d'accent avec `color-RRGGBB` et utilisez-la pour tous les titres et soulignements. Les options `gradient` et `rainbow` sont amusantes pour une salutation accrocheuse, mais conviennent moins bien à chaque titre de section.

Vérifiez votre choix en mode clair comme en mode sombre avant de vous décider. GitHub permet de changer de thème dans les paramètres du compte, c'est le moyen le plus rapide de prévisualiser.

## Options

Les options sont des segments de chemin après `/text/`, dans n'importe quel ordre. Un `.svg` final est accepté et la casse n'a pas d'importance. Si vous faites une faute de frappe, l'image devient une petite notice rose qui indique la position de l'option inconnue.

| Option | Effet |
|---|---|
| `say/<text>` | Votre propre texte, jusqu'à 60 caractères, encodé pour l'URL |
| `?text=...` | La même chose, en paramètre de requête |
| un mot du tableau | Ce titre (`hello` par défaut) |
| `status`, `quote` | Votre statut ou une citation au lieu d'un mot |
| `daily` | Avec `quote`, une ligne par jour |
| `typing`, `wave`, `fade`, `glow`, `none` | Effet (`none` par défaut) |
| `speed-N` | Vitesse de l'effet en pourcentage, de 25 à 400 |
| `static` | Aucun mouvement |
| `sans`, `serif`, `mono` | Police (`sans` par défaut) |
| `size-N`, `size-Nrem` | Taille de police en pixels, de 16 à 96 (40 par défaut) |
| `px` | Pixels exacts au lieu de rem (voir ci-dessous) |
| `color-RRGGBB` | Couleur du texte et de l'accent en hexadécimal, sans `#` |
| `warm` | Palette chaude de readmes au lieu des couleurs de texte de GitHub (par défaut) |
| `gradient` | Dégradé de l'orange au rose puis au lavande |
| `rainbow` | Chaque lettre dans sa propre couleur, qui change lentement |
| `upper`, `lower` | Changer la casse des lettres |
| `underline` | Ligne d'accent arrondie sous le texte |
| `sparkles` | Étincelles scintillantes autour du texte |
| `card` | Fond en carte arrondie |
| `border-N` | Bordure de la carte en pixels, de 0 à 8 |
| `auto`, `light`, `dark`, `transparent` | Thème (`auto` par défaut) |

### Tailles en rem

Chaque titre est dimensionné en rem, où 1rem vaut 16 pixels. Avec les réglages par défaut du navigateur, le rendu est identique à une taille en pixels. Lorsqu'un lecteur a augmenté la taille de police par défaut de son navigateur, souvent pour lire plus facilement, le titre grandit avec elle, comme le texte qui l'entoure. Vous pouvez aussi écrire les tailles en rem, par exemple `size-2rem`, qui correspond à un titre Markdown `#` sur GitHub. Ajoutez `px` lorsqu'un titre doit garder une taille exacte en pixels.

## Exemples

| Style | URL |
|---|---|
| Salutation façon terminal | `https://readmes.pages.dev/text/hello-world/mono/typing` |
| Titre de section élégant | `https://readmes.pages.dev/text/experience/serif/fade` |
| En-tête ludique | `https://readmes.pages.dev/text/welcome/wave/rainbow/sparkles` |
| Titre de séparation discret | `https://readmes.pages.dev/text/projects/underline/size-28` |
| Néon en mode sombre | `https://readmes.pages.dev/text/now/glow/color-ff5d8f/dark/card` |
| Pensée du jour | `https://readmes.pages.dev/text/quote/daily/serif/size-24` |

## Fonctionnement

Chaque titre est dessiné lettre par lettre. Le serveur connaît la largeur de chaque caractère dans les trois familles de polices, mesurée une fois pour toutes sur des polices qui partagent les dimensions d'Arial, de Times New Roman et de Courier New. Il place chaque lettre à une position exacte. Comme les lettres sont séparées, le CSS peut déplacer, estomper ou colorer chacune selon son propre rythme. C'est ce qui rend possibles la frappe, la vague et le fondu sans aucun script.

Les polices elles-mêmes viennent de l'appareil de chaque visiteur. Windows dispose d'Arial et de Times New Roman, macOS d'Helvetica et de Times aux métriques compatibles, et Linux fournit généralement les polices Liberation. Toutes ont les mêmes largeurs de caractères, si bien que l'espacement reste régulier partout.

Le texte qui n'est pas en anglais simple, comme le japonais, utilise la police système du visiteur. L'espacement de ces caractères est estimé, ce qui fonctionne bien pour les écritures pleine chasse.

### Poids et rapidité

Un titre pèse généralement entre un et quatre kilo-octets, bien moins qu'un GIF animé du même texte. L'effet de frappe est le plus lourd, car il décrit une étape pour chaque lettre, et il reste pourtant plus léger que la plupart des icônes. Les pages qui contiennent beaucoup de titres se chargent vite, même sur une connexion lente.

Les mots intégrés sont mis en cache pendant une journée, si bien que les visites suivantes sont instantanées. Les statuts et les citations aléatoires ne sont jamais mis en cache, car ils doivent rester à jour, mais ils sont générés en quelques millisecondes.

### Combiner avec d'autres widgets

Les titres s'associent naturellement aux autres widgets du même site. Une horloge sous un titre « Now » indique aux visiteurs l'heure qu'il est chez vous. Un badge e-mail sous « Contact » leur donne un moyen de vous joindre sans exposer votre adresse en texte. De petits kaomoji animés peuvent se placer à côté d'un titre pour ajouter un peu de personnalité.

Gardez la même couleur d'accent et le même thème pour tous, et la page se lira comme un seul design plutôt que comme une collection d'images séparées.

## Accessibilité

Chaque image porte son texte comme titre, et vous devriez répéter les mots dans le texte alternatif, comme dans `![About me](...)`. Les lecteurs d'écran annoncent alors le titre normalement.

Les visiteurs qui ont activé la réduction des animations dans leur système voient le texte complet sans animation. Sous Windows, c'est le cas lorsque « Effets d'animation » est désactivé dans les paramètres d'accessibilité. Les couleurs par défaut respectent le contraste AA des WCAG sur les fonds clairs et sombres de GitHub. Vérifiez vos couleurs personnalisées dans les deux thèmes, car une couleur éclatante sur blanc peut disparaître sur noir.

Le texte animé peut distraire certains lecteurs. Une bonne règle : un titre animé en haut du profil, et des titres sobres ou `static` pour les sections en dessous.

## Héberger votre propre copie

Mettez en place une copie si vous voulez votre propre statut, vos propres citations ou des mots supplémentaires. C'est gratuit sur Cloudflare Pages et cela prend une dizaine de minutes.

Il vous faut Node.js 20 ou plus récent, `make` et un compte Cloudflare gratuit. Il n'y a pas de `npm install`, car le projet n'a aucune dépendance.

1. Cliquez sur « Use this template » sur GitHub, créez votre dépôt et clonez-le.
2. Mettez votre nom et le lien de votre dépôt dans `site.config.json`.
3. Créez le projet Pages et un petit stockage clé-valeur pour votre statut :

```sh
npx wrangler pages project create my-badges --production-branch production
npx wrangler kv namespace create text-state
```

4. Copiez `wrangler.toml.example` vers `wrangler.toml` et renseignez le nom de votre projet et l'identifiant de l'espace de noms. Le vrai `wrangler.toml` reste en dehors de Git.
5. Enregistrez vos statuts et citations (des fichiers nommés `STATUSES.txt` et `QUOTES.txt`, une entrée par ligne) ainsi qu'un long jeton aléatoire comme secrets :

```sh
for v in STATUSES QUOTES; do
  npx wrangler pages secret put "$v" --project-name my-badges < ~/private/"$v".txt
done
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
npx wrangler pages secret put TEXT_SWAP_TOKEN --project-name my-badges
```

6. Déployez avec `make deploy PROJECT=my-badges`.

Pour ajouter des mots, modifiez la liste dans `src/text/content.js`. Chaque entrée associe le nom utilisé dans l'URL au texte dessiné.

### Organisation du projet

```
functions/text/         Pages Functions : titre, changement, état, aide, agents
src/text/content.js     mots intégrés, statuts et citations de démo
src/text/render.js      placement des lettres, effets et décorations
src/text/handler.js     statut, citations, liens à jeton
src/text/pages.js       générateur d'URL et guide pour les agents
scripts/build-metrics.mjs  remesurer la largeur des caractères (ImageMagick)
test/                   tests unitaires node:test
```

Tout se trouve sous un chemin `text`, ce qui permet à ce projet de partager un projet Pages avec d'autres applications de badges sans conflit de noms de fichiers.

## Pages web

| Chemin | Contenu |
|---|---|
| `/text/help` | Exemples, générateur d'URL avec aperçu en direct, tableaux d'options |
| `/text/agents` | Guide Markdown pour les agents d'IA et les outils |

Les pages comportent des balises Open Graph et du JSON-LD schema.org, ainsi que des styles de focus clavier et un lien d'évitement. Les déploiements de prévisualisation sont automatiquement marqués noindex, et les scripts ne sont autorisés que par empreinte, au moyen d'une politique de sécurité du contenu (CSP) stricte.

## Questions fréquentes

### Puis-je écrire n'importe quel texte dans l'URL ?

Oui, avec `say/` suivi de votre texte. Il peut compter jusqu'à 60 caractères, dans n'importe quelle langue. Les liens sont refusés et les caractères de contrôle supprimés. Vous n'avez besoin de votre propre copie que pour un statut changé par lien ou pour votre propre liste de citations.

### Pourquoi l'effet de frappe recommence-t-il ?

Un titre de profil est vu à des moments différents par des visiteurs différents. La boucle garantit que chacun voit la ligne complète en quelques secondes, quel que soit le moment de son arrivée.

### Mon statut n'a pas changé

Attendez une minute, puis actualisez. Les changements atteignent chaque emplacement du réseau en une soixantaine de secondes, et l'image n'est jamais mise en cache. Si l'ancien statut s'affiche encore, vérifiez le jeton et consultez `/text/state/<token>` pour voir quelle entrée est active.

### Puis-je programmer un changement de statut ?

Ce n'est pas intégré. Comme le changement tient en une seule requête web, vous pouvez l'envoyer depuis n'importe quel planificateur que vous utilisez déjà, comme une tâche cron ou une automatisation d'agenda. Gardez le jeton dans le stockage de secrets de cet outil plutôt que dans un script que vous partagez.

### Les titres fonctionnent-ils dans d'autres langues ?

Oui. Le texte personnalisé peut utiliser le japonais, le chinois ou d'autres écritures. Ces caractères sont dessinés par la police système du visiteur avec un espacement estimé, ce qui paraît naturel pour les écritures pleine chasse et un peu lâche pour certaines autres.

### Puis-je les utiliser en dehors de GitHub ?

Oui. Partout où une URL d'image peut s'afficher, y compris les sites personnels, la documentation et d'autres hébergeurs de code.

## Dépannage

### L'image affiche « unknown option »

La notice indique la position du segment non reconnu, en comptant à partir du premier segment après `/text/`. Vérifiez l'orthographe à l'aide du tableau des mots et des options. Les mots composés utilisent un trait d'union, comme `about-me`.

### Les lettres se chevauchent ou sont mal espacées

Cela arrive quand un appareil ne dispose ni d'Arial, ni d'Helvetica, ni de Liberation Sans, ce qui est rare. Le navigateur utilise alors une police de largeurs différentes. Passer à `mono` règle le problème, car les polices à chasse fixe donnent la même largeur à chaque lettre.

### L'animation ne se lance pas

Vérifiez si la réduction des animations est activée dans les paramètres de votre système. Sous Windows, c'est l'interrupteur « Effets d'animation » des paramètres d'accessibilité. Certains aperçus Markdown dans les éditeurs n'affichent qu'une image fixe, alors que GitHub lui-même joue l'animation.

### Le lien de statut renvoie 503

Le jeton est correct, mais le déploiement n'a pas de stockage clé-valeur. Ajoutez la liaison `TEXT_STATE` à `wrangler.toml` et redéployez.

## Confidentialité

La démo ne stocke rien. Il n'y a ni envoi de fichiers, ni formulaire, ni cookie, ni statistique. Chaque image est calculée à partir du seul chemin de l'URL.

Dans votre propre copie, la seule valeur stockée est le numéro de votre statut actuel. Vos statuts, vos citations et votre jeton se trouvent dans des secrets Cloudflare chiffrés et n'apparaissent jamais dans le dépôt. N'oubliez pas que le statut ou la citation que vous affichez est public pour toute personne qui visite votre profil.

Sur GitHub, les images sont récupérées via le proxy de GitHub, si bien que le service ne voit normalement jamais les adresses IP des personnes qui consultent votre profil. Comme tout site web, Cloudflare peut conserver des journaux de requêtes standard selon sa propre [politique de confidentialité](https://www.cloudflare.com/privacypolicy/).

## Avertissement

Cette traduction est fournie à titre indicatif. En cas de divergence, la version anglaise du README fait foi.

La démo hébergée sur `readmes.pages.dev` est fournie « en l'état » et gratuitement, sans garantie d'aucune sorte, expresse ou implicite. Cela comprend les garanties de qualité marchande, d'adéquation à un usage particulier, de disponibilité et d'absence de contrefaçon. Elle peut être limitée, modifiée ou mise hors ligne à tout moment sans préavis. Les auteurs ne sont pas responsables des dommages découlant de son utilisation.

Les statuts et citations de la démo sont des exemples écrits pour ce projet et ne décrivent la disponibilité réelle de personne.

Ce projet n'est ni affilié à GitHub ou Cloudflare, ni approuvé ou parrainé par eux. Les noms de polices ne sont mentionnés que pour décrire la compatibilité, et toutes les marques appartiennent à leurs propriétaires.

Le texte personnalisé est écrit par la personne qui construit l'adresse de l'image, et non par ce projet. Vous êtes responsable des mots que vous placez dans vos titres. Merci de ne pas utiliser le service pour du harcèlement, de l'usurpation d'identité, du spam ou quoi que ce soit d'illégal. La démo peut bloquer sans préavis les textes ou adresses abusifs.

Si vous déployez votre propre copie, vous êtes seul responsable du texte que vous publiez, y compris les citations et leur attribution. Vous êtes également responsable de la sécurité de votre jeton ainsi que du respect des conditions des services que vous utilisez et des lois de votre lieu de résidence.

Rien dans ce dépôt ne constitue un conseil juridique. Les textes des licences font foi.

## Licence

Le code est distribué sous la licence [GNU AGPL-3.0](LICENSE). Si vous exploitez une version modifiée comme service public, vous devez en proposer le code source à ses utilisateurs ; garder votre copie du modèle publique sur GitHub y suffit. Le fichier [NOTICE](NOTICE) explique les mesures de polices et les textes de démo.

---

<p align="center"><sub>© 2026 Aesthetic Vulpes (<a href="https://github.com/didvc">github.com/didvc</a>) · <a href="https://readmes.pages.dev/">readmes.pages.dev</a></sub></p>
