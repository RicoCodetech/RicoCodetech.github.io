# Brief del portafolio — Oscar Rico

> Documento de contenido y contexto del sitio `https://ricocodetech.github.io`.
> Para decisiones técnicas, estructura y convenciones, consultar `AGENTS.md`.

## 1. Resumen

Portafolio personal bilingüe (ES/EN) para presentar el perfil backend Java de
Oscar Rico, sus tecnologías y sus proyectos reales. El objetivo es conseguir
prácticas o una primera oportunidad como desarrollador backend, transmitiendo
claridad, honestidad y ganas de aprender.

## 2. Identidad

| Campo | Valor |
| --- | --- |
| Nombre | Oscar Rico |
| Titular | Desarrollador Backend Java |
| Ubicación | España · Remoto |
| Formación | Ingeniería Informática · UNED |
| Disponibilidad | Prácticas / primera oportunidad junior |
| GitHub | https://github.com/RicoCodetech |
| Email | Pendiente |
| LinkedIn | Pendiente |

## 3. Biografía

### Español

Soy Oscar, desarrollador backend y estudiante de Ingeniería Informática en la
UNED. Me gusta entender cómo funcionan las cosas por dentro y convertir esa
curiosidad en software claro, mantenible y fácil de probar.

Mi foco actual está en el ecosistema Java: aplicaciones con MySQL y buenas
prácticas como testing, control de versiones y despliegue. Estoy construyendo
una API REST con Spring Boot y disfruto especialmente diseñando la lógica y la
estructura de datos antes de escribir la primera línea.

También trabajo con agentes de IA como parte de mi flujo: Warp y OpenCode en el
día a día, y Claude Code con el mismo enfoque. Me centro en dar contexto, revisar
los cambios y verificar con tests, no en delegar sin criterio.

Fuera del backend también me interesan la seguridad y la tecnología blockchain.
Estoy explorando la creación de smart contracts con Solidity y la idea de montar
un pequeño SOC doméstico con una Raspberry Pi y un VPS. Aprender haciendo es mi
forma favorita de avanzar.

### English

I'm Oscar, a backend developer and a Computer Engineering student at UNED. I
like understanding how things work under the hood and turning that curiosity
into clear, maintainable and testable software.

My current focus is the Java ecosystem: applications with MySQL and good
practices such as testing, version control and deployment. I'm building a REST
API with Spring Boot, and I especially enjoy designing the logic and data
structure before writing the first line of code.

I also work with AI agents as part of my workflow: Warp and OpenCode day to day,
and Claude Code with the same approach. I focus on providing context, reviewing
changes and verifying with tests, not on delegating without judgement.

Beyond backend, I'm also interested in security and blockchain technology. I'm
exploring building smart contracts with Solidity and the idea of setting up a
small home SOC with a Raspberry Pi and a VPS. Learning by doing is my favourite
way to move forward.

## 4. Tecnologías

### Stack actual

- **Java:** base del proyecto de inventario y de ejercicios de estructuras de datos.
- **Spring Boot:** APIs REST y aplicaciones backend; proyecto demostrativo en camino.
- **MySQL:** persistencia real en el proyecto de inventario.
- **Git y GitHub:** control de versiones, repositorios y CI con GitHub Actions.
- **Maven:** gestión y empaquetado del proyecto Java.
- **JUnit 5 + H2:** pruebas unitarias de la capa de datos.
- **Linux:** entorno de desarrollo y scripts.

### En progreso

- **APIs REST:** diseño de endpoints y buenas prácticas HTTP.
- **Solidity:** smart contracts.
- **Ciberseguridad:** concepto de mini SOC con Raspberry Pi y VPS.

### IA y agentes

- **Warp:** terminal y flujo de trabajo diario.
- **OpenCode:** agente de código para explorar, implementar y revisar.
- **Claude Code:** mismo enfoque de agentes de terminal.
- **Prácticas:** contexto, planificación, revisión de diffs, tests y verificación.

Spring Boot se presenta como stack actual; el proyecto que lo demuestra se
añadirá al publicarse. APIs REST, Solidity y ciberseguridad se mantienen como
áreas en progreso.

## 5. Proyectos

### 5.1 Sistema de Inventario de Tienda

- **Repo:** https://github.com/RicoCodetech/inventario
- **Tipo:** aplicación de línea de comandos (CLI).
- **Descripción:** gestión de inventario con operaciones CRUD sobre MySQL,
  secciones predefinidas, validación de datos y cantidades no negativas.
- **Arquitectura:** interfaz `IGestionBaseDatos` e implementación
  `GestionBaseDatos`, modelo `Producto`, enum `Section` y separación de la
  entrada de datos.
- **Calidad:** tests con JUnit 5 sobre H2, integración continua con GitHub
  Actions, build con Maven y licencia MIT.
- **Puntos fuertes para la tarjeta:** CRUD completo, MySQL, arquitectura
  modular, testing y CI.
- **Enlaces:** código y documentación del repositorio.

### 5.2 Proyecto Spring Boot/API REST (pendiente)

Se añadirá una tarjeta cuando el proyecto Spring Boot con API REST esté
publicado. Datos necesarios: nombre, descripción, stack, repo, demo/Swagger y
puntos fuertes.

## 6. Contacto

- **GitHub:** https://github.com/RicoCodetech
- **Email:** pendiente de decidir.
- **LinkedIn:** pendiente de facilitar la URL.

Mientras no existan, el sitio solo muestra GitHub y un estado de disponibilidad.
No inventar ni mostrar datos de contacto falsos.

## 7. Decisiones de diseño

- Estilo oscuro, minimalista y técnico, con acento verde/azul.
- Tipografía del sistema, sin dependencias externas.
- Secciones bien diferenciadas con navegación fija.
- Detalle visual de terminal/código para reforzar el perfil backend.
- Bilingüe ES/EN con selector y persistencia en el navegador.
- Contenido honesto: Spring Boot se presenta como stack actual; APIs REST,
  Solidity y ciberseguridad se marcan como áreas en progreso.
- El flujo con IA se describe con prácticas verificables, no como una lista de
  herramientas.
- Botón de CV preparado, pero desactivado hasta que exista el PDF.

## 8. Pendientes

- [ ] Subir el PDF del CV a `assets/cv/`.
- [ ] Decidir email profesional y añadirlo.
- [ ] Añadir LinkedIn.
- [ ] Publicar el proyecto Spring Boot/API REST y crear su tarjeta.
- [ ] Opcional: captura real de la terminal para el proyecto de inventario.
- [ ] Commit y publicación en GitHub Pages.

## 9. Texto original de referencia

> Bienvenido a mi informacion profesional, mi nombre es Oscar y soy estudiante en
> ingenieria informatica por la universidad de la UNED, actualmente estoy
> enfocado en backend con java y springboot, pero como buen informatico tengo
> muchisimas inquietudes que voy abordando poco a poco, como la programacion con
> solidity enfocada a smartcontracts, o la creacion de un mini SOC en una humilde
> raspberry pi a traves de un VPS.