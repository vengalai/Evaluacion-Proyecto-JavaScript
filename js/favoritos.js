function toggleFavorito(id){

    const usuario =
    JSON.parse(localStorage.getItem("usuarioActivo"));

    if(!usuario){

        alert("Debes iniciar sesión");
        return;
    }

    const database =
    JSON.parse(localStorage.getItem("database"));

    const usuarioDB =
    database.usuarios.find(
        u => u.email === usuario.email
    );

    const existe =
    usuarioDB.favoritos.includes(id);

    if(existe){

        usuarioDB.favoritos =
        usuarioDB.favoritos.filter(
            fav => fav !== id
        );

    }else{

        usuarioDB.favoritos.push(id);
    }

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