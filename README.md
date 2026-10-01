# Garbia Studio — Proyecto Web Asistido por IA (PEC 6)

Segunda versión completa del sitio web para el estudio creativo **Garbia Studio**, desarrollada mediante Inteligencia Artificial y comparada con el proyecto manual desarrollado en las PEC 4 y PEC 5.

**Enlace al Figma (PEC 3):** [Ver diseño en Figma](https://www.figma.com/design/JOlPAE8DV9Dc80r3zVf2Hh/Wireframe-tienda?node-id=30-819&t=rp8PxmDbJ2JkoAIf-1)

---

## 🛠️ Herramientas de IA Utilizadas
- **Modelos de Lenguaje (LLMs):** ChatGPT / Claude (para la generación de HTML5 semántico, CSS3 modular y scripts de JS).
- **Asistentes de Código:** Asistencia directa en la refactorización y resolución de errores de layout.

---

## 🎯 Prompts Principales Empleados

1. **Prompt de Estructuración Global:**
   > *"Actúa como un Desarrollador Web Senior y diseña la estructura HTML5 y CSS3 para Garbia Studio con 4 páginas navegables (Works, Studio, Contact, Detail). Usa bloques grises como placeholders para las imágenes y un layout minimalista."*

2. **Prompt de Responsive Design:**
   > *"Añade media queries en CSS para que el grid de 3 columnas de la sección Works pase a 1 columna en pantallas de menos de 768px, asegurando que los bordes redondeados se mantengan."*

---

## 🔍 Partes Generadas vs. Cambios Manuales

| Elemento | Generado por IA | Modificado / Corregido Manualmente |
| :--- | :--- | :--- |
| **HTML** | Estructura base de las 4 páginas | Ajuste de rutas relativas y textos definitivos |
| **CSS** | Grid inicial y colores base | Corrección de márgenes en el footer y ajuste del `border-radius` |
| **JavaScript** | Lógica del menú hamburguesa | Optimización del selector de pestañas activas |

---

## 📊 Comparativa: Proyecto Manual vs. Proyecto con IA

### 1. ¿Qué ha sido más rápido con IA?
La creación del código HTML inicial y la estructura base CSS. La IA ahorra tiempo en la redacción de código repetitivo y en la creación de componentes estandarizados.

### 2. ¿Qué ha sido más difícil de controlar?
El ajuste fino del diseño responsive y las proporciones exactas. La IA tiende a incluir estilos redundantes o márgenes por defecto que no se ajustaban exactamente al prototipo visual de la PEC 3.

### 3. ¿Qué partes del código se han tenido que corregir?
Se corrigieron manualmente selectores de CSS redundantes, se ajustaron las rutas relativas de los scripts y se simplificó la lógica del menú navegable en JavaScript.

### 4. ¿Qué resultado visual es más fiel al diseño de la PEC 3?
El proyecto manual ofrece un control pixel-perfect ligeramente mayor, pero la versión asistida por IA logró un resultado visualmente equivalente en una fracción del tiempo.

### 5. Aprendizajes clave
La IA es una herramienta excelente para acelerar la maquetación inicial y generar maquetas funcionales rápidas, pero la supervisión y criterio técnico del desarrollador sigue siendo imprescindible para pulir el detalle, la accesibilidad y el código final.

---

## 🗺️ Diagrama del Flujo de Navegación

```mermaid
graph TD
    A[index.html - Works] -->|Clic en tarjeta| B[san-francisco-de-sales.html - Detalle]
    A -->|Navegación Header| C[studio.html - About]
    A -->|Navegación Header| D[contact.html - Contacto]
    B -->|Volver a Works| A
    C -->|Navegación Header| A
    D -->|Navegación Header| A