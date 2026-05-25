function contador(reserva){

    const total =
    database.usuarios.filter(
    u => u.reserva
    ).length;

    const usuario =
    database.usuarios.find(
        u => u.email === email
    );

    const habitacion =
    database.habitaciones.find(
        h => h.nombre === usuario.reserva
    );

    const fecha =
    new Date().toLocaleDateString();

    const Contador = `

        Contador reporte

        Fecha: ${fecha}

        CLIENTE:
        Nombre: ${usuario.nombre}
        Correo: ${usuario.email}

        HABITACIÓN:
        ${habitacion.nombre}

        Ciudad:
        ${habitacion.ciudad}

        Personas:
        ${habitacion.personas}

        TOTAL:
        $${habitacion.precio}

    `;

    alert(contador);

    window.print();
}