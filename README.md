# Portafolio — Oscar Rico

Sitio personal multilingüe (ES/EN/RU) de Oscar Rico, desarrollador backend Java.
Publicado con GitHub Pages en https://ricocodetech.github.io.

## Stack

HTML5, CSS3 y JavaScript vanilla. Sin build, sin frameworks y sin dependencias
externas. Tipografía del sistema y estilos propios en `assets/css/styles.css`.

## Estructura

```
.
├── index.html
├── 404.html
├── .nojekyll
├── .gitignore
├── README.md
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/i18n.js
    ├── js/main.js
    ├── cv/
    └── img/
```

## Desarrollo local

```bash
python3 -m http.server 8000
```

Abrir http://localhost:8000.

## Contenido

- `assets/js/i18n.js`: textos en español, inglés y ruso.
- `robots.txt` y `sitemap.xml`: directrices de indexación para buscadores.
- `assets/cv/`: colocar aquí el PDF del CV con el nombre `Oscar-Rico-CV.pdf`.
  Mientras no exista, el botón muestra el aviso "CV próximamente".
- La documentación interna de trabajo (`AGENTS.md` y `mi_descripcion.md`) se
  mantiene en local y no se versiona en este repositorio público.

## Publicación

El sitio se sirve desde el repositorio `RicoCodetech.github.io`, rama `main` y
carpeta raíz. En GitHub: *Settings → Pages → Deploy from a branch → main → / (root)*.

## Pendientes

- PDF del CV.
- Email y LinkedIn.
- Tarjeta del proyecto Spring Boot/API REST.
- Captura real de la terminal (opcional).