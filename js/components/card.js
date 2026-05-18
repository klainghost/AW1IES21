function crearCard(producto) {
    return `
        <div class="product-card">
            <img src="../../images/${producto.imagen}" alt="${producto.titulo}" class="product-card__image">
            <div class="product-card__body">
                <h3 class="product-card__title">${producto.titulo}</h3>
                <p class="product-card__description">${producto.descripcion}</p>
                <p class="product-card__price">$${producto.precio}</p>
                <div class="cantidad-container">
                    <button class="btn-cantidad" data-accion="menos">-</button>
                    <span class="cantidad-producto">1</span>
                    <button class="btn-cantidad" data-accion="mas">+</button>
                </div>
                <button class="product-card__button">Comprar Ahora</button>
            </div>
        </div>
    `;
}

function activarBotonesCantidad() {
    document.querySelectorAll(".btn-cantidad").forEach((btn) => {
        btn.addEventListener("click", function () {
            const card = this.closest(".product-card");
            const cantidadSpan = card.querySelector(".cantidad-producto");
            let cantidad = parseInt(cantidadSpan.textContent);

            if (this.dataset.accion === "mas") {
                cantidad++;
            } else if (this.dataset.accion === "menos" && cantidad > 1) {
                cantidad--;
            }

            cantidadSpan.textContent = cantidad;
        });
    });
}

function generarCards() {
    const contenedor = document.getElementById("productosContainer");
    if (!contenedor) return;

    const categoria = contenedor.dataset.categoria;

    fetch("../../api/data.json")
        .then((response) => response.json())
        .then((data) => {
            const productos = data.productos.filter((p) => p.categoria === categoria);

            productos.forEach((producto) => {
                contenedor.innerHTML += crearCard(producto);
            });

            activarBotonesCantidad();
        });
}

generarCards();
