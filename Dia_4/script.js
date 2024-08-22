var info = {
    "informacion_personal": {
        "nombre": "Juan Pérez",
        "edad": 30,
        "direccion": {
            "calle": "Calle Principal",
            "numero": 123,
            "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
            "correo": "juan.perez@example.com",
            "telefono": "+123456789"
        }
    },
    "historial_educativo": [
        {
            "nivel": "Secundaria",
            "institucion": "Instituto Secundario",
            "año_inicio": 2000,
            "año_fin": 2005
        },
        {
            "nivel": "Universidad",
            "institucion": "Universidad Ejemplar",
            "titulo": "Licenciatura en Ciencias",
            "año_inicio": 2006,
            "año_fin": 2010
        }
    ],
    "experiencia_laboral": [
        {
            "puesto": "Desarrollador de Software",
            "empresa": "Tech Solutions",
            "periodo": "2010-2015",
            "responsabilidades": [
                "Desarrollo de aplicaciones web",
                "Mantenimiento de bases de datos"
            ]
        },
        {
            "puesto": "Gerente de Proyectos",
            "empresa": "Proyectos Avanzados",
            "periodo": "2016-actualidad",
            "responsabilidades": [
                "Planificación y supervisión de proyectos",
                "Coordinación de equipos"
            ]
        }
    ]
}
function menu() {
    console.log("///////MENÚ/////////");
    console.log("1. Crear:");
    console.log("2. Ver");
    console.log("3. Actualizar");
    console.log("4. Eliminar");
    console.log("5. Salir del programa");
}
function informacion() {
    console.log("");
    console.log("1. historial_educativo");
    console.log("2. experiencia_laboral");
    console.log("3. volver al menú principal");
    console.log("");
}
function informacion_2() {
    console.log("");
    console.log("1. informacion_personal");
    console.log("2. historial_educativo");
    console.log("3. experiencia_laboral");
    console.log("4. volver al menú principal");
    console.log("");
}
function actualizar() {
    console.log("Que dato deseas actualizar\n");
    console.log("1: nombre");
    console.log("2: edad");
    console.log("3: direccion");
    console.log("4: contacto\n");
    console.log("5: volver al menú principal");
}
let booleano=true;
while (booleano==true) {
    console.clear();
    menu();
    let opc_menu = prompt("escoje una opción")
    console.clear();
    if (opc_menu==1) {
        console.clear();
        let bool=true;
        while (bool==true) {
            console.log("A que sección deseas añadir nueva información");
            informacion();
            let opc_informacion = prompt("Escoje una opción");
            if (opc_informacion==1) {
                var nivel = prompt("nivel educativo");
                var institucion = prompt("institucional");
                var titulo = prompt("Titulo");
                var año_inicio = prompt("Año de inicio");
                var año_fin = prompt("Año de finalización");
                info["historial_educativo"].push({"nivel":nivel,"institucion":institucion,"titulo":titulo,"año_inicio":año_inicio,"año_fin":año_fin});
            }
            else if (opc_informacion==2){
                var puesto = prompt("puesto");
                var empresa = prompt("empresa");
                var periodo = prompt("");
                var responsabilidad_1 = prompt("responsabilidad_1");
                var responsabilidad_2 = prompt("responsabilidad_2");
                info["experiencia_laboral"].push({"puesto":push,"empresa":empresa,"responsabilidades":[responsabilidad_1,responsabilidad_2]})
            }
            else if (opc_informacion==3){
                bool=false
            }
        }
        
    }
    else if (opc_menu==2){
        console.clear();
        let bool=true;
        while (bool==true) {
            console.log("De que sección quieres ver información");
            informacion_2();
            let opc_informacion = prompt("Escoje una opción");
            if (opc_informacion==1) {
                console.log("informacion_personal")
                console.log("nombre: ", info["informacion_personal"]["nombre"]);
                console.log("edad: ",info["informacion_personal"]["edad"]);
                console.log("direccion:");
                console.log("----------calle: ",info["informacion_personal"]["direccion"]["calle"]);
                console.log("----------numero: ",info["informacion_personal"]["direccion"]["numero"]);
                console.log("----------ciudad: ",info["informacion_personal"]["direccion"]["ciudad"]);
                console.log("contacto: ");
                console.log("---------correo: ",info["informacion_personal"]["contacto"]["correo"]);
                console.log("---------telefono: ",info["informacion_personal"]["contacto"]["telefono"]);
                console.log("");
            }
            else if (opc_informacion==2){
                console.log("historial_educativo");
                let contador=1;
                for (const i of info["historial_educativo"]){
                    console.log("--------------#",contador,"----------------");
                    console.log("nivel: ",i["nivel"]);
                    console.log("institucion: ",i["institucion"]);
                    console.log("titulo: ",i["titulo"]);
                    console.log("año_inicio: ",i["año_inicio"]);
                    console.log("año_fin: ",i["año_fin"]);
                    console.log("------------------------------");
                    contador+=1;
                }
            }
            else if (opc_informacion==3){
                console.log("experiencia_laboral");
                let contador=1;
                for (const i of info["experiencia_laboral"]){
                    console.log("--------------#",contador,"----------------");
                    console.log("puesto: ",i["puesto"]);
                    console.log("empresa: ",i["empresa"]);
                    console.log("periodo",i["periodo"]);
                    console.log("responsabilidades:",);
                    console.log("------------------ ",i["responsabilidades"][0]);
                    console.log("------------------ ",i["responsabilidades"][1]);
                    console.log("------------------------------");
                    contador+=1;
                }
            }
            else if (opc_informacion==4){
                bool=false;
            }
        }
    }
    else if (opc_menu==3){
        console.clear();
        let bool=true;
        while (bool==true) {
            actualizar();
            let opc_informacion = prompt("Escoje una opción");
            if (opc_informacion==1) {
                let nombre = prompt("ingrese el nuevo nombre");
                info["informacion_personal"]["nombre"]=nombre;
            }
            else if (opc_informacion==2) {
                let edad = prompt("ingrese la nueva edad");
                info["informacion_personal"]["edad"]=edad;
            }
            else if (opc_informacion==3) {
                console.log("nueva dirección");
                let calle = prompt("calle");
                let numero = prompt("numero");
                let ciudad = prompt("ciudad");
                info["informacion_personal"]["direccion"]["calle"]=calle;
                info["informacion_personal"]["direccion"]["numero"]=numero;
                info["informacion_personal"]["direccion"]["ciudad"]=ciudad;
            }
            else if (opc_informacion==4) {
                console.log("nuevos contactos");
                let correo = prompt("correo");
                let telefono = prompt("telefono");
                info["informacion_personal"]["contacto"]["correo"]=correo;
                info["informacion_personal"]["contacto"]["telefono"]=telefono;
            }
            else if (opc_informacion==5) {
                bool=false
            }
        }
    }
    else if (opc_menu==4){
        console.clear();
        let bool=true;
        while (bool==true){
            informacion();
            let opc_informacion = prompt("Escoje una opción");
            if (opc_informacion==1) {
                console.log("historial_educativo");
                let contador=1;
                for (const i of info["historial_educativo"]){
                    console.log("--------------#",contador,"----------------");
                    console.log("nivel: ",i["nivel"]);
                    console.log("institucion: ",i["institucion"]);
                    console.log("titulo: ",i["titulo"]);
                    console.log("año_inicio: ",i["año_inicio"]);
                    console.log("año_fin: ",i["año_fin"]);
                    console.log("------------------------------");
                    contador+=1
                }
                let buclecito=true;
                while (buclecito==true) {
                    var Eliminar = prompt("Seleciona el que vas a eliminar por su id")
                    if (Eliminar<contador && Eliminar>0) {
                        buclecito=false;
                    }
                }
                info["historial_educativo"].splice(Eliminar-1,1);
            }
            else if (opc_informacion==2) {
                console.log("experiencia_laboral");
                let contador=1;
                for (const i of info["experiencia_laboral"]){
                    console.log("--------------#",contador,"----------------");
                    console.log("puesto: ",i["puesto"]);
                    console.log("empresa: ",i["empresa"]);
                    console.log("periodo",i["periodo"]);
                    console.log("responsabilidades:",);
                    console.log("------------------ ",i["responsabilidades"][0]);
                    console.log("------------------ ",i["responsabilidades"][1]);
                    console.log("------------------------------");
                    contador+=1;
                }
                let buclecito=true;
                while (buclecito==true) {
                    var Eliminar1 = prompt("Seleciona el que vas a eliminar por su id")
                    if (Eliminar1<contador && Eliminar1>0) {
                        buclecito=false;
                    }
                }
                info["experiencia_laboral"].splice(Eliminar1-1,1)
            }
            else if (opc_informacion==3) {
                bool=false;
            }
        }
    }
    else if (opc_menu==5){
        booleano=false;
    }
}