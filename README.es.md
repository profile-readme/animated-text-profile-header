# animated-text-profile-header

[English](README.md) | [日本語](README.ja.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [Français](README.fr.md) | Español

Encabezados animados y limpios para el README de tu perfil de GitHub, con tus propias palabras. Escribe un texto corto en la URL o usa palabras integradas como «About me» y «Projects». También puedes mostrar un estado que cambias con un solo enlace, o una frase del día. Elige un efecto como escritura, onda, fundido o brillo, y pega una línea de Markdown.

<p align="center">
  <img src="https://readmes.pages.dev/text/say/Hi%2C%20I'm%20a%20developer/typing/size-48" alt="Hi, I'm a developer, escrito letra por letra tras un cursor parpadeante">
</p>
<p align="center">
  <img src="https://readmes.pages.dev/text/about-me/wave/gradient" alt="About me en degradado, con las letras moviéndose como una ola">
  <img src="https://readmes.pages.dev/text/projects/underline/sparkles" alt="Projects con subrayado y destellos centelleantes">
</p>

Cada encabezado de arriba es un SVG generado en vivo a partir de texto real. Abre la [página de ayuda](https://readmes.pages.dev/text/help) para probar todas las opciones con vista previa en vivo.

Palabras clave: texto animado, encabezado de README de perfil de GitHub, SVG de escritura, animación de escritura, texto en onda, texto en degradado, título de README, título de sección, insignia de estado, estado de disponibilidad, frase del día, decoración de perfil, Cloudflare Pages Functions.

## Inicio rápido

Escribe tu propio texto después de `say/` y pega la línea en el `README.md` de tu perfil, es decir, el repositorio que tiene tu nombre de usuario:

```markdown
![Hi, I'm Aki](https://readmes.pages.dev/text/say/Hi%2C%20I'm%20Aki/wave)
```

El español funciona tal cual, con tildes y signos de apertura:

```markdown
![¡Hola a todos!](https://readmes.pages.dev/text/say/%C2%A1Hola%20a%20todos!/wave)
```

Los espacios se escriben `%20` y las comas `%2C`, la forma habitual de poner texto en una dirección web. El generador de la página de ayuda hace esta codificación por ti. Si lo prefieres, el mismo texto también funciona como parámetro de consulta, como en `/text/wave?text=Hi%20there`.

El texto personalizado puede tener hasta 60 caracteres y estar en cualquier idioma. Los enlaces como `https://` o `www.` se rechazan, para que un encabezado no pueda convertirse en un anuncio.

Las palabras integradas te ahorran la codificación en los títulos de sección habituales:

```markdown
![About me](https://readmes.pages.dev/text/about-me/wave)
```

Úsalas como títulos de sección en todo tu README:

```markdown
![Projects](https://readmes.pages.dev/text/projects/underline)
...
![Contact](https://readmes.pages.dev/text/contact/underline)
```

Para centrar un encabezado, usa HTML:

```html
<p align="center">
  <img src="https://readmes.pages.dev/text/hello/typing/size-56" alt="Hello!">
</p>
```

## Por qué usar imágenes como encabezados

Los encabezados de Markdown son sencillos y se ven igual en todos los perfiles. Mucha gente quiere un poco más de personalidad al principio del README o entre secciones. Las imágenes son la única forma de añadir estilo, color y movimiento, porque GitHub elimina el CSS personalizado y los scripts de los README.

El problema es que la mayoría de las imágenes de encabezado son capturas de pantalla o GIF. Pesan mucho, se ven borrosas en pantallas nítidas y tienen un solo color fijo, así que desentonan en modo oscuro. Estos encabezados son distintos. Son archivos SVG que contienen texto real y unas pocas líneas de CSS. Siguen siendo ligeros y nítidos a cualquier tamaño, siguen el tema claro u oscuro de quien los mira y se animan sin ningún script.

## Las palabras integradas

| Palabra | Texto mostrado |
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

Cubren las secciones que usan la mayoría de los perfiles y se leen un poco mejor en tu README que un texto personalizado codificado. Para todo lo demás, usa `say/` con tus propias palabras.

## Efectos

Los efectos se eligen con una sola opción. Solo se aplica un efecto a la vez, mientras que los colores y las decoraciones se combinan libremente con cualquiera de ellos.

`typing` escribe el texto letra a letra tras un cursor parpadeante. Mantiene la línea completa un momento, luego la borra y vuelve a empezar. Es el aspecto clásico de terminal y funciona mejor con saludos cortos.

`wave` hace que las letras suban y bajen una tras otra, como una onda que las atraviesa. Es animado pero fácil de leer, y encaja con perfiles desenfadados.

`fade` hace aparecer las letras de izquierda a derecha. Tras una breve pausa, se desvanecen en el mismo orden. Es sereno y elegante, y combina bien con la tipografía serif.

`glow` mantiene el texto quieto y añade detrás un halo suave que late despacio. Queda especialmente bien en modo oscuro con un color de acento.

`none` es el valor predeterminado y dibuja el texto sin movimiento, ideal para títulos de sección que no deben distraer.

`speed-N` cambia el ritmo de cualquier efecto, del 25 al 400 por ciento. `static` desactiva todo movimiento, incluidos los colores arcoíris y los destellos.

## Estado

`/text/status` muestra tu estado actual, como «Open to work», «Busy» u «On vacation». Lo eliges con un enlace secreto en lugar de editar tu README. Todos los perfiles y páginas que muestran la imagen se actualizan en un minuto aproximadamente.

La demo en `readmes.pages.dev` muestra un estado de ejemplo para que puedas probar los estilos. Para mostrar el tuyo, despliega una copia como se describe más abajo. Tu lista de estados va en una variable de entorno privada, uno por línea:

```
Writing code
In a meeting
Open to work
On vacation until Monday
```

Cambiar de estado es una sola petición con tu token:

```sh
curl https://my-badges.pages.dev/text/swap/<token>        # siguiente estado
curl https://my-badges.pages.dev/text/swap/<token>/4      # estado número 4
curl https://my-badges.pages.dev/text/state/<token>       # ver la lista y el estado actual
```

Un token incorrecto recibe el mismo 404 que cualquier página inexistente, así que nadie puede saber desde fuera si el cambio de estado está activado. La imagen de estado nunca se guarda en caché, por lo que un cambio llega a los visitantes casi de inmediato.

### Cómo escribir buenos estados

Un estado funciona mejor cuando el visitante puede actuar en consecuencia. «Open to work» invita a escribirte, mientras que «On vacation until Monday» indica cuándo esperar una respuesta. Los estados cortos se leen mejor que los largos, y normalmente bastan unas pocas palabras.

Mantén la lista breve y predecible. De cinco a diez entradas cubren la mayoría de las situaciones, y recordarás sus números, lo que hace rápido cambiar con `/text/swap/<token>/<n>`. Pon primero el estado que más usas, porque una instalación nueva empieza por la entrada número uno.

Evita cualquier cosa que no quieras que lean desconocidos, como fechas exactas de viaje o la dirección de un evento. Un perfil es público, y también lo es todo lo que muestra la imagen.

## Frases

`/text/quote` muestra una línea de una lista. Elige una nueva en cada visita a la página, o una al día con `daily`. La demo usa unas cuantas frases cortas originales. Tu propia copia lee tu lista desde una variable de entorno privada, una frase por línea.

Las buenas frases para un perfil son cortas. Una línea de hasta 60 caracteres cabe bien en un README, y todo lo que pase de 80 caracteres se recorta. Cita al autor cuando uses las palabras de otra persona, y recuerda que una cita larga de un libro reciente puede estar protegida por derechos de autor.

### Aleatoria o diaria

Las frases aleatorias cambian en cada visita, lo que premia a quienes vuelven a menudo. Las frases diarias cambian una vez al día a medianoche UTC, así que todos los que visitan el mismo día ven la misma línea. Por eso la opción diaria es mejor cuando la frase está junto a otro contenido y debe parecer elegida a propósito y no por casualidad.

Una lista de unas treinta frases con `daily` da un mes de variedad antes de que algo se repita. Añade líneas nuevas cuando quieras; aparecerán la próxima vez que se lea la lista.

Con `serif` y un tamaño moderado, de unos 22 a 28 píxeles, una frase se lee como una línea de un libro y queda cómoda bajo un encabezado. El efecto `fade` le sienta bien, porque las palabras llegan con suavidad en lugar de todas de golpe. Para una página más tranquila, combina una frase diaria con `static`, de modo que cambie cada día sin moverse.

## Diseñar un perfil con encabezados

Empieza con un encabezado llamativo cerca de tu nombre, como `hello` con `typing` o `welcome` con una onda. Eso marca el tono. Debajo, usa encabezados sencillos para cada sección, como `about-me`, `projects` y `contact`, sin movimiento. Una página llena de texto en movimiento cansa enseguida.

Mantén los tamaños coherentes. Un saludo grande de unos 56 píxeles con títulos de sección de unos 28 a 32 píxeles crea una jerarquía clara, como un documento con título y capítulos.

Ajusta la fuente al resto de tu perfil. La fuente sin serifa es neutra y moderna. La fuente con serifa encaja con escritores e investigadores, y la monoespaciada evoca la terminal o el estilo hacker. Mezclar fuentes rara vez ayuda, así que elige una y úsala en todos los encabezados.

### Elegir colores

Deja el tema en `auto` salvo que tengas un motivo. Así el texto se vuelve claro sobre fondos oscuros y oscuro sobre fondos claros, exactamente como el resto de GitHub.

Si quieres color, elige un solo color de acento con `color-RRGGBB` y úsalo en todos los encabezados y subrayados. Las opciones `gradient` y `rainbow` son divertidas para un saludo llamativo, pero funcionan peor en cada título de sección.

Comprueba tu elección en modo claro y en modo oscuro antes de decidirte. GitHub permite cambiar de tema desde los ajustes de la cuenta, que es la forma más rápida de previsualizarlo.

## Opciones

Las opciones son segmentos de ruta después de `/text/`, en cualquier orden. Se admite un `.svg` al final y no importan las mayúsculas. Si escribes algo mal, la imagen se convierte en un pequeño aviso rosa que indica la posición de la opción desconocida.

| Opción | Efecto |
|---|---|
| `say/<text>` | Tu propio texto, hasta 60 caracteres, codificado para URL |
| `?text=...` | Lo mismo, como parámetro de consulta |
| una palabra de la tabla | Ese encabezado (`hello` por defecto) |
| `status`, `quote` | Tu estado o una frase en lugar de una palabra |
| `daily` | Con `quote`, una línea al día |
| `typing`, `wave`, `fade`, `glow`, `none` | Efecto (`none` por defecto) |
| `speed-N` | Velocidad del efecto en porcentaje, de 25 a 400 |
| `static` | Ningún movimiento |
| `sans`, `serif`, `mono` | Fuente (`sans` por defecto) |
| `size-N`, `size-Nrem` | Tamaño de fuente en píxeles, de 16 a 96 (40 por defecto) |
| `px` | Píxeles exactos en lugar de rem (ver abajo) |
| `color-RRGGBB` | Color del texto y del acento en hexadecimal, sin `#` |
| `warm` | Paleta cálida de readmes en lugar de los colores de texto de GitHub (por defecto) |
| `gradient` | Degradado de naranja a rosa y a lavanda |
| `rainbow` | Cada letra en su propio color, que cambia despacio |
| `upper`, `lower` | Cambiar mayúsculas y minúsculas |
| `underline` | Línea de acento redondeada bajo el texto |
| `sparkles` | Destellos centelleantes alrededor del texto |
| `card` | Fondo de tarjeta redondeada |
| `border-N` | Borde de la tarjeta en píxeles, de 0 a 8 |
| `auto`, `light`, `dark`, `transparent` | Tema (`auto` por defecto) |

### Tamaños en rem

Cada encabezado se dimensiona en rem, donde 1rem equivale a 16 píxeles. Con la configuración predeterminada del navegador se ve exactamente igual que un tamaño en píxeles. Cuando un lector ha aumentado el tamaño de letra predeterminado de su navegador, a menudo para leer con más comodidad, el encabezado crece con él, igual que el texto que lo rodea. También puedes escribir los tamaños en rem, como `size-2rem`, que coincide con un encabezado `#` de Markdown en GitHub. Añade `px` cuando un encabezado deba mantener un tamaño exacto en píxeles.

## Ejemplos

| Estilo | URL |
|---|---|
| Saludo de terminal | `https://readmes.pages.dev/text/hello-world/mono/typing` |
| Título de sección elegante | `https://readmes.pages.dev/text/experience/serif/fade` |
| Cabecera divertida | `https://readmes.pages.dev/text/welcome/wave/rainbow/sparkles` |
| Título separador discreto | `https://readmes.pages.dev/text/projects/underline/size-28` |
| Neón en modo oscuro | `https://readmes.pages.dev/text/now/glow/color-ff5d8f/dark/card` |
| Pensamiento del día | `https://readmes.pages.dev/text/quote/daily/serif/size-24` |

## Cómo funciona

Cada encabezado se dibuja letra por letra. El servidor conoce el ancho de cada carácter en las tres familias de fuentes, medido una sola vez a partir de fuentes que comparten las medidas de Arial, Times New Roman y Courier New. Con eso coloca cada letra en una posición exacta. Como las letras están separadas, el CSS puede mover, desvanecer o colorear cada una con su propio ritmo. Eso es lo que hace posibles la escritura, la onda y el fundido sin ningún script.

Las fuentes en sí vienen del dispositivo de cada visitante. Windows tiene Arial y Times New Roman, macOS tiene Helvetica y Times con métricas compatibles, y Linux suele incluir las fuentes Liberation. Todas tienen el mismo ancho de caracteres, así que el espaciado se mantiene uniforme en todas partes.

El texto que no está en inglés sencillo, como el japonés, usa la fuente del sistema del visitante. El espaciado de esos caracteres es estimado, lo que funciona bien para escrituras de ancho completo.

### Tamaño y rapidez

Un encabezado suele pesar entre uno y cuatro kilobytes, mucho menos que un GIF animado con el mismo texto. El efecto de escritura es el más pesado, porque describe un paso por cada letra, y aun así es más ligero que la mayoría de los iconos. Las páginas con muchos encabezados cargan rápido incluso con conexiones lentas.

Las palabras integradas se guardan en caché durante un día, así que las visitas repetidas son instantáneas. Los estados y las frases aleatorias nunca se guardan en caché, porque deben estar al día, pero se generan en pocos milisegundos.

### Combinar con otros widgets

Los encabezados combinan de forma natural con los demás widgets del mismo sitio. Un reloj bajo un encabezado «Now» indica a los visitantes qué hora es donde estás. Una insignia de correo bajo «Contact» les da una forma de contactarte sin exponer tu dirección como texto. Pequeños kaomoji animados junto a un encabezado añaden un toque de personalidad.

Mantén el mismo color de acento y el mismo tema en todos, y la página se leerá como un único diseño y no como una colección de imágenes sueltas.

## Accesibilidad

Cada imagen lleva su texto como título, y deberías repetir las palabras en el texto alternativo, como en `![About me](...)`. Así los lectores de pantalla anuncian el encabezado con normalidad.

Los visitantes que han activado la reducción de movimiento en su sistema ven el texto completo sin animación. En Windows ocurre cuando «Efectos de animación» está desactivado en la configuración de accesibilidad. Los colores predeterminados cumplen el contraste AA de las WCAG sobre los fondos claro y oscuro de GitHub. Comprueba los colores personalizados en ambos temas, porque un color que destaca sobre blanco puede desaparecer sobre negro.

El texto animado puede distraer a algunos lectores. Una buena regla es un encabezado animado en la parte superior del perfil y encabezados sencillos o `static` para las secciones de debajo.

## Ejecutar tu propia copia

Prepara una copia cuando quieras tu propio estado y tus propias frases, o palabras adicionales. Es gratis en Cloudflare Pages y lleva unos diez minutos.

Necesitas Node.js 20 o posterior, `make` y una cuenta gratuita de Cloudflare. No hay `npm install`, porque el proyecto no tiene dependencias.

1. Haz clic en «Use this template» en GitHub, crea tu repositorio y clónalo.
2. Pon tu nombre y el enlace de tu repositorio en `site.config.json`.
3. Crea el proyecto de Pages y un pequeño almacén clave-valor para tu estado:

```sh
npx wrangler pages project create my-badges --production-branch production
npx wrangler kv namespace create text-state
```

4. Copia `wrangler.toml.example` a `wrangler.toml` y rellena el nombre de tu proyecto y el identificador del espacio de nombres. El `wrangler.toml` real queda fuera de Git.
5. Guarda tus estados y frases (archivos llamados `STATUSES.txt` y `QUOTES.txt`, una entrada por línea) y un token aleatorio largo como secretos:

```sh
for v in STATUSES QUOTES; do
  npx wrangler pages secret put "$v" --project-name my-badges < ~/private/"$v".txt
done
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
npx wrangler pages secret put TEXT_SWAP_TOKEN --project-name my-badges
```

6. Despliega con `make deploy PROJECT=my-badges`.

Para añadir palabras, edita la lista en `src/text/content.js`. Cada entrada asocia el nombre de la URL con el texto que se dibuja.

### Estructura del proyecto

```
functions/text/         Pages Functions: encabezado, cambio, estado, ayuda, agentes
src/text/content.js     palabras integradas, estados y frases de demo
src/text/render.js      colocación de letras, efectos y decoraciones
src/text/handler.js     estado, frases, enlaces con token
src/text/pages.js       generador de URL y guía para agentes
scripts/build-metrics.mjs  volver a medir el ancho de los caracteres (ImageMagick)
test/                   pruebas unitarias con node:test
```

Todo vive bajo una ruta `text`, así que este proyecto puede compartir un proyecto de Pages con otras aplicaciones de insignias sin que choquen los nombres de archivo.

## Páginas web

| Ruta | Contenido |
|---|---|
| `/text/help` | Ejemplos, generador de URL con vista previa en vivo, tablas de opciones |
| `/text/agents` | Guía en Markdown para agentes de IA y herramientas |

Las páginas incluyen etiquetas Open Graph y JSON-LD de schema.org, además de estilos de foco para el teclado y un enlace para saltar al contenido. Los despliegues de vista previa se marcan automáticamente como noindex, y los scripts solo se permiten por hash mediante una política de seguridad de contenido (CSP) estricta.

## Preguntas frecuentes

### ¿Puedo escribir cualquier texto en la URL?

Sí, con `say/` seguido de tu texto. Puede tener hasta 60 caracteres, en cualquier idioma. Los enlaces se rechazan y los caracteres de control se eliminan. Solo necesitas tu propia copia para un estado que cambies con un enlace o para tu propia lista de frases.

### ¿Por qué la animación de escritura vuelve a empezar?

Cada visitante llega a tu perfil en un momento diferente. El bucle garantiza que todos vean la línea completa en pocos segundos, lleguen cuando lleguen.

### Mi estado no ha cambiado

Espera un minuto y vuelve a cargar. Los cambios llegan a todas las ubicaciones de la red en unos sesenta segundos, y la imagen nunca se guarda en caché. Si sigue mostrando el estado anterior, revisa el token y consulta `/text/state/<token>` para ver qué entrada está activa.

### ¿Puedo programar un cambio de estado?

No viene integrado. Como el cambio es una sola petición web, puedes enviarla desde cualquier programador que ya uses, como una tarea cron o una automatización del calendario. Guarda el token en el almacén de secretos de esa herramienta y no en un script que compartas.

### ¿Los encabezados funcionan en otros idiomas?

Sí. El texto personalizado puede usar japonés, chino u otras escrituras. Esos caracteres se dibujan con la fuente del sistema del visitante y un espaciado estimado, que queda natural en las escrituras de ancho completo y algo holgado en algunas otras.

### ¿Puedo usarlos fuera de GitHub?

Sí. Funciona en cualquier lugar que pueda mostrar una URL de imagen, incluidos sitios personales, documentación y otros alojamientos de código.

## Solución de problemas

### La imagen muestra «unknown option»

El aviso indica la posición del segmento que no reconoció, contando desde el primer segmento después de `/text/`. Comprueba la ortografía con la tabla de palabras y las opciones. Las palabras compuestas usan guion, como en `about-me`.

### Las letras se solapan o están mal espaciadas

Ocurre cuando un dispositivo no tiene Arial, ni Helvetica, ni Liberation Sans, algo poco habitual. El navegador usa entonces una fuente con anchos distintos. Cambiar a `mono` lo soluciona, porque las fuentes monoespaciadas dan el mismo ancho a todas las letras.

### La animación no se reproduce

Comprueba si la reducción de movimiento está activada en los ajustes de tu sistema. En Windows es el interruptor «Efectos de animación» de la configuración de accesibilidad. Algunas vistas previas de Markdown en los editores solo muestran una imagen fija, mientras que GitHub sí reproduce la animación.

### El enlace de estado devuelve 503

El token es correcto, pero el despliegue no tiene almacén clave-valor. Añade el enlace `TEXT_STATE` a `wrangler.toml` y vuelve a desplegar.

## Privacidad

La demo no almacena nada. No hay subidas, formularios, cookies ni analítica. Cada imagen se calcula solo a partir de la ruta de la URL.

En tu propia copia, el único valor almacenado es el número de tu estado actual. Tus estados, frases y token viven en secretos cifrados de Cloudflare y nunca aparecen en el repositorio. Recuerda que cualquier estado o frase que muestres es público para todos los que visitan tu perfil.

En GitHub, las imágenes se obtienen a través del proxy de GitHub, así que el servicio normalmente nunca ve las direcciones IP de quienes miran tu perfil. Como en cualquier sitio web, Cloudflare puede conservar registros de peticiones estándar según su propia [política de privacidad](https://www.cloudflare.com/privacypolicy/).

## Aviso legal

Esta traducción se ofrece solo como referencia. En caso de discrepancia, prevalece la versión en inglés del README.

La demo alojada en `readmes.pages.dev` se ofrece «tal cual» y de forma gratuita, sin garantía de ningún tipo, expresa o implícita. Eso incluye las garantías de comerciabilidad, idoneidad para un fin determinado, disponibilidad y no infracción. Puede limitarse, modificarse o retirarse en cualquier momento sin previo aviso. Los autores no se hacen responsables de ningún daño derivado de su uso.

Los estados y frases de la demo son ejemplos escritos para este proyecto y no describen la disponibilidad real de nadie.

Este proyecto no está afiliado a GitHub ni a Cloudflare, ni cuenta con su respaldo o patrocinio. Los nombres de fuentes se mencionan solo para describir la compatibilidad, y todas las marcas pertenecen a sus propietarios.

El texto personalizado lo escribe quien construye la dirección de la imagen, no este proyecto. Eres responsable de las palabras que pones en tus encabezados. No uses el servicio para acoso, suplantación de identidad, spam ni nada ilegal. La demo puede bloquear sin previo aviso textos o direcciones abusivos.

Si despliegas tu propia copia, eres el único responsable del texto que publicas, incluidas las citas y su atribución. También eres responsable de mantener tu token a salvo y de cumplir las condiciones de los servicios que usas y las leyes del lugar donde vives.

Nada de este repositorio constituye asesoramiento legal. Los textos de las licencias son los términos que rigen.

## Licencia

El código se distribuye bajo la licencia [GNU AGPL-3.0](LICENSE). Si ejecutas una versión modificada como servicio público, debes ofrecer su código fuente a sus usuarios; mantener tu copia de la plantilla pública en GitHub cumple con ello. El archivo [NOTICE](NOTICE) explica las medidas de las fuentes y los textos de demo.

---

<p align="center"><sub>© 2026 Aesthetic Vulpes (<a href="https://github.com/didvc">github.com/didvc</a>) · <a href="https://readmes.pages.dev/">readmes.pages.dev</a></sub></p>
