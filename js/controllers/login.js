const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailIngresado = document.getElementById("txtemail").value.trim();
    const passwordIngresada = document.getElementById("password").value.trim();

    fetch("../../api/users.json")
        .then((response) => response.json())
        .then((data) => {
            const usuarioEncontrado = data.usuarios.find(
                (usuario) => usuario.email === emailIngresado && usuario.password === passwordIngresada
            );

            if (usuarioEncontrado) {
                sessionStorage.setItem("usuario", usuarioEncontrado.nombre);
                window.location.href = "../../index.html";
            } else {
                document.getElementById("mensajeError").textContent = "Email o contraseña incorrectos.";
            }
        });
});
