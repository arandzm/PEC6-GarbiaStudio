# 📅 Plan de Trabajo e Historial del Proyecto (PEC 6)

Este documento registra las fases de planificación, desarrollo e integración de Inteligencia Artificial para el rediseño web del estudio creativo **Garbia Studio**.

---

## 🚀 Fases del Proyecto

### Fase 1: Análisis y Definición de Prompts Base
- **Objetivo:** Definir la estructura semántica de HTML5 y las necesidades visuales a partir de los prototipos de la PEC 3.
- **Acciones:**
  - Redacción del Prompt Maestro para generar la maqueta global.
  - Definición de componentes reutilizables (Header y Footer).

### Fase 2: Maquetación y Maqueta Estructural
- **Objetivo:** Generar el layout base con contenedores grises (*placeholders*) para imágenes.
- **Acciones:**
  - Maquetación de la portada `index.html` (Grid de 3 columnas para proyectos).
  - Creación de páginas secundarias: `studio.html`, `contact.html` y páginas de detalle de proyecto (`san-francisco-de-sales.html`).
  - Creación del archivo centralizado `css/estilo.css` con variables y estilos base.

### Fase 3: Responsive Design y Estilos
- **Objetivo:** Garantizar la perfecta adaptación visual a pantallas móviles y tabletas.
- **Acciones:**
  - Ajuste de Media Queries para pasar de 3 columnas a 1 columna en móvil.
  - Corrección de bordes redondeados (`border-radius: 24px`) y espaciados (*paddings*).

### Fase 4: Interactividad con JavaScript
- **Objetivo:** Incluir interacciones DOM no intrusivas.
- **Acciones:**
  - Implementación de menú hamburguesa móvil en `js/funciones.js`.
  - Resaltado de pestaña activa en la navegación según la página visitada.

### Fase 5: Revisión, Refactorización y Documentación
- **Objetivo:** Auditar el código generado por IA y redactar la documentación oficial de entrega.
- **Acciones:**
  - Corrección manual de inconsistencias de CSS.
  - Creación de los archivos de arquitectura (`AGENTS.md`, `SKILLS.md`, `PLAN.md` y `README.md`).