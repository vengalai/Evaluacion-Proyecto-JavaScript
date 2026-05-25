async function iniciarReservas(){

    await cargarDatabase();

    const database =
    JSON.parse(localStorage.getItem("database"));

    const contenedor =
    document.getElementById("cards");

    const buscador =
    document.getElementById("buscador");

    renderCards(database.habitaciones);

    setTimeout(() => {

        const params =
        new URLSearchParams(window.location.search);

        const habitacionId =
        params.get("id");

        if(habitacionId){

            const card =
            document.getElementById(
                `habitacion-${habitacionId}`
            );

            if(card){

                card.scrollIntoView({

                    behavior: "smooth",
                    block: "center"

                });

                card.style.border =
                "3px solid #ff385c";

                card.style.boxShadow =
                "0 0 20px rgba(255,56,92,0.5)";
            }
        }

    }, 300);

    buscador.addEventListener("input", () => {

        const valor =
        buscador.value.toLowerCase();

        const filtrados =
        database.habitaciones.filter(h =>

            h.nombre.toLowerCase().includes(valor)
            ||

            h.ciudad.toLowerCase().includes(valor)

        );

        renderCards(filtrados);

    });

    function renderCards(lista){

        const usuario =
        JSON.parse(
            localStorage.getItem("usuarioActivo")
        );

        contenedor.innerHTML = "";

        lista.forEach(h => {

            const favorito =
            usuario?.favoritos?.includes(h.id);

            const imagenes =
            h.imagenes || [];

            contenedor.innerHTML += `

            <div
            class="card"
            id="habitacion-${h.id}"
            >

                <div class="carousel">

                    ${imagenes.map(img => `

                        <img
                        src="${img}"
                        class="carousel-img"
                        onerror="this.src='assets/img/banner.jpg'"
                        >

                    `).join("")}

                </div>

                <div
                class="favorite"
                onclick="toggleFavorito(${h.id})"
                >

                    <i
                    class="
                    fa-solid fa-heart
                    ${favorito ? 'active' : ''}
                    "
                    ></i>

                </div>

                <div class="card-content">

                    <h3>${h.nombre}</h3>

                    <p>📍 ${h.ciudad}</p>

                    <p>
                        👥 ${h.personas} personas
                    </p>

                    <p>
                        🛏️ ${h.camas} camas
                    </p>

                    <p>
                        📅 ${h.fechas}
                    </p>

                    <p>
                        ${h.servicios.join(" • ")}
                    </p>

                    <p class="price">
                        $${h.precio}
                    </p>

                    <p>
                        ${
                            h.reservada
                            ? "Reservada"
                            : "Disponible"
                        }
                    </p>

                    ${
                        !h.reservada
                        ? `
                        <button
                        class="reservar"
                        onclick="reservar(${h.id})"
                        >
                            Reservar
                        </button>
                        `
                        : ""
                    }

                    ${
                        usuario?.reserva === h.nombre
                        ? `
                        <button
                        class="cancelar"
                        onclick="cancelarReserva(${h.id})"
                        >
                            Cancelar Reserva
                        </button>
                        `
                        : ""
                    }

                </div>

            </div>

            `;
        });
    }

    window.reservar = function(id){

        const usuario =
        JSON.parse(
            localStorage.getItem("usuarioActivo")
        );

        if(!usuario){

            alert("Debes iniciar sesión");
            return;
        }

        const usuarioDB =
        database.usuarios.find(
            u => u.email === usuario.email
        );

        if(usuarioDB.reserva){

            alert(
                "Solo puedes tener una reserva"
            );

            return;
        }

        const habitacion =
        database.habitaciones.find(
            h => h.id === id
        );

        if(habitacion.reservada){

            alert("Habitación reservada");
            return;
        }

        habitacion.reservada = true;

        usuarioDB.reserva =
        habitacion.nombre;

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );

        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioDB)
        );

        location.reload();
    }

    window.cancelarReserva = function(id){

        const usuario =
        JSON.parse(
            localStorage.getItem("usuarioActivo")
        );

        const usuarioDB =
        database.usuarios.find(
            u => u.email === usuario.email
        );

        const habitacion =
        database.habitaciones.find(
            h => h.id === id
        );

        habitacion.reservada = false;

        usuarioDB.reserva = null;

        localStorage.setItem(
            "database",
            JSON.stringify(database)
        );

        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioDB)
        );

        location.reload();
    }

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

    else if(navRight){

        navRight.innerHTML = `

            <a href="login.html">
                Login
            </a>

            <a href="register.html">
                Registro
            </a>

        `;
    }

    window.cerrarSesion = function(){

        localStorage.removeItem(
            "usuarioActivo"
        );

        location.reload();
    }
}

iniciarReservas();