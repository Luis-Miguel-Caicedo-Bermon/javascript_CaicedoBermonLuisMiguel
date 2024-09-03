document.getElementById("formu").addEventListener("submit",obtener_id)
document.getElementById("formu").addEventListener("submit",function(e){
    e.preventDefault();
})
function obtener_id(){
    let id = document.getElementById("id").value;
    buscar(id)
}
function buscar(id){
    let link = "https://rickandmortyapi.com/api/character/"+id;
    fetch(link)
    .then(res => res.json())
    .then(info =>{
        document.getElementById("personaje").innerHTML = ""
        document.getElementById("personaje").innerHTML += `
        <table class="table">
            <tbody>
                <tr>
                <td>
                <div class="card" style="width: 18rem;">
                    <img src="${info.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${id} - ${info.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>status</strong> ${info.status}</li>
                        <li class="list-group-item"><strong>species</strong> ${info.species}</li>
                        <li class="list-group-item"><strong>type</strong> ${info.type}</li>
                        <li class="list-group-item"><strong>gender</strong> ${info.gender}</li>
                        <li class="list-group-item"><strong>origin:</strong><br><strong>------ Name</strong> ${info.origin.name}<br><strong>------ url</strong> ${info.origin.url}</li>
                        <li class="list-group-item"><strong>location:</strong><br><strong>------ Name</strong> ${info.location.name}<br><strong>------ url</strong> ${info.location.url}</li>
                        <li class="list-group-item"><strong>url</strong> ${info.url}</li>
                        <li class="list-group-item"><strong>created</strong> ${info.created}</li>
                    </ul>
                </div>
                </td>
                <td id="caps"></td>
                </tr>
            </tbody>
        </table>
        
        `
        let clase = 0;
        for (const i of info.episode){
            fetch(i)
            .then(res => res.json())
            .then(caps =>{
                clase+=1;
                let idd = "personaje"+clase;
                document.getElementById("caps").innerHTML += `
                <table class="table">
                    <tbody>
                        <tr class="table-dark">
                            <th scope="row">espisodio:</th>
                            <td> ${caps.id}</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">Name:</th>
                            <td> ${caps.name}</td>
                        </tr>
                        <tr class="table-dark"">
                            <th scope="row">air_date:</th>
                            <td> ${caps.air_date}</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">personajes:</th>
                            <td>
                                <ul id=${idd} class="list-group">
                                    
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                `
                for (const z of caps.characters){
                    fetch(z)
                    .then(res => res.json())
                    .then(pjs =>{
                        document.getElementById(idd).innerHTML+=`
                        <li class="list-group-item">Name: ${pjs.name}</li>
                        `
                    })
                }
            })
        }
    })
}