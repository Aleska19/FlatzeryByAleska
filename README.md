# FlatzeryByAleska

Sitio/landing web estático creado por Aleska19. Esta landing page fue entregada como proyecto para el curso de Desarrollo Web de Coderhouse. El repositorio contiene la página principal, estilos (SCSS/CSS), scripts front-end, recursos y la configuración usada para compilar/depurar el proyecto.

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://flatzerybyaleska.vercel.app) [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Estado de despliegue
- Desplegado en Vercel: https://flatzerybyaleska.vercel.app

Descripción del proyecto
- Tipo: Landing page / página estática
- Objetivo: Proyecto final/entrega para el curso de Desarrollo Web de Coderhouse. Diseñada para demostrar maquetación responsive, uso de SCSS, integración de Bootstrap y buenas prácticas básicas de frontend.
- Autor: Aleska19

Vista rápida
- Página principal: index.html
- Estilos fuente: scss/
- Estilos compilados: css/
- JavaScript: js/
- Recursos (imágenes, fuentes): assets/
- Configuración de Prepros: prepros.config
- Reglas de HTMLHint: .hintrc
- Metadata de node: package.json (usa Bootstrap como dependencia)

Demo local
- Abrir index.html directamente en el navegador para ver la landing.
- Recomendado: usar un servidor local (Live Server de VSCode, http-server) para evitar problemas con rutas y obtener recarga en caliente.

Instalación y configuración rápida
1. Clona el repositorio:
   git clone https://github.com/Aleska19/FlatzeryByAleska.git
   cd FlatzeryByAleska

2. Instala dependencias (opcional — solo si vas a usar herramientas npm):
   npm install

Contenido del package.json
- name: pre-entrega_cegarra
- version: 1.0.0
- dependencias:
  - bootstrap: ^5.3.3

Scripts útiles (ya añadidos al package.json)
- npm run dev  — arranca un servidor local con recarga (live-server).
- npm run sass — compila SCSS a CSS (modo desarrollo).
- npm run build:css — compila y minifica SCSS para producción.
- npm run build:js — minifica JS con terser.
- npm run build — build combinado (CSS + JS).

Prepros (si usas Prepros)
- El proyecto incluye prepros.config que puede contener las tareas de compilación de SCSS a CSS y minificación. Si usas Prepros, importa prepros.config en la app y verifica las rutas de entrada (scss/) y salida (css/).
- Pasos generales que aparecen en prepros.config (resumen):
  1. Compilar archivos SCSS desde scss/ hacia css/.
  2. Opcional: minificar CSS para producción.
  3. Copiar/optimizar assets a la carpeta final.

Flujo de trabajo sugerido
- Desarrollo:
  - Edita SCSS en scss/ y compílalo a css/ (Prepros o npm script sass).
  - Edita JS en js/ y prueba en el navegador con Live Server.
  - Organiza assets/ por tipo (images/, icons/, fonts/).
- Producción:
  - Ejecuta scripts de build para generar CSS/JS optimizado.
  - Optimiza imágenes y fuentes.
  - Despliega en Vercel (recomendado para despliegue automático desde GitHub).

Contribuir
1. Haz fork del repo.
2. Crea una rama: git checkout -b feature/nombre
3. Haz commits descriptivos.
4. Abre un Pull Request hacia main.

Licencia
- Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
- Autor: Aleska19 — https://github.com/Aleska19
