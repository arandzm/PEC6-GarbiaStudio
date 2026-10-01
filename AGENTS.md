# 🤖 Definición de Agentes de IA en el Proyecto

En el desarrollo de la versión asistida por IA de **Garbia Studio** para la PEC 6, se han definido y coordinado tres roles/agentes virtuales para estructurar el trabajo:

---

## 1. Agente Arquitecto UI/UX (`UI-Architect`)
* **Función:** Diseñar la estructura semántica de HTML5 y definir los componentes reutilizables.
* **Aportación:** 
  - Propuso el marcado limpio para las 4-5 páginas navegables.
  - Estableció el uso de bloques en gris (*placeholders*) para permitir la maquetación independiente del contenido final.

## 2. Agente Desarrollador Frontend (`Frontend-Dev`)
* **Función:** Escribir el código CSS3 y los scripts de JavaScript.
* **Aportación:**
  - Creación del sistema de layout con CSS Grid y Flexbox.
  - Implementación de Media Queries para el comportamiento *responsive*.
  - Redacción del código JS no intrusivo en `js/funciones.js` para la navegación activa y el menú móvil.

## 3. Agente Auditor de Calidad y Refactorización (`Code-Auditor`)
* **Función:** Revisar el código generado, detectar fallos de accesibilidad y asegurar el cumplimiento de las rúbricas académaicas.
* **Aportación:**
  - Corrección de selecciones DOM ambiguas en JavaScript.
  - Unificación de variables CSS para el diseño minimalista de Garbia Studio.