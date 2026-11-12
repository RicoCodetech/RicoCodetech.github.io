# AGENTS.md — Portafolio de Oscar Rico

> Contexto permanente para futuras sesiones de trabajo. Si cambia una decisión, actualizar este archivo.

## 1. Propósito

Portafolio personal bilingüe (ES/EN) de Oscar Rico, publicado con GitHub Pages en
`https://ricocodetech.github.io`. Sirve para presentar su perfil backend Java,
sus tecnologías y sus proyectos reales a reclutadores de prácticas/junior y a
equipos técnicos.

## 2. Stack y restricciones

- HTML5 + CSS3 + JavaScript vanilla. Sin build, sin frameworks, sin CDN y sin fuentes externas.
- En esta máquina no hay Node/npm, Java ni Maven instalados. Sí hay Python 3
  (`python3 -m http.server`).
- El sitio debe funcionar como archivos estáticos y en GitHub Pages.
- GitHub Pages no debe procesar Jekyll: `.nojekyll` en la raíz.
- Accesibilidad y rendimiento obligatorios: HTML semántico, focus visible,
  contraste suficiente, `prefers-reduced-motion` y cero dependencias.

## 3. Identidad y decisiones de producto

- Nombre visible: **Oscar Rico**.
- Titular: **Desarrollador Backend Java**. No usar "estudiante" como titular;
  mencionar Ingeniería Informática (UNED) en *Sobre mí*.
- Ubicación: **España · Remoto**.
- Estado: abierto a prácticas / primera oportunidad junior.
- Contacto: **solo GitHub** (`https://github.com/RicoCodetech`) por ahora.
  Email y LinkedIn están pendientes; no inventarlos.
- CV: botón implementado, PDF pendiente en `assets/cv/`. Mientras no exista, el
  botón muestra "CV próximamente" y nunca debe provocar un 404.
- Idioma: español por defecto, detección del idioma del navegador y selector
  ES/EN persistido en `localStorage` con la clave `portfolio-lang`.
- Estética: oscura, minimalista, acento verde/azul, tipografía del sistema y
  detalle terminal/código.

## 4. Reglas de contenido

- Solo proyectos reales. No inventar proyectos, métricas, empresas, fechas ni experiencia.
- Spring Boot forma parte del stack actual y no se etiqueta como "en formación".
  El proyecto que lo demuestra se añadirá al publicarse.
- APIs REST, Solidity y ciberseguridad se mantienen como "en progreso" /
  "explorando" hasta que exista evidencia (repo o demo).
- El flujo con IA (Warp, OpenCode y Claude Code) se describe con prácticas
  verificables: contexto, planificación, revisión de diffs, tests y
  verificación. No afirmar uso diario de herramientas que no se usen.
- Todo texto nuevo debe existir en español e inglés.
- Español neutro, frases cortas, tono profesional y cercano. Inglés natural, no
  traducción literal.
- Enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- No afirmar años concretos de experiencia.

## 5. Estructura del proyecto

```
portafolio/
├── index.html
├── 404.html
├── .nojekyll
├── README.md
├── AGENTS.md
├── mi_descripcion.md
└── assets/
    ├── css/styles.css
    ├── js/i18n.js
    ├── js/main.js
    ├── cv/                  (PDF pendiente)
    └── img/
        ├── avatar.jpg
        └── favicon.svg
```

## 6. Convenciones de implementación

- Los textos traducibles usan `data-i18n="clave"` en elementos hoja (sin hijos).
- Los `aria-label` traducibles usan `data-i18n-aria="clave"`.
- Las traducciones viven en `assets/js/i18n.js` con claves planas
  (`nav.home`, `hero.bio`, etc.).
- El idioma activo se refleja en `<html lang>` y en la clase visual del selector.
- Variables CSS en `:root` para color, radios, sombras y tipografía.
- Las animaciones de aparición usan `.reveal` + `IntersectionObserver` y se
  desactivan con `prefers-reduced-motion`.
- El botón de CV usa `data-cv-src` y comprueba el PDF con una petición `HEAD`.
  Si no existe, apunta a `#contacto`, se marca `aria-disabled` y muestra un
  aviso; nunca debe provocar un 404 al hacer clic.
- No añadir comentarios innecesarios en el código.

## 7. Comandos

