var info = {
    "products": [
        {
            "id": 1,
            "name": "Laptop",
            "category": "Electronics",
            "price": 999.99,
            "quantityInStock": 50,
            "supplierId": 101
        }
    ],
    "suppliers": [
        {
            "id": 101,
            "name": "Tech Supplies Inc.",
            "contactInfo": {
                "phone": "123-456-7890",
                "email": "sales@techsupplies.com",
                "address": "123 Tech Lane, Silicon Valley, CA"
            }
        }
    ],
    "orders": [
        {
            "orderId": 1001,
            "productId": 1,
            "quantity": 5,
            "orderDate": "2024-08-23",
            "status": "Delivered"
        }
    ]
}
function menu_filtro() {
    console.log("Filtrar productos");
    console.log("1. filtrar por nombre");
    console.log("2. filtrar por categoria");
    console.log("3. filtrar por proveedor");
    console.log("4. salir");
}
function menu_filtro_pedidos() {
    console.log("Filtrar pedidos");
    console.log("1. filtrar por estado");
    console.log("2. filtrar por rango de fecha");
    console.log("3. filtrar por producto");
    console.log("4. salir");
}
function menu_principal(){
    console.log("--------MENÜ PRINCIPAL--------");
    console.log("1. Gestión de productos");
    console.log("2. Gestión de proveedores");
    console.log("3. Gestión de pedidos");
    console.log("4. Gestión de existencias");
    console.log("5. Informes");
    console.log("6. Buscar y Filtrar");
    console.log("7. Integridad y validación de datos");
    console.log("8. Salir del programa");
}
function gestion_productos(){
    console.log("1. Añadir nuevo producto");
    console.log("2. Ver todos los productos");
    console.log("3. Actualizar datos de un producto");
    console.log("4. Eliminar Productos");
    console.log("5. Volver al menú principal");
}
function searchProducts(query){
    if (query==1) {
        console.log("FILTRADO POR NOMBRE");
        let buclecito1=true;
        while (buclecito1==true) {
            let contador=0;
            let nombre=prompt("ingresa el nombre por el que deseas filtrar");
            for (const i of info["products"]){
                if (nombre==i["name"]){
                    console.log("---------------------------");
                    console.log("id: ",i["id"]);
                    console.log("name: ",i["name"]);
                    console.log("category: ",i["category"]);
                    console.log("price: ",i["price"]);
                    console.log("quantityInStock: ",i["quantityInStock"]);
                    console.log("supplierId: ",i["supplierId"]);
                    console.log("---------------------------");
                    contador+=1;
                }
            }
            if (contador==0) {
                console.log("no hay productos con este nombre");
            }
            else{
                buclecito1=false;
            }
        }
    }
    else if (query==2){
        console.log("FILTRADO POR CATEGORIA");
        let buclecito1=true;
        while (buclecito1==true) {
            let contador=0;
            let nombre=prompt("ingresa la categoria por el que deseas filtrar");
            for (const i of info["products"]){
                if (nombre==i["category"]){
                    console.log("---------------------------");
                    console.log("id: ",i["id"]);
                    console.log("name: ",i["name"]);
                    console.log("category: ",i["category"]);
                    console.log("price: ",i["price"]);
                    console.log("quantityInStock: ",i["quantityInStock"]);
                    console.log("supplierId: ",i["supplierId"]);
                    console.log("---------------------------");
                    contador+=1;
                }
            }
            if (contador==0) {
                console.log("Esta categoria no existe");
            }
            else{
                buclecito1=false;
            }
        }
    }
    else if (query==3){
        console.log("FILTRADO POR PROVEEDOR");
        let buclecito1=true;
        while (buclecito1==true) {
            let contador=0;
            let nombre=prompt("ingresa el id del proveedor por el que deseas filtrar");
            for (const i of info["products"]){
                if (nombre==i["supplierId"]){
                    console.log("---------------------------");
                    console.log("id: ",i["id"]);
                    console.log("name: ",i["name"]);
                    console.log("category: ",i["category"]);
                    console.log("price: ",i["price"]);
                    console.log("quantityInStock: ",i["quantityInStock"]);
                    console.log("supplierId: ",i["supplierId"]);
                    console.log("---------------------------");
                    contador+=1;
                }
            }
            if (contador==0) {
                console.log("Esta categoria no existe");
            }
            else{
                buclecito1=false;
            }
        }
    }
    else if (query==4) {
        return false;
    }
}
function filterOrders(criteria){
    if (criteria==1) {
        console.log("FILTRADO POR ESTADO");
        let buclecito1=true;
        while (buclecito1==true) {
            let contador=0;
            let nombre=prompt("ingresa el estado por el que deseas filtrar");
            for (const i of info["orders"]){
                if (nombre==i["status"]){
                    console.log("---------------------------");
                    console.log("orderId: ",i["orderId"]);
                    console.log("productId: ",i["productId"]);
                    console.log("quantity: ",i["quantity"]);
                    console.log("orderDate: ",i["orderDate"]);
                    console.log("quantityInStock: ",i["quantityInStock"]);
                    console.log("status: ",i["status"]);
                    console.log("---------------------------");
                    contador+=1;
                }
            }
            if (contador==0) {
                console.log("no hay ordenes con este estado");
            }
            else{
                buclecito1=false;
            }
        }
    } 
    else if (criteria==2){
        console.log("FILTRADO POR RANGO DE FECHA");
        let buclecito1=true;
        while (buclecito1==true) {
            let contador=0;
            let fecha_i=prompt("ingresa la fecha de inicio en formato (año-mes-dia)");
            let fecha_f=prompt("ingresa la fecha de fin en formato (año-mes-dia)");
            let inicio=new Date(fecha_i);
            let fin=new Date(fecha_f);
            for (const i of info["orders"]){
                if (new Date(i["orderDate"])>inicio && new Date(i["orderDate"])<fin){
                    console.log("---------------------------");
                    console.log("orderId: ",i["orderId"]);
                    console.log("productId: ",i["productId"]);
                    console.log("quantity: ",i["quantity"]);
                    console.log("orderDate: ",i["orderDate"]);
                    console.log("status: ",i["status"]);
                    console.log("---------------------------");
                    contador+=1;
                }
            }
            if (contador==0) {
                console.log("no hay ordenes con este rango de fecha");
            }
            else{
                buclecito1=false;
            }
        }
    }
    else if (criteria==3){
        console.log("FILTRADO POR PRODUCTO");
        let buclecito1=true;
        while (buclecito1==true) {
            let contador=0;
            let nombre=prompt("ingresa el id del producto por el que deseas filtrar");
            for (const i of info["orders"]){
                if (nombre==i["productId"]){
                    console.log("---------------------------");
                    console.log("orderId: ",i["orderId"]);
                    console.log("productId: ",i["productId"]);
                    console.log("quantity: ",i["quantity"]);
                    console.log("orderDate: ",i["orderDate"]);
                    console.log("quantityInStock: ",i["quantityInStock"]);
                    console.log("status: ",i["status"]);
                    console.log("---------------------------");
                    contador+=1;
                }
            }
            if (contador==0) {
                console.log("no hay ordenes con este estado");
            }
            else{
                buclecito1=false;
            }
        }
    }
    else if (criteria==4){
        return false;
    }
}
function addProduct(product){
    let contador=0;
    for (const i of info["suppliers"]){
        if (product["supplierId"]==i["id"]) {
            contador+=1
        }
    }
    if (contador>0){
        info["products"].push(product)
    }
    else{
        console.log("no se encontró el proveedor que especificaste");
    }
}
function viewProducts(){
    for (const i of info["products"]){
        console.log("----------------------------");
        console.log("id: ",i["id"]);
        console.log("name: ",i["name"]);
        console.log("category: ",i["category"]);
        console.log("price: ",i["price"]);
        console.log("quantityInStock: ",i["quantityInStock"]);
        console.log("supplierId: ",i["supplierId"]);
        console.log("----------------------------");
    }
}
function updateProduct(id, newDetails){
    let contador = 0;
    for (const i of info["products"]){
        if (id==i["id"]) {
            i["price"]=newDetails[0];
            i["quantityInStock"]=newDetails[1];
            contador+=1;
        }
    }
    if (contador==0) {
        console.log("el id que ingresaste no existe");
        
    }
}
function deleteProduct(id){
    let contador = 0;
    for (let i=info["products"].length-1; i >= 0; i--){
        if (id==info["products"][i]["id"]) {
            info["products"].splice(i,1);
            contador+=1
        }
    }
    if (contador==0) {
        console.log("El id que ingresaste no existe");
        
    }
}

