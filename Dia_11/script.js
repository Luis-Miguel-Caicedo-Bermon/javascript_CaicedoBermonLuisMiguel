let datos=[];
fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(info => {
    datos.push(info);
    document.getElementById("div_image").innerHTML = ""
    document.getElementById("div_image").innerHTML += `
    <img id="image" src="${info.results[0].picture.medium}" alt="">
    `
})
function aparecer_info(){
    document.getElementById("info").innerHTML = `
    ${datos[0].results[0].login.username}
    `
}
function reset(){
    document.getElementById("info").innerHTML = "";
}