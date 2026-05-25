/* =========================
REGISTER
========================= */

const registerForm =
document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", e => {

        e.preventDefault();

        const database =
        JSON.parse(
            localStorage.getItem("database")
        );

        const nombre =
        document.getElementById("nombre")
        .value
        .trim();

        const identificacion =
        document.getElementById("identificacion")
        .value
        .trim();

        const nacionalidad =
        document.getElementById("nacionalidad")
        .value
        .trim();

        const telefono =
        document.getElementById("telefono")
        .value
        .trim();

        const email =
        document.getElementById("email")
        .value
        .trim();

        const password =
        document.getElementById("password")
        .value
        .trim();

        /* =========================
        VALIDACIONES
        ========================= */

        if(telefono.length < 10){

            alert(
                "El teléfono debe tener mínimo 10 caracteres"
            );

            return;
        }

        if(identificacion.length < 10){

            alert(
                "La identificación debe tener mínimo 10 caracteres"
            );

            return;
        }

        if(password.length < 3){

            alert(
                "La contraseña debe tener mínimo 3 caracteres"
            );

            return;
        }

        /* =========================
        VALIDAR EMAIL
        ========================= */

        const existeEmail =
        database.usuarios.find(
            u =>
            u.email.toLowerCase()
            ===
            email.toLowerCase()
        );

        if(existeEmail){

            alert(
                "Ese correo ya está registrado"
            );

            return;
        }

        /* =========================
        VALIDAR NOMBRE
        ========================= */

        const existeNombre =
        database.usuarios.find(
            u =>
            u.nombre.toLowerCase()
            ===
            nombre.toLowerCase()
        );

        if(existeNombre){

            alert(
                "Ese nombre ya existe"
            );

            return;
        }

        /* =========================
        VALIDAR PASSWORD
        ========================= */

        const existePassword =
        database.usuarios.find(
            u =>
            u.password === password
        );

        if(existePassword){

            alert(
                "Esa contraseña ya está en uso"
            );

            return;
        }

        /* =========================
        NUEVO USUARIO
        ========================= */

        const nuevoUsuario = {

            nombre,
            identificacion,
            nacionalidad,
            telefono,
            email,
            password,

            reserva: null,

            favoritos: []
        };

        database.usuarios.push(
            nuevoUsuario
        );

        localStorage.setItem(

            "database",

            JSON.stringify(database)
        );

        alert(
            "Registro exitoso"
        );

        window.location.href =
        "login.html";

    });

}

/* =========================
LOGIN
========================= */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", e => {

        e.preventDefault();

        const database =
        JSON.parse(
            localStorage.getItem("database")
        );

        /* =========================
        VALIDAR DATABASE
        ========================= */

        if(
            !database ||
            !database.usuarios
        ){

            alert(
                "No hay usuarios registrados"
            );

            return;
        }

        const email =
        document.getElementById("email")
        .value
        .trim();

        const password =
        document.getElementById("password")
        .value
        .trim();

        const usuario =
        database.usuarios.find(

            u =>

            u.email.trim().toLowerCase()
            ===
            email.toLowerCase()

            &&

            u.password.trim()
            ===
            password

        );

        if(!usuario){

            alert(
                "Correo o contraseña incorrectos"
            );

            return;
        }

        localStorage.setItem(

            "usuarioActivo",

            JSON.stringify(usuario)
        );

        /* =========================
        ADMIN
        ========================= */

        if(
            usuario.email ===
            "admin@gmail.com"
        ){

            window.location.href =
            "admin.html";

            return;
        }

        alert(
            "Bienvenido"
        );

        window.location.href =
        "index.html";

    });

}