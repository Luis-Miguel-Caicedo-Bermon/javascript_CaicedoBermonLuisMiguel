
function buscar_id(){
    let id_buscar = document.getElementById("pedir_id").value;
    let url = "https://swapi.py4e.com/api/people/"+id_buscar;
    mostrar(url);
}
function mostrar(url){
    fetch(url)
    .then(res => res.json())
    .then(info =>{
        let homeworld_dato =[];
        fetch(info.homeworld)
        .then(res => res.json())
        .then(homeworld_data =>{
            homeworld_dato.push(homeworld_data)
            console.log(homeworld_data.name);
        })
        console.log(homeworld_dato);
        
        document.getElementById("mostrar").innerHTML = ""
        document.getElementById("mostrar").innerHTML += `
            <tr class="table-dark">
                <th scope="row">name</th>
                <td>${info.name}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">height</th>
                <td>${info.height}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">mass</th>
                <td>${info.mass}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">hair_color</th>
                <td>${info.hair_color}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">skin_color</th>
                <td>${info.skin_color}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">eye_color</th>
                <td>${info.eye_color}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">birth_year</th>
                <td>${info.birth_year}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">gender</th>
                <td>${info.gender}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">homeworld</th>
                <td>
                    <ul class="list-group">
                        <li class="list-group-item">name: </li>
                        <li class="list-group-item">11111</li>
                        <li class="list-group-item">11111</li>
                    </ul>
                </td>
            </tr>
            <tr class="table-dark">
                <th scope="row">films</th>
                <td>${info.gender}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">species</th>
                <td>${info.gender}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">vehicles</th>
                <td>${info.gender}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">starships</th>
                <td>${info.gender}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">created</th>
                <td>${info.created}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">edited</th>
                <td>${info.edited}</td>
            </tr>
            <tr class="table-dark">
                <th scope="row">url</th>
                <td>${info.gender}</td>
            </tr>
        `
    }) 
}