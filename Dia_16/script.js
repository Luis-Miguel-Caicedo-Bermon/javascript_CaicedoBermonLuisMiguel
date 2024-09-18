function filtro(){
    let lugar = document.getElementById('filtro').value.toLowerCase();
    let filtrar = document.getElementById('seleccion').value;
    console.log(filtrar);
    fetch('https://www.datos.gov.co/resource/tceq-3ger.json')
    .then(res => res.json())
    .then(info=>{
        document.getElementById('informacion').innerHTML=''
        info.forEach(element => {
            if (filtrar=='sitio') {
                if (element.sitio.toLowerCase().includes(lugar)) {
                    document.getElementById('informacion').innerHTML+=`
                    <tr>
                        <td>${element.sitio}</td>
                        <td>${element.zona}</td>
                        <td>${element.municipio}</td>
                        <td>${element.coordenada_norte}</td>
                        <td>${element.coordenada_oeste}</td>
                    </tr>
                    `
                }
            }
            else if (filtrar=='zona') {
                if (element.zona.toLowerCase().includes(lugar)) {
                    document.getElementById('informacion').innerHTML+=`
                    <tr>
                        <td>${element.sitio}</td>
                        <td>${element.zona}</td>
                        <td>${element.municipio}</td>
                        <td>${element.coordenada_norte}</td>
                        <td>${element.coordenada_oeste}</td>
                    </tr>
                    `
                }
            }
            else if (filtrar=='municipio') {
                if (element.municipio.toLowerCase().includes(lugar)) {
                    document.getElementById('informacion').innerHTML+=`
                    <tr>
                        <td>${element.sitio}</td>
                        <td>${element.zona}</td>
                        <td>${element.municipio}</td>
                        <td>${element.coordenada_norte}</td>
                        <td>${element.coordenada_oeste}</td>
                    </tr>
                    `
                }
            }
        });
    });
}
filtro()