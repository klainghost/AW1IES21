function logout() {
    sessionStorage.removeItem("usuario");
    window.location.href = "../auth/login.html";
}