let bucle_principal=true;
while (bucle_principal==true) {
    console.clear();
    menu_principal();
    let opc = prompt("Escoje una opción");
    if (opc==1) {
        console.clear();
        let bucle_1=true;
        while (bucle_1==true) {
            gestion_productos();
            let opcion = prompt("ingresa una opción");
            if (opcion==1) {
                let id=info["products"].length+1
                let name=prompt("nombre del producto");
                let category=prompt("categoria del producto");
                let price=prompt("precio del producto");
                let cantidad=prompt("cantidad de producto");
                let proveedor=prompt("id del proveedor");
                var lista_productos_agregar={"id":id,"name":name,"category":category,"price":price,"quantityInStock":cantidad,"supplierId":proveedor};
                addProduct(lista_productos_agregar);
                console.log("-------------------------------------------");
            }
            else if (opcion==2) {
                viewProducts();
            }
            else if (opcion==3) {
                let id = prompt("ingresa el id de producto al que le deseas hacer una actualización");
                let precio = prompt("nuevo precio");
                let cantidad=prompt("nueva cantidad en stock");
                let actualizacion=[precio,cantidad];
                updateProduct(id,actualizacion);
                console.log("-------------------------------------------");
            }
            else if (opcion==4) {
                let id = prompt("ingresa el id del producto que deseas eliminar");
                deleteProduct(id);
            }
            else if (opcion==5) {
                bucle_1=false;
            }
        }
    }
    else if (opc==2) {
        
    }
    else if (opc==3) {
        
    }
    else if (opc==4) {
        
    }
    else if (opc==5) {
        
    }
    else if (opc==6) {
        let bucle_6 = true;
        while (bucle_6==true) {
            console.log("1. filtrar productos");
            console.log("2. filtrar ordenes");
            console.log("3. volver al menú principal");
            let opc_6 = prompt("ingresa una opción");
            if (opc_6==1) {
                let bool = true;
                while (bool==true) {
                    menu_filtro();
                    let opc_filtro = prompt("escoje tu opción");
                    searchProducts(opc_filtro);
                    bool=searchProducts()
                }
            }
            else if (opc_6==2) {
                let bucle =true;
                while (bucle==true){
                    menu_filtro_pedidos();
                    let opc_filtro = prompt("escoje tu opción");
                    filterOrders(opc_filtro);
                    bucle=filterOrders()
                }
            }
            else if (opc_6==3) {
                bucle_6=false;
            }
        }
    }
    else if (opc==7) {
        
    }
    else if (opc==8) {
        console.log("Gracias por usar este programa :)");
        bucle_principal=false;
    }
}