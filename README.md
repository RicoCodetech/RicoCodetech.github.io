# Portafolio — Oscar Rico

Sitio personal bilingüe (ES/EN) de Oscar Rico, desarrollador backend Java.
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
├── assets/
│   ├── css/styles.css
│   ├── js/i18n.js
│   ├── js/main.js
│   ├── cv/
│   └── img/
└── mi_descripcion.md
```

## Desarrollo local

```bash
python3 -m http.server 8000
```

Abrir http://localhost:8000.

## Contenido

- `mi_descripcion.md`: brief de identidad, biografía, tecnologías, flujo con IA y proyectos.
- `AGENTS.md`: contexto técnico y decisiones del proyecto.
- `assets/js/i18n.js`: textos en español e inglés.
- `assets/cv/`: colocar aquí el PDF del CV con el nombre `Oscar-Rico-CV.pdf`.
  Mientras no exista, el botón muestra el aviso "CV próximamente".

## Publicación

El sitio se sirve desde el repositorio `RicoCodetech.github.io`, rama `main` y
carpeta raíz. En GitHub: *Settings → Pages → Deploy from a branch → main → / (root)*.

## Pendientes

- PDF del CV.
- Email y LinkedIn.
- Tarjeta del proyecto Spring Boot/API REST.
- Captura real de la terminal (opcional).