```bash
# Previsualizar el sitio
python3 -m http.server 8000
# Abrir http://localhost:8000

# Comprobar que no hay enlaces locales rotos (ejemplo)
python3 - <<'PY'
from html.parser import HTMLParser
# ...
PY
```

No existen comandos de build, lint ni tests: es un sitio estático.

## 8. Git y despliegue

- Remote: `https://github.com/RicoCodetech/RicoCodetech.github.io.git`.
- Es un repo de *user page*: la rama `main` se publica en la raíz
  `https://ricocodetech.github.io`.
- El repo remoto ya contiene un `README.md`. Antes del primer commit hay que
  adoptar su historial para no crear historiales no relacionados.
- **No hacer push sin confirmación explícita del usuario.**
- Tras publicar, verificar en GitHub *Settings → Pages*: source
  "Deploy from a branch", branch `main`, folder `/ (root)`.

## 9. Plan aprobado (resumen)

1. Trabajar `mi_descripcion.md` como brief de contenido.
2. Crear la estructura estática anterior.
3. Implementar secciones: Inicio, Sobre mí, Tecnologías, Proyectos y Contacto.
4. Contenido bilingüe ES/EN con selector persistente.
5. Diseño oscuro responsive con detalle terminal.
6. SEO básico (title, description, canonical, Open Graph, favicon), `.nojekyll`
   y página 404.
7. Verificar en local y dejar listo para commit.
8. Publicar en GitHub Pages solo cuando el usuario lo confirme.

## 10. Secciones y contenido

- **Inicio:** avatar, nombre, titular, stack corto, bio, ubicación, CTAs
  "Ver proyectos" y "Descargar CV".
- **Sobre mí:** perfil, formación UNED, enfoque backend, intereses en
  ciberseguridad/Solidity y ficha de datos rápidos.
- **Tecnologías:** Backend (Java, Spring Boot, APIs REST en progreso), Datos
  (MySQL, H2, SQL), Herramientas (Git, GitHub, Maven, JUnit 5, Linux),
  Explorando (Solidity, ciberseguridad, Raspberry Pi) y Flujo con IA
  (Warp, OpenCode y Claude Code; contexto, planificación, revisión, tests y
  verificación).
- **Proyectos:** tarjeta destacada de `inventario` con vista previa de terminal,
  stack, puntos fuertes y enlaces. El proyecto Spring Boot/API REST se añadirá
  cuando esté publicado.
- **Contacto:** GitHub, disponibilidad y ubicación. Email/LinkedIn pendientes.
- **Footer:** año dinámico, stack del sitio y enlace a GitHub.

## 11. Proyecto `inventario`

- Repo: `https://github.com/RicoCodetech/inventario`.
- CLI de gestión de inventario con CRUD sobre MySQL.
- Arquitectura modular con interfaz e implementación.
- Validaciones de datos y cantidades no negativas.
- Tests con JUnit 5 + H2; CI con GitHub Actions; build con Maven; licencia MIT.
- Documentación y SRS en el propio repo.

No afirmar que el proyecto `inventario` usa Spring Boot: actualmente es
Java + JDBC/MySQL. El nuevo proyecto Spring Boot tendrá su propia tarjeta
cuando esté publicado.

## 12. Estado y pendientes

- [x] Brief y plan aprobados.
- [x] Sitio implementado (HTML, CSS, JS, i18n, 404, favicon).
- [ ] PDF del CV en `assets/cv/`.
- [ ] Email y LinkedIn.
- [ ] Tarjeta del proyecto Spring Boot/API REST cuando esté publicado.
- [ ] Captura real de terminal (opcional; ahora hay una vista CSS).
- [x] Publicación inicial en GitHub Pages.
- [x] Commit local de los cambios de contenido (IA y Spring Boot).
- [ ] Push de los cambios de contenido a GitHub Pages.

## 13. Próximos pasos sugeridos

- Añadir badge "Disponible para prácticas/junior" si se quiere reforzar.
- Actualizar el README del perfil de GitHub con el mismo resumen.
- Cuando exista el proyecto Spring Boot, incluir demo o Swagger para demostrarlo.
- Revisar el bloque de IA si cambia el flujo de trabajo o las herramientas.
- Incorporar LinkedIn y CV en cuanto estén listos.