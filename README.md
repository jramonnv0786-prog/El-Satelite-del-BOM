# El Satélite del BOM

Práctica de **Desarrollo Web en Entorno Cliente** (DAW · ILERNA) sobre los objetos predefinidos de JavaScript y el **BOM** (Browser Object Model).

Una ventana principal abre una ventana *satélite* centrada en pantalla. Desde ella se detecta el sistema operativo del usuario, se controla el historial de la ventana principal y se programa su autocierre.

## Funcionalidades

- **Hito 0:** análisis teórico de objetos BOM frente a objetos nativos → [`analisis.md`](analisis.md)
- **Hito 1:** apertura de `satelite.html` (400×300 px) centrada con `screen.availWidth` / `screen.availHeight`
- **Hito 2:** detección del sistema operativo con `navigator.userAgent` y redirección de la ventana principal con `location.assign()` / `location.replace()`
- **Hito 3:** autodestrucción de la ventana satélite con `setTimeout()` y `window.close()`

## Estructura

```
├── index.html        Ventana principal
├── satelite.html     Ventana satélite
├── analisis.md       Respuestas teóricas (Hito 0)
├── css/estilos.css   Estilos compartidos
└── js/
    ├── main.js       Lógica de la ventana principal
    └── satelite.js   Lógica de la ventana satélite
```

## Demo en vivo

[https://jramonnv0786-prog.github.io/El-Satelite-del-BOM/](https://jramonnv0786-prog.github.io/El-Satelite-del-BOM/)

> Para comprobar el centrado, abre la demo en el monitor principal.

## Uso en local

Abre `index.html` con un servidor local (por ejemplo, la extensión **Live Server** de VS Code) y pulsa **Lanzar Ventana Satélite**. Si el navegador bloquea la ventana emergente, permite los pop-ups para este sitio.

## Autor

Jose Ramon Neira Vega · 2º DAW · ILERNA
