
fetch('https://www.datos.gov.co/resource/tceq-3ger.json')
.then(res => res.json())
.then(info=>{
    document.getElementById('informacion').innerHTML=''
    info.forEach(element => {
        document.getElementById('informacion').innerHTML+=`
        <tr>
            <td>${element.sitio}</td>
            <td>${element.zona}</td>
            <td>${element.municipio}</td>
            <td>${element.coordenada_norte}</td>
            <td>${element.coordenada_oeste}</td>
        </tr>
        `
    });
});