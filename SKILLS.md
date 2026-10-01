# 🛠️ Reglas Técnicas y Ajustes del Proyecto (`SKILLS.md`)

Este archivo contiene los criterios de desarrollo y reglas fijas que se establecieron durante la interacción con la Inteligencia Artificial para garantizar la calidad del proyecto.

---

## 📌 Criterios Obligatorios de Código

1. **HTML Semántico:**
   - Todo el contenido debe estar envuelto en las etiquetas adecuadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Prohibido utilizar `<div>` masivos sin valor semántico.

2. **CSS Limpio y Responsivo:**
   - Se utilizan unidades relativas (`rem`, `%`, `vh`) en lugar de valores fijos en píxeles.
   - Uso obligatorio de CSS Grid para el catálogo/works y Flexbox para headers y footers.
   - Bordes redondeados consistentes (`border-radius: 24px` para imágenes/contenedores y `border-radius: 50px` para botones tipo píldora).

3. **JavaScript No Intrusivo (Separación de Conceptos):**
   - Prohibido usar atributos de eventos en HTML (`onclick`, `onmouseover`).
   - Todo el código interactivo debe ir en `js/funciones.js` vinculado con `<script defer src="js/funciones.js">`.

4. **Tratamiento de Placeholders:**
   - La maqueta utiliza bloques de color gris neutro (`#e0e0e0`) para simular las imágenes antes de cargar las definitivas.