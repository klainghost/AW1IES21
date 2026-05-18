function generarNavbar() {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    let links = '<ul class="nav-links">';
    navLinks.forEach((link) => {
        links += `<li><a href="${link.url}">${link.titulo}</a></li>`;
    });
    links += '</ul>';

    nav.innerHTML = `
        <div class="logo">
            <img src="../../images/logo.png" alt="Logo La Ranita 3D" width="100" height="100">
            <h2>LA RANITA 3D</h2>
        </div>
        ${links}
        <button class="logout-btn" onclick="logout()">CERRAR SESIÓN</button>
    `;
}

generarNavbar();
