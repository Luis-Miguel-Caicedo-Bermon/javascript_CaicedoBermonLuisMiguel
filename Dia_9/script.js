document.getElementById("formu").addEventListener("submit",obtener_id)
document.getElementById("formu").addEventListener("submit",function(e){
    e.preventDefault();
})
function obtener_id(){
    let id_nombre = document.getElementById("id_nombre").value;
    buscar(id_nombre)
}
function buscar(id_nombre){
    let link = "https://pokeapi.co/api/v2/pokemon/"+id_nombre;
    fetch(link)
    .then(res => res.json())
    .then(info =>{
        document.getElementById("gif").innerHTML = ""
        document.getElementById("gif").innerHTML += `
        <img src="${info.sprites.other.showdown.front_default}">
        `
    })
}