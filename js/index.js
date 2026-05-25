async function iniciarInicio(){

    await cargarDatabase();

    const database =
    JSON.parse(localStorage.getItem("database"));

    const contenedor =
    document.getElementById("cards");

    const recomendados =
    [...database.habitaciones]
    .sort(() => Math.random() - 0.5)
    .slice(0,8);

    renderCards(recomendados);

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

            <a
            href="reservas.html?id=${h.id}"
            class="card-link"
            >

                <div class="card">

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
                    onclick="event.preventDefault(); toggleFavorito(${h.id})"
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

                    </div>

                </div>

            </a>

            `;
        });
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

iniciarInicio();