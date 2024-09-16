//creación de un elemento personalizado
class crearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent= 'Haz click aquí!';
        this.addEventListener('click',()=>alert('Hiciste click!!!'));
    }
}
customElements.define('mi-boton',crearBoton);

//--------------------------------------------------------
class crearBotonShadow extends HTMLElement{
    constructor(){
        super();
        let mishadow = this.attachShadow({mode:'open'});
        mishadow.innerHTML=`
        <button>Soy un boton Lindo</button>
        `
    }
}
customElements.define('boton-shadow',crearBotonShadow)