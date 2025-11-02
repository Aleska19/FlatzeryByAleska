# FlatzeryByAleska

Sitio/landing web estático  Esta landing page fue entregada como proyecto para el curso de Desarrollo Web de Coderhouse. El repositorio contiene la página principal, estilos (SCSS/CSS), scripts front-end, recursos y la configuración usada para compilar/depurar el proyecto.

### Estado de despliegueEstado de despliegue
- Desplegado en Vercel: https://flatzerybyaleska.vercel.app

### Descripción del proyecto
- **Tipo:** Landing page / página estática
- **Objetivo:** Proyecto final/entrega para el curso de Desarrollo Web de Coderhouse. Diseñada para demostrar maquetación responsive, uso de SCSS, integración de Bootstrap y buenas prácticas básicas de frontend.
- Autor: Aleska19

**Vista rápida**
- Página principal: index.html
- Estilos fuente: scss/
- Estilos compilados: css/
- JavaScript: js/
- Recursos (imágenes, fuentes): assets/
- Configuración de Prepros: prepros.config
- Reglas de HTMLHint: .hintrc
- Metadata de node: package.json (usa Bootstrap como dependencia)

### **Demo local**
- Abrir index.html directamente en el navegador para ver la landing.
- Recomendado: usar un servidor local (Live Server de VSCode, http-server) para evitar problemas con rutas y obtener recarga en caliente.

#### Instalación y configuración rápida
1.** Clona el repositorio:**
   git clone https://github.com/Aleska19/FlatzeryByAleska.git
   cd FlatzeryByAleska

2. **Instala dependencias (opcional — solo si vas a usar herramientas npm):**
   npm install



### Estructura del repositorio (según lo que existe actualmente)
- .github/ — configuración de GitHub (si aplica)
- .vscode/ — ajustes del editor
- .hintrc — reglas para HTMLHint
- assets/ — imágenes, iconos, fuentes
- css/ — CSS compilado
- scss/ — archivos fuente SCSS
- js/ — scripts front-end
- html/ — páginas adicionales (si las hay)
- index.html — página principal
- package.json, package-lock.json — metadata de npm y dependencias
- prepros.config — configuración de Prepros



### Notas específicas sobre Vercel
- Vercel detecta sitios estáticos automáticamente. Pasos básicos:
  1. Conecta tu repositorio de GitHub a Vercel.
  2. Selecciona la rama a desplegar (por ejemplo, main).
  3. Si necesitas un proceso de build (compilar SCSS), configura el comando de build (ej. npm run build) y la carpeta de salida (por ejemplo, la raíz del proyecto).
  4. Vercel realizará despliegues automáticos en cada push a la rama configurada.

### Contribuir
1. Haz fork del repo.
2. Crea una rama: git checkout -b feature/nombre
3. Haz commits descriptivos.
4. Abre un Pull Request hacia main.



### Contacto
- Autor: Aleska Cegarra — https://github.com/Aleska19