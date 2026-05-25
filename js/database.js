async function cargarDatabase(){

    const databaseGuardada =
    JSON.parse(
        localStorage.getItem("database")
    );

    /* =========================
    SI YA EXISTE DATABASE
    NO LA SOBREESCRIBA
    ========================= */

    if(databaseGuardada){

        return;
    }

    /* =========================
    CARGAR JSON
    ========================= */

    const habitacionesResponse =
    await fetch(
        "./assets/data/habitaciones.json"
    );

    const usuariosResponse =
    await fetch(
        "./assets/data/usuarios.json"
    );

    const habitaciones =
    await habitacionesResponse.json();

    const usuarios =
    await usuariosResponse.json();

    /* =========================
    CREAR DATABASE
    ========================= */

    const database = {

        usuarios,
        habitaciones
    };

    localStorage.setItem(

        "database",

        JSON.stringify(database)
    );
}

cargarDatabase();