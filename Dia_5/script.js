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
        },
        {
            "orderId": 10,
            "productId": 1,
            "quantity": 3,
            "orderDate": "2024-01-23",
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
    console.log("7. Salir del programa");
}
function gestion_productos(){
    console.log("1. Añadir nuevo producto");
    console.log("2. Ver todos los productos");
    console.log("3. Actualizar datos de un producto");
    console.log("4. Eliminar Productos");
    console.log("5. Volver al menú principal");
}
function gestion_proveedores(){
    console.log("---------------------------");
    console.log("1. Añadir nuevo proveedor");
    console.log("2. Ver todos los proveedores");
    console.log("3. Actualizar datos de un proveedor");
    console.log("4. Eliminar Proveedor");
    console.log("5. Volver al menú principal");
}
function gestion_pedidos(){
    console.log("---------------------------");
    console.log("1. Añadir nuevo pedido");
    console.log("2. Ver todos los pedidos");
    console.log("3. Actualizar datos de un pedido");
    console.log("4. Eliminar un pedido");
    console.log("5. Volver al menú principal");
}
function informes(){
    console.log("---------------------------");
    console.log("1. informe de ventas");
    console.log("2. informe de productos");
    console.log("3. Volver al menú principal");
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
function addSupplier(supplier){
    let contador = 0;
    for (const i of info["suppliers"]){
        if (i["id"]==supplier["id"]) {
            contador=1;
        }
    }
    if (contador==0) {
        info["suppliers"].push(supplier)
    }
    else{
        console.log("ya existe un proveedor con este id por lo tanto no se puede agregar");
    }
}
function viewSuppliers(){
    for (const i of info["suppliers"]){
        console.log("---------------------------");
        console.log("id: ",i["id"]);
        console.log("name: ",i["name"]);
        console.log("contactInfo: ");
        console.log("------------phone: ",i["contactInfo"]["phone"]);
        console.log("------------email: ",i["contactInfo"]["email"]);
        console.log("------------address: ",i["contactInfo"]["address"]);
        console.log("---------------------------");
    }
}
function updateSupplier(id, newDetails){
    let contador = 0;
    for (const i of info["suppliers"]){
        if (id==i["id"]) {
            i["contactInfo"]["phone"]=newDetails[0];
            i["contactInfo"]["email"]=newDetails[1];
            i["contactInfo"]["address"]=newDetails[2];
            contador+=1;
        }
    }
    if (contador==0) {
        console.log("NO existe un proveedor con este id por lo tanto no se pueden hacer cambios");
    }
}
function deleteSupplier(id){
    let contador = 0;
    for (let i=info["suppliers"].length-1; i >= 0; i--){
        if (id==info["suppliers"][i]["id"]) {
            info["suppliers"].splice(i,1);
            contador+=1
        }
    }
    if (contador==0) {
        console.log("El id que ingresaste no existe");
    }
}
function addOrder(order){
    let contador_order = 0;
    let contador_produc = 0;
    let contador_cantidad = 0;
    for (const i of info["orders"]){
        if (i["orderId"]==order["orderId"]) {
            contador_order+=1;
        }
    }
    for (const i of info["products"]){
        if (i["id"]==order["productId"]) {
            contador_produc+=1;
            if (order["quantity"]<=i["quantityInStock"] && order["quantity"]>0) {
                contador_cantidad+=1;
            }
        }
    }
    if (contador_order>0) {
        console.log("ya existe una orden con el id que ingresaste");
    }
    if (contador_produc==0) {
        console.log("no existe ningun producto con el id que ingresaste");
    }
    if (contador_cantidad==0) {
        console.log("la cantidad que ingresaste supera a la cantidad en stock o es una cantidad invalida");
    }
    if (contador_order==0 && contador_produc>0 && contador_cantidad>0){
        for (const i of info["products"]){
            if (i["id"]==order["productId"]) {
                i["quantityInStock"]-=order["quantity"]
            }
        }
        info["orders"].push(order);
    }
}
function viewOrders(){
    for (const i of info["orders"]){
        console.log("---------------------------");
        console.log("orderId: ",i["orderId"]);
        console.log("productId: ",i["productId"]);
        console.log("quantity: ",i["quantity"]);
        console.log("orderDate: ",i["orderDate"]);
        console.log("status: ",i["status"]);
        console.log("---------------------------");
    }
}
function updateOrder(orderId, newDetails){
    let contador = 0;
    for (const i of info["orders"]){
        if (orderId==i["orderId"]) {
            i["orderDate"]=newDetails[0];
            i["status"]=newDetails[1];
            contador+=1;
        }
    }
    if (contador==0) {
        console.log("el id de orden que ingresaste no existe");
    }
}
function deleteOrder(orderId){
    let contador = 0;
    for (let i=info["orders"].length-1; i >= 0; i--){
        if (orderId==info["orders"][i]["orderId"]) {
            info["orders"].splice(i,1);
            contador+=1
        }
    }
    if (contador==0) {
        console.log("El id que ingresaste no existe");
    }
}
function generateSalesReport(startDate, endDate){
    let contador_pedidos=0;
    let ingresos_generados=0;
    let id_productos=[];
    let tipos_productos=[];
    let precio_productos=[];
    for (const i of info["orders"]){
        if (new Date(i["orderDate"])>startDate && new Date(i["orderDate"])<endDate) {
            contador_pedidos+=1;
            for (const x of info["products"]){
                if (i["productId"]==x["id"]) {
                    ingresos_generados+=i["quantity"]*x["price"];
                    if (!tipos_productos.includes(x["name"])) {
                        tipos_productos.push(x["name"]);
                        id_productos.push(x["id"]);
                        precio_productos.push(x["price"])
                    }
                }
            }
        }
    }
    
    for (let h=0; h<tipos_productos.length; h++){
        let precio_total = 0;
        let total_ventas = 0;
        for (const i of info["orders"]){
            if (new Date(i["orderDate"])>startDate && new Date(i["orderDate"])<endDate && id_productos[h]==i["productId"]){
                precio_total+=i["quantity"]*precio_productos[h];
                total_ventas+=i["quantity"]
            }
        }
        console.log("nombre del producto: ",tipos_productos[h]);
        console.log("precio por unidad: ",precio_productos[h]);
        console.log("unidades vendidas: ",total_ventas);
        console.log("precio total: ",precio_total);
    }
    console.log("total de pedidos realizados en ese periodo de tiempo: ",contador_pedidos);
    console.log("Ingresos totales en ese periodo de tiempo: ",ingresos_generados);
    
}
function generateInventoryReport(){
    for (const i of info["products"]){
        console.log("////////////////////////////////////////////////////////////");
        console.log("id: ",i["id"]);
        console.log("name: ",i["name"]);
        console.log("category: ",i["category"]);
        console.log("price: ",i["price"]);
        console.log("quantityInStock: ",i["quantityInStock"]);
        console.log("valor de stock: ",i["price"]*i["quantityInStock"]);
        console.log(":::::::::::::::INFORMACIÓN DEL PROVEEDOR::::::::::::::::");
        for (const x of info["suppliers"]){
            if (i["supplierId"]==x["id"]) {
                console.log("id: ",x["id"]);
                console.log("name: ",x["name"]);
                console.log("contactInfo: ");
                console.log("------------phone: ",x["contactInfo"]["phone"]);
                console.log("------------email: ",x["contactInfo"]["email"]);
                console.log("------------address: ",x["contactInfo"]["address"]);
            }
        }
        console.log("////////////////////////////////////////////////////////////");
    }
}
function checkStockLevels() {
    for (const i of info["products"]){
        if (i["quantityInStock"]<10) {
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
}
function restockProduct(id, quantity) {
    for (const i of info["products"]){
        if (id==i["id"]) {
            i["quantityInStock"]+=quantity
        }
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
        console.clear();
        let bucle_2=true;
        while (bucle_2==true) {
            gestion_proveedores();
            let opcion = prompt("ingresa una opción");
            if (opcion==1) {
                console.log("AGREGAR NUEVO PROVEEDOR");
                let id = prompt("id del nuevo proveedor")
                let name = prompt("nombre");
                let phone = prompt("numero de telefono");
                let email = prompt("Email");
                let address = prompt("address");
                var proveedor_agregar={"id":id,"name":name,"contactInfo":{"phone":phone,"email":email,"address":address}}
                addSupplier(proveedor_agregar);
                console.log("-------------------------------------------");
            }
            else if (opcion==2) {
                console.clear();
                viewSuppliers();
            }
            else if (opcion==3) {
                console.log("ACTUALIZAR DATOS DEL PROVEEDOR");
                let id = prompt("id del proveedor al que le vas a realizar los cambios");
                let phone = prompt("Nuevo numero de telefono");
                let email = prompt("Nuevo Email");
                let address = prompt("Nuevo address");
                var cambios_proveedor=[phone,email,address];
                updateSupplier(id,cambios_proveedor)
            }
            else if (opcion==4) {
                let id = prompt("ingresa el id del proveedor que deseas eliminar");
                deleteSupplier(id);
            }
            else if (opcion==5) {
                bucle_2=false;
            }
        }
    }
    else if (opc==3) {
        console.clear();
        let bucle_3=true;
        while (bucle_3==true){
            gestion_pedidos();
            let opcion = prompt("ingresa una opción");
            if (opcion==1) {
                console.log("Añadir nuevo pedido");
                let orderId = Number(prompt("id de la orden"));
                let productId = Number(prompt("id del producto"));
                let quantity = Number(prompt("cantidad del producto"));
                let orderDate = prompt("fecha (año-mes-dia)");
                let status = prompt("estado de la orden");
                var orden_agregar = {"orderId":orderId,"productId":productId,"quantity":quantity,"orderDate":orderDate,"status":status};
                addOrder(orden_agregar);
                console.log("-------------------------------------------");
            }
            else if (opcion==2){
                console.clear();
                viewOrders();
            }
            else if (opcion==3){
                let orderId = prompt("id de la orden");
                let orderDate = prompt("nueva fecha (año-mes-dia)");
                let status = prompt("Nuevo estado de la orden");
                var cambios_orden=[orderDate,status];
                updateOrder(orderId,cambios_orden);
                console.log("-------------------------------------------");
            }
            else if (opcion==4){
                let orderId = prompt("id de la orden que deseas eliminar");
                deleteOrder(orderId)
            }
            else if (opcion==5){
                bucle_3=false;
            }
        }
    }
    else if (opc==4) {
        console.clear();
        let bucle_4=true;
        while (bucle_4==true) {
            console.log(":::::::::GESTION DE EXISTENCIAS::::::::::");
            console.log("1. ver productos con poco stock");
            console.log("2. Aumentar existencias de un producto");
            console.log("3. Volver al menú principal");
            let opcion = prompt("ingresa una opción");
            if (opcion==1) {
                console.log("PRODUCTOS CON CANTIDAD DE STOCK BAJA");
                checkStockLevels();
            }
            else if (opcion==2) {
                console.log("AUMENTAR NIVEL DE EXISTENCIAS DE UN PRODUCTO");
                let id = prompt("id del producto");
                let quantity = Number(prompt("cantidad que deseas añadir"));
                restockProduct(id, quantity)
            }
            else if (opcion==3) {
                bucle_4=false;
            }
        }
    }
    else if (opc==5) {
        console.clear();
        let bucle_5=true;
        while (bucle_5) {
            informes();
            let opcion = prompt("ingresa una opción");
            if (opcion==1) {
                console.log("INFORME DE VENTAS");
                let fecha_i=prompt("ingresa la fecha de inicio en formato (año-mes-dia)");
                let fecha_f=prompt("ingresa la fecha de fin en formato (año-mes-dia)");
                let inicio=new Date(fecha_i);
                let fin=new Date(fecha_f);
                generateSalesReport(inicio,fin);
            }
            else if (opcion==2) {
                console.clear();
                console.log(":::::::::INFORME DE TODOS LOS PRODUCTOS::::::::::");
                generateInventoryReport();
            }
            else if (opcion==3) {
                bucle_5=false;
            }
        }
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
                    bool=searchProducts();
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
        console.log("Gracias por usar este programa :)");
        bucle_principal=false;
    }
}