console.log("Entro al main.js");
const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_animales_zoo";
const tblUsuarios = document.getElementById("tblUsuarios");

function cargarUsuarios(){
    fetch(base_url_api + "/Main/animales",
    {
        method: "GET"
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        tblUsuarios.innerHTML = "";
        for (const usuario of result.data) {
            let tr =  `<tr>
            <td>${usuario.id}<td>
            <td>${usuario.nombre}<td>
            <td>${usuario.cantidad}<td>
            <tr>`;
            tblUsuarios.innerHTML += tr;
        }
    })
}

cargarUsuarios();