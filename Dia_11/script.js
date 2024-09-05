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
function aparecer_user(){
    document.getElementById("title").innerHTML = "Hi, My name is"
    document.getElementById("info").innerHTML = `
    ${datos[0].results[0].login.username}
    `
}
function aparecer_email(){
    document.getElementById("title").innerHTML = "My email address is"
    document.getElementById("info").innerHTML = `
    ${datos[0].results[0].email}
    `
}
function aparecer_calendar(){
    const hoy = new Date(datos[0].results[0].dob.date);
    let mes = Number(hoy.getMonth())+1
    if (mes<10) {
        mes = "0"+String(mes)
    }

    let fecha_organizada = (hoy.getFullYear()+"/"+mes+"/"+hoy.getDate())
    document.getElementById("title").innerHTML = "My birthday is"
    document.getElementById("info").innerHTML = `
    ${fecha_organizada}
    `
}
function aparecer_location(){
    document.getElementById("title").innerHTML = "My address is"
    document.getElementById("info").innerHTML = `
    ${datos[0].results[0].location.street.number} 
    ${datos[0].results[0].location.street.name}
    `
}
function aparecer_phone(){
    document.getElementById("title").innerHTML = "My phone number is"
    document.getElementById("info").innerHTML = `
    ${datos[0].results[0].phone}
    `
}
function aparecer_key(){
    document.getElementById("title").innerHTML = "My password is"
    document.getElementById("info").innerHTML = `
    ${datos[0].results[0].login.password}
    `
}