class principal extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="contenedor">
            <div class="azul">
                <div class="live">Live User Filter</div>
                <div class="search">Search by name and/or location</div>
                <input type="text" id="buscar" onkeyup="mostrar()" placeholder="Search">
            </div>
            <contenido-personas></contenido-personas>
        </div>
            `;
    }
}
customElements.define('cont-prin',principal)
class contenido extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
            <div class="agregar">
            </div>
        `
        mostrar()
    }
}
customElements.define('contenido-personas',contenido)
function mostrar() {
    var x = document.getElementById("buscar").value;
    fetch('https://66df33eede4426916ee3e230.mockapi.io/user')
    .then(res=>res.json())
    .then(data=>{
        document.querySelector('.agregar').innerHTML=''
        data.forEach(element => {
            if (element.name_full.includes(x)) {
                document.querySelector('.agregar').innerHTML+=`
                <div class="persona">
                    <img src="${element.avatar}" alt="">
                    <div class="info">
                        <div class="nombre">${element.name_full}</div>
                        <div class="descripcion">${element.description}</div>
                    </div>
                </div>
                `
            }
            
        });
    })
}