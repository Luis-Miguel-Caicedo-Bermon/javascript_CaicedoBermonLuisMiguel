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
});
function mostrar(){
    const pre = document.getElementsByClassName("carta");
    let contador = 0
    for (const i of pre){
        if (i.classList.contains("mostrada")) {
            i.classList=("carta")
        }
        i.addEventListener("click",()=>{
            i.classList.add("mostrada");
            document.querySelector('.mostrada').innerHTML=`
            <img src="${cartas[0]["cards"][contador]["image"]}" alt="">
            `
        })
        contador+=1;
    }
}