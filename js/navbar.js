const navRight =
document.getElementById("nav-right");

function renderNavbar(){

    if(!navRight) return;

    const usuario =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

    if(usuario){

        navRight.innerHTML = `

            <span class="user-name">

                ${usuario.nombre}

            </span>

            <button
            class="logout-btn"
            onclick="cerrarSesion()"
            >

                Salir

            </button>

        `;

    }else{

        navRight.innerHTML = `

            <a href="login.html">
                Login
            </a>

            <a href="register.html">
                Registro
            </a>

        `;
    }
}

function cerrarSesion(){

    localStorage.removeItem(
        "usuarioActivo"
    );

    window.location.href =
    "index.html";
}

renderNavbar();