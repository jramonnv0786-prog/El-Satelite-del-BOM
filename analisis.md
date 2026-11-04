# Análisis: objetos predefinidos (Hito 0)

## 1. `window` frente a los objetos nativos (`Math`, `JSON`)

- **`window`** es un objeto del **BOM**: lo proporciona el navegador y representa la ventana. Es el objeto global en el navegador, así que solo existe en ese entorno.
- **`Math` y `JSON`** son **objetos nativos de JavaScript**: forman parte del propio lenguaje (estándar ECMAScript) y existen en cualquier entorno donde se ejecute JS, con o sin navegador.

**¿Por qué no hace falta escribir `window.Math`?** Porque en el navegador todo lo que está en el ámbito global, incluidos los objetos nativos, es accesible como propiedad de `window`. Cuando escribimos `Math`, JavaScript lo busca y lo resuelve en el objeto global de forma implícita, por lo que `window.Math` y `Math` son lo mismo.

## 2. Clasificación de instrucciones

| Instrucción | Categoría |
|---|---|
| `window.open()` | BOM |
| `parseFloat()` | Objeto nativo de JS |
| `Math.floor()` | Objeto nativo de JS |
| `navigator.userAgent` | BOM |
