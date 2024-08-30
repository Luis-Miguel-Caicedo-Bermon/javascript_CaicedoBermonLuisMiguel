
function buscar_id(){
    let id_buscar = document.getElementById("pedir_id").value;
    let url = "https://swapi.py4e.com/api/people/"+id_buscar;
    mostrar(url);
}
function mostrar(url){
    fetch(url)
    .then(res => res.json())
    .then(info =>{

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
                    <ul>
                        <li id="homeworld" class="list-group-item">
                            <table class="table table-sm">
                                <tbody>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </td>
            </tr>
            <tr class="table-dark">
                <th scope="row">films</th>
                <td>
                    <ul>
                        <li id="films" class="list-group-item">
                            <table class="table table-sm">
                                <tbody>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </td>
            </tr>
            <tr class="table-dark">
                <th scope="row">species</th>
                <td>
                    <ul>
                        <li id="species" class="list-group-item">
                            <table class="table table-sm">
                                <tbody>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </td>
            </tr>
            <tr class="table-dark">
                <th scope="row">vehicles</th>
                <td>
                    <ul>
                        <li id="vehicles" class="list-group-item">
                            <table class="table table-sm">
                                <tbody>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </td>
            </tr>
            `
            fetch(info.homeworld)
            .then(res => res.json())
            .then(homeworld =>{
                document.getElementById("homeworld").innerHTML +=`
                <table class="table table-sm">
                    <tbody>
                        <tr class="table-ligh">
                            <th scope="row">name: </th>
                            <td>${homeworld.name}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">rotation_period: </th>
                            <td>${homeworld.rotation_period}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">orbital_period: </th>
                            <td>${homeworld.orbital_period}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">diameter: </th>
                            <td>${homeworld.diameter}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">climate: </th>
                            <td>${homeworld.climate}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">gravity: </th>
                            <td>${homeworld.gravity}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">terrain: </th>
                            <td>${homeworld.terrain}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">surface_water: </th>
                            <td>${homeworld.surface_water}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">population: </th>
                            <td>${homeworld.population}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">residents: </th>
                            <td>${homeworld.residents.map(i=>i).join("<br>")}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">films: </th>
                            <td>${homeworld.films.map(i=>i).join("<br>")}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">created: </th>
                            <td>${homeworld.created}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">edited: </th>
                            <td>${homeworld.edited}</td>
                        </tr>
                        <tr class="table-ligh">
                            <th scope="row">url: </th>
                            <td>${homeworld.url}</td>
                        </tr>
                    </tbody>
                </table>
                `
            })
            for (const i of info.films){
                fetch(i)
                .then(res => res.json())
                .then(films =>{
                    document.getElementById("films").innerHTML +=
                    `
                    <table class="table table-sm">
                        <tbody>
                            <tr class="table-ligh">
                                <th scope="row">title: </th>
                                <td>${films.title}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">episode_id: </th>
                                <td>${films.episode_id}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">opening_crawl: </th>
                                <td>${films.opening_crawl}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">director: </th>
                                <td>${films.director}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">producer: </th>
                                <td>${films.producer}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">release_date: </th>
                                <td>${films.release_date}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">characters: </th>
                                <td>${films.characters.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">planets: </th>
                                <td>${films.planets.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">starships: </th>
                                <td>${films.starships.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">vehicles: </th>
                                <td>${films.vehicles.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">species: </th>
                                <td>${films.species.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">created: </th>
                                <td>${films.created}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">edited: </th>
                                <td>${films.edited}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">url: </th>
                                <td>${films.url}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    `
                })
            }
            for (const i of info.species){
                fetch(i)
                .then(res => res.json())
                .then(species =>{
                    document.getElementById("species").innerHTML +=
                    `
                    <table class="table table-sm">
                        <tbody>
                            <tr class="table-ligh">
                                <th scope="row">name: </th>
                                <td>${species.name}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">classification: </th>
                                <td>${species.classification}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">designation: </th>
                                <td>${species.designation}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">average_height: </th>
                                <td>${species.average_height}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">skin_colors: </th>
                                <td>${species.skin_colors}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">hair_colors: </th>
                                <td>${species.hair_colors}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">eye_colors: </th>
                                <td>${species.eye_colors}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">average_lifespan: </th>
                                <td>${species.average_lifespan}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">homeworld: </th>
                                <td>${species.homeworld}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">language: </th>
                                <td>${species.language}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">people: </th>
                                <td>${species.people.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">films: </th>
                                <td>${species.films.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">created: </th>
                                <td>${species.created}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">edited: </th>
                                <td>${species.edited}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">url: </th>
                                <td>${species.url}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    `
                })
            }
            for (const i of info.vehicles){
                fetch(i)
                .then(res => res.json())
                .then(vehicles =>{
                    document.getElementById("vehicles").innerHTML +=
                    `
                    <table class="table table-sm">
                        <tbody>
                            <tr class="table-ligh">
                                <th scope="row">name: </th>
                                <td>${vehicles.name}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">model: </th>
                                <td>${vehicles.model}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">manufacturer: </th>
                                <td>${vehicles.manufacturer}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">cost_in_credits: </th>
                                <td>${vehicles.cost_in_credits}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">length: </th>
                                <td>${vehicles.length}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">max_atmosphering_speed: </th>
                                <td>${vehicles.max_atmosphering_speed}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">crew: </th>
                                <td>${vehicles.crew}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">passengers: </th>
                                <td>${vehicles.passengers}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">cargo_capacity: </th>
                                <td>${vehicles.cargo_capacity}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">consumables: </th>
                                <td>${vehicles.consumables}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">vehicle_class: </th>
                                <td>${vehicles.vehicle_class}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">pilots: </th>
                                <td>${vehicles.pilots.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">films: </th>
                                <td>${vehicles.films.map(i=>i).join("<br>")}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">created: </th>
                                <td>${vehicles.created}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">edited: </th>
                                <td>${vehicles.edited}</td>
                            </tr>
                            <tr class="table-ligh">
                                <th scope="row">url: </th>
                                <td>${vehicles.url}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    `
                })
            }
    }) 
}