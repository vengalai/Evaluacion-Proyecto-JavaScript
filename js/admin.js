const usuario =
JSON.parse(
    localStorage.getItem("usuarioActivo")
);

if(
    !usuario ||
    usuario.email !== "admin@gmail.com"
){

    window.location.href =
    "login.html";
}

const database =
JSON.parse(
    localStorage.getItem("database")
);

const habitacionesContainer =
document.getElementById(
    "habitacionesAdmin"
);

const reservasContainer =
document.getElementById(
    "reservasAdmin"
);

renderHabitaciones();

renderReservas();

function renderHabitaciones(){

    habitacionesContainer.innerHTML = "";

    database.habitaciones.forEach(h => {

        habitacionesContainer.innerHTML += `

        <div class="admin-card">

            <div class="admin-images">

                ${h.imagenes.map(img => `

                    <img
                    src="${img}"
                    class="admin-img"
                    >

                `).join("")}

            </div>

            <h3>${h.nombre}</h3>

            <p>
                📍 ${h.ciudad}
            </p>

            <p>
                💲 ${h.precio}
            </p>

            <p>
                👥 ${h.personas} personas
            </p>

            <p>
                🛏️ ${h.camas} camas
            </p>

            <p>
                ${h.servicios.join(" • ")}
            </p>

            <button
            class="reservar"
            onclick="editarHabitacion(${h.id})"
            >

                Editar

            </button>

        </div>

        `;
    });
}

function editarHabitacion(id){

    const habitacion =
    database.habitaciones.find(
        h => h.id === id
    );

    const precio =
    prompt(
        "Nuevo precio:",
        habitacion.precio
    );

    const camas =
    prompt(
        "Cantidad camas:",
        habitacion.camas
    );

    const personas =
    prompt(
        "Cantidad personas:",
        habitacion.personas
    );

    const servicios =
    prompt(
        "Servicios separados por coma:",
        habitacion.servicios.join(", ")
    );

    if(
        precio &&
        camas &&
        personas &&
        servicios
    ){

        habitacion.precio =
        Number(precio);

        habitacion.camas =
        Number(camas);

        habitacion.personas =
        Number(personas);

        habitacion.servicios =
        servicios
        .split(",")
        .map(s => s.trim());

        guardarDatabase();

        renderHabitaciones();

        alert(
            "Habitación actualizada"
        );
    }
}

function renderReservas(){

    reservasContainer.innerHTML = "";

    const usuariosReserva =
    database.usuarios.filter(
        u => u.reserva
    );

    if(
        usuariosReserva.length === 0
    ){

        reservasContainer.innerHTML = `

        <p class="no-reservas">

            No hay reservas actualmente

        </p>

        `;

        return;
    }

    usuariosReserva.forEach(u => {

        reservasContainer.innerHTML += `

        <div class="admin-card">

            <h3>
                ${u.nombre}
            </h3>

            <p>
                ${u.email}
            </p>

            <p>
                Reserva:
                ${u.reserva}
            </p>

            <button
            class="cancelar"
            onclick="cancelarReserva('${u.email}')"
            >

                Cancelar Reserva

            </button>

        </div>

        `;
    });
}

function cancelarReserva(email){

    const usuarioReserva =
    database.usuarios.find(
        u => u.email === email
    );

    if(!usuarioReserva) return;

    const habitacion =
    database.habitaciones.find(
        h =>
        h.nombre ===
        usuarioReserva.reserva
    );

    if(habitacion){

        habitacion.reservada =
        false;
    }

    usuarioReserva.reserva =
    null;

    guardarDatabase();

    renderReservas();

    alert(
        "Reserva cancelada"
    );
}

function guardarDatabase(){

    localStorage.setItem(

        "database",

        JSON.stringify(database)
    );
}