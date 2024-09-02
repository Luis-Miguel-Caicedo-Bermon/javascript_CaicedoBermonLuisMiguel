document.getElementById("formu").addEventListener("submit",obtener_id)
document.getElementById("formu").addEventListener("submit",function(e){
    e.preventDefault();
})
function obtener_id(){
    let id_nombre = document.getElementById("id_nombre").value;
    buscar(id_nombre)
}
let id;
function buscar(id_nombre){
    let link = "https://pokeapi.co/api/v2/pokemon/"+id_nombre;
    fetch(link)
    .then(res => res.json())
    .then(info =>{
        document.getElementById("gif").innerHTML = ""
        document.getElementById("gif").innerHTML += `
        <img src="${info.sprites.other.showdown.front_default}">
        <audio src="${info.cries.latest}" autoplay></audio>
        `
        document.getElementById("nombre").innerHTML=""
        document.getElementById("nombre").innerHTML+=`
        ${info.id} - 
        <p id="nom"> ${info.forms[0].name}</p>
        `
        id = info.id
    })
}
function next(){
    let nuevo_id = id+1
    let link = "https://pokeapi.co/api/v2/pokemon/"+nuevo_id;
    fetch(link)
    .then(res => res.json())
    .then(info =>{
        document.getElementById("gif").innerHTML = ""
        document.getElementById("gif").innerHTML += `
        <img src="${info.sprites.other.showdown.front_default}">
        <audio src="${info.cries.latest}" autoplay></audio>
        `
        document.getElementById("nombre").innerHTML=""
        document.getElementById("nombre").innerHTML+=`
        ${info.id} - 
        <p id="nom"> ${info.forms[0].name}</p>
        `
        id = info.id
    })
}
function prev(){
    let nuevo_id = id-1
    let link = "https://pokeapi.co/api/v2/pokemon/"+nuevo_id;
    fetch(link)
    .then(res => res.json())
    .then(info =>{
        document.getElementById("gif").innerHTML = ""
        document.getElementById("gif").innerHTML += `
        <img src="${info.sprites.other.showdown.front_default}">
        <audio src="${info.cries.latest}" autoplay></audio>
        `
        document.getElementById("nombre").innerHTML=""
        document.getElementById("nombre").innerHTML+=`
        ${info.id} - 
        <p id="nom"> ${info.forms[0].name}</p>
        `
        id = info.id
    })
}