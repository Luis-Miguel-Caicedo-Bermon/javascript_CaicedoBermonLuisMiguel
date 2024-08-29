
function buscar_id(){
    let id_buscar = document.getElementById("pedir_id").value;
    let url = "https://superheroapi.com/api.php/85a506a8821efd934ed9094890a724de/"+id_buscar;
    mostrar(url);
}
function mostrar(url){
    fetch(url)
    .then(res => res.json())
    .then(info =>{
        document.getElementById("mostrar").innerHTML += `
        <tbody>
            <tr>
            <th scope="row">${info.response}</th>
            <td>${info.id}</td>
            <td>
                <p>full-name: ${info.biography["full-name"]}</p>
                <p>alter-egos: ${info.biography["alter-egos"]}</p>
                <p>aliases: ${info.biography.aliases}</p>
                <p>place-of-birth: ${info.biography["place-of-birth"]}</p>
                <p>first-appearance: ${info.biography["first-appearance"]}</p>
                <p>publisher: ${info.biography.publisher}</p>
                <p>alignment: ${info.biography.alignment}</p>
            </td>
            <td>
                <p>gender: ${info.appearance.gender}</p>
                <p>race: ${info.appearance.race}</p>
                <p>height: ${info.appearance.height}</p>
                <p>weight: ${info.appearance.weight}</p>
                <p>eye-color: ${info.appearance["eye-color"]}</p>
                <p>hair-color: ${info.appearance["hair-color"]}</p>
            </td>
            <td>
                <p>group-affiliation: ${info.work.occupation}</p>
                <p>relatives: ${info.work.base}</p>
            </td>
            <td>
                <div class="card" style="width: 18rem;">
                <img src="${info.image.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${info.name}</h5>
                    <p class="card-text">${info.connections.relatives}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>intelligence:</strong> ${info.powerstats.intelligence}</li>
                    <li class="list-group-item"><strong>strength:</strong> ${info.powerstats.strength}</li>
                    <li class="list-group-item"><strong>speed:</strong> ${info.powerstats.speed}</li>
                    <li class="list-group-item"><strong>durability:</strong> ${info.powerstats.durability}</li>
                    <li class="list-group-item"><strong>power:</strong> ${info.powerstats.power}</li>
                    <li class="list-group-item"><strong>combat:</strong> ${info.powerstats.combat}</li>
                </ul>
            </td>
            </tr>
        </tbody>
        `
        
    }) 
}