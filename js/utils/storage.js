const CARRITO_KEY = "carrito";
const USUARIO_KEY = "usuario";

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem(CARRITO_KEY)) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
}

function contarProductosCarrito() {
    return obtenerCarrito().reduce((total, item) => total + item.cantidad, 0);
}

function obtenerUsuario() {
    return sessionStorage.getItem(USUARIO_KEY);
}

function guardarUsuario(nombre) {
    sessionStorage.setItem(USUARIO_KEY, nombre);
}

function eliminarUsuario() {
    sessionStorage.removeItem(USUARIO_KEY);
}
