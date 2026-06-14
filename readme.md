# LA RANITA 3D - Ecommerce de Juegos de ROL
# Desarrollado por: Cristian Gabriel Moya - IES21 - Analista de Sistema
# 23/4/26 - recuperatorio TP1


Plataforma web de comercio electrónico dedicada a la venta de juegos de rol, merchandising relacionado y novedades del sector. 

Este proyecto constituye la primera etapa del desarrollo de una aplicación ecommerce completa, enfocándose en la estructura base y navegación de la plataforma. Incluye:

- Página de inicio (Home) con navbar de navegación
- Tres categorías de productos: Juegos de ROL, Merchandising, Novedades
- Sistema de autenticación con formularios de Login y Registro
- Página de acceso centralizada para gestión de sesiones
- Estructura modular y escalable para futuras mejoras



# Última actualización: TP3 - Mayo 2026

Plataforma web de comercio electrónico dedicada a la venta de productos de impresión 3D: juegos de rol, merchandising personalizado y novedades del sector.

---

## Tecnologías utilizadas

- **HTML5** — estructura semántica de las páginas
- **CSS3** — estilos con variables personalizadas, Flexbox, Grid y diseño responsivo
- **JavaScript (ES6+)** — lógica del cliente, componentes dinámicos, manejo del DOM
- **sessionStorage** — gestión de sesión del usuario en el navegador
- **Fetch API** — consumo de datos desde archivos JSON locales

---

## Estructura de archivos y carpetas

```
AW1IES21/
│
├── index.html                  ← Página principal (home)
├── readme.md
├── .gitignore
│
├── api/
│   ├── data.json               ← Productos de la tienda
│   └── users.json              ← Usuarios habilitados para el login
│
├── css/
│   ├── styles.css              ← Importador principal (@import)
│   ├── _colors.css             ← Variables de color, fuentes, espaciado y reset
│   ├── _layout.css             ← Navbar, main, grid, cards, formularios, footer
│   ├── _btn.css                ← Todos los estilos de botones y controles de cantidad
│   └── _text.css               ← Tipografía, textos, animaciones y utilidades
│
├── images/                     ← Imágenes y logos del sitio, organizadas en banner/ y productos/<categoria>/
│
├── js/
│   ├── components/
│   │   ├── navbar.js           ← Componente: genera el navbar dinámicamente
│   │   ├── footer.js           ← Componente: genera el footer dinámicamente
│   │   └── card.js             ← Componente: genera cards de productos desde el JSON
│   ├── controllers/
│   │   ├── login.js            ← Controlador: valida login contra users.json
│   │   ├── logout.js           ← Controlador: cierra sesión y redirige al login
│   │   └── carrito.js          ← Controlador: muestra y gestiona el carrito de compras
│   ├── data/
│   │   └── navLinks.js         ← Array de objetos con los links del navbar
│   └── utils/
│       └── storage.js          ← Funciones para manejar el carrito (localStorage) y el usuario (sessionStorage)
│
└── pages/
    ├── auth/
    │   ├── login.html          ← Formulario de inicio de sesión
    │   ├── login-registro.html ← Página de acceso (elegir login o registro -                                               ya no  es necesaria)
    │   └── registro.html       ← Formulario de registro de usuario 
    ├── carrito/
    │   └── carrito.html        ← Carrito de compras
    └── categorias/
        ├── miniaturas.html     ← Categoría: Miniaturas
        ├── dados.html          ← Categoría: Dados
        ├── escenografia.html   ← Categoría: Escenografía
        └── miscelaneas.html    ← Categoría: Misceláneas
```

---

## Cambios sustanciales respecto al TP1

### Arquitectura y estructura
- Se reorganizó la carpeta `pages/` en subcarpetas: `auth/` para las páginas de autenticación y `categorias/` para las páginas de productos.
- Se adoptó un patrón similar a MVC separando datos (`api/`), componentes (`js/components/`) y controladores (`js/controllers/`).

### CSS modular
- El archivo `styles.css` (originalmente un solo archivo de ~950 líneas) fue dividido en 4 archivos parciales con prefijo `_`, importados desde `styles.css` con `@import`.

### Componentes JavaScript
- **Navbar dinámico**: el navbar de las páginas de categorías se genera con JS a partir de un array de objetos (`navLinks.js`). Agregar una nueva página al menú solo requiere modificar ese array.
- **Footer dinámico**: el footer de las páginas de categorías se genera desde un único componente JS reutilizable.
- **Cards dinámicas**: las tarjetas de productos se generan desde `data.json` filtrando por categoría, eliminando el HTML hardcodeado de cada página.

### Sistema de autenticación
- El login ahora valida email y contraseña contra `users.json` usando `fetch`.
- Se implementó `sessionStorage` para mantener la sesión del usuario activa mientras la pestaña esté abierta.
- El logout elimina la sesión de `sessionStorage` antes de redirigir.

### Cards de productos
- Se agregaron controles de cantidad (`+` / `-`) a cada card de producto.
- Los datos de productos (título, descripción, precio, imagen, categoría) están centralizados en `api/data.json`.

---

# Actualización 14/06/26

- Se agregan 30 productos nuevos al catálogo.
- Se hace un rebranding de la página, enfocándose principalmente en rol.
- Se reestructura el Home con un banner y cambia la fuente de los títulos.
- Se cambian las categorías: ahora son Miniaturas, Dados, Escenografía y Misceláneas. Novedades y Merchandising pasan a formar parte de Misceláneas.
- Se reorganizan las imágenes en subcarpetas dentro de `images/` (banner/ y productos/<categoria>/).
- Se crea `js/utils/storage.js` para centralizar el manejo del carrito y del usuario logueado.
