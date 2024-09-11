let cartas=[];
fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=9")
.then(res => res.json())
.then(info=>{
    cartas.push(info)
    can = info["cards"].length
    let aleatorio=Math.floor(Math.random() * can)
    console.log(aleatorio);
    document.getElementById('carta_random').innerHTML=`
    <img src="${info.cards[aleatorio].image}" alt="">
    `
    mostrar(info,aleatorio)
});
let contador = 0;
let ganado ="";
function mostrar(cartas,aleatorio){
    if (contador<2) {
        const pre = document.getElementsByClassName("carta");
        for (let i=0;i<pre.length;i++){
            if (pre[i].classList.contains("mostrada")) {
                pre[i].classList=("carta")
            }
            pre[i].addEventListener('click',()=>{
                if (contador<2) {
                    pre[i].classList.add("mostrada");
                    document.querySelector('.mostrada').innerHTML=`
                    <img src="${cartas["cards"][i]["image"]}" alt="">
                    `
                    contador+=1;
                    if (cartas["cards"][i]["image"]==cartas["cards"][aleatorio]["image"]) {
                        document.querySelector('.contenedor').innerHTML+=`
                        <div id="ganaste">
                            <div>
                                <img src="./images/ganar.png" alt="">
                            </div>
                            <form action="">
                                <button>jugar de nuevo</button>
                            </form>
                        </div>
                        `
                        ganado='ganado'
                    }
                }
                else if(contador>=2 && ganado!='ganado'){
                    document.querySelector('.contenedor').innerHTML+=`
                    <div id="ganaste">
                        <div>
                            <img src="./images/perder.png" alt="">
                        </div>
                        <form action="">
                            <button>jugar de nuevo</button>
                        </form>
                    </div>
                    `
                }
            })
        }
    }
}