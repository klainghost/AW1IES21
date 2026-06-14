function generarNavbar() {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    const base = typeof navBasePath !== "undefined" ? navBasePath : "";

    let links = '<ul class="nav-links">';
    navLinks.forEach((link) => {
        const id = link.titulo === "Carrito" ? ' id="navCarrito"' : "";
        links += `<li><a href="${base}${link.url}"${id}>${link.titulo}</a></li>`;
    });
    links += "</ul>";

    nav.innerHTML = `
        <div class="logo">
            <img src="${base}images/logo.png" alt="Logo La Ranita 3D" width="100" height="100">
            <h2>LA RANITA 3D</h2>
        </div>
        ${links}
        <button class="logout-btn" onclick="logout()">CERRAR SESIÓN</button>
    `;

    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const navCarrito = document.getElementById("navCarrito");
    if (!navCarrito) return;

    const cantidad = contarProductosCarrito();
    navCarrito.textContent = cantidad > 0 ? `Carrito (${cantidad} productos)` : "Carrito";
}

generarNavbar();
