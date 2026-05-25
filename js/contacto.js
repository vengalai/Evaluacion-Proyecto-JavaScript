function iniciarContacto(){

    const usuario =
    JSON.parse(localStorage.getItem("usuarioActivo"));

    const navRight =
    document.querySelector(".nav-right");

    if(usuario && navRight){

        navRight.innerHTML = `

            <span class="usuario-nav">
                ${usuario.nombre}
            </span>

            <button onclick="cerrarSesion()">
                Salir
            </button>

        `;
    }

    window.cerrarSesion = function(){

        localStorage.removeItem(
            "usuarioActivo"
        );

        location.reload();
    }
}

iniciarContacto();