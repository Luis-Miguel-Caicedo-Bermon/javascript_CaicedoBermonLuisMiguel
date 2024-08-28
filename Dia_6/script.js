//document.getElementById("hola").addEventListener("click",mostrar);
let info = [];
fetch("info.json")
.then(res =>res.json())
.then(data => {
    info.push(data)
})

function obtener_producto(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let quantityInStock = document.getElementById("quantityInStock").value;
    let supplierId = document.getElementById("supplierId").value;
    let lista_productos_agregar={"id":id,"name":name,"category":category,"price":price,"quantityInStock":quantityInStock,"supplierId":supplierId};
    addProduct(lista_productos_agregar);
}
function addProduct(product){//función que agrega un nuevo producto
    let contador=0;
    let contador_p=0;
    for (const x of info[0]["products"]){
        if (product["id"]==x["id"]) {
            contador_p+=1;
        }
    }
    for (const i of info[0]["suppliers"]){
        if (product["supplierId"]==i["id"]) {//verifica si el proveedor existe
            contador+=1
        }
    }
    if (contador>0 && contador_p==0){//si el proveedor existe se agrega el nuevo producto
        info[0]["products"].push(product)
    }
    if (contador_p>0) {
        alert("ya existe un producto con este id")
    }
    if (contador==0) {
        alert("no se encontró el proveedor que especificaste")
    }
}
document.getElementById("ver_productos").addEventListener("click",viewProducts)
function viewProducts(){//función que muestra todos los productos
    document.getElementById("mostrar_productos").innerHTML =""
    for (const i of info[0]["products"]){
        document.getElementById("mostrar_productos").innerHTML +=
        `<p>----------------------------</p>
        <p>id: ${i["id"]}</p>
        <p>name: ${i["name"]}</p>
        <p>category: ${i["category"]}</p>
        <p>price: ${i["price"]}</p>
        <p>quantityInStock: ${i["quantityInStock"]}</p>
        <p>supplierId: ${i["supplierId"]}</p>
        <p>----------------------------</p>`
    }
}
function actualizar_producto(){
    let id = document.getElementById("id_actualizar").value;
    let name = document.getElementById("nombre_actualizar").value;
    let category = document.getElementById("categoria_actualizar").value;
    let price = document.getElementById("precio_actualizar").value;
    let quantityInStock = document.getElementById("cantidad_actualizar").value;
    let actualizar_producto={"name":name,"category":category,"price":price,"quantityInStock":quantityInStock};
    updateProduct(id,actualizar_producto)
}
function updateProduct(id, newDetails){//función que actualiza los detalles de un producto
    let contador = 0;
    for (const i of info[0]["products"]){
        if (id==i["id"]) {
            contador+=1;
            if (newDetails["name"]!="") {
                i["name"]=newDetails["name"]
            }
            if (newDetails["category"]!="") {
                i["category"]=newDetails["category"]
            }
            if (newDetails["price"]!="") {
                i["price"]=newDetails["price"]
            }
            if (newDetails["quantityInStock"]!="") {
                i["quantityInStock"]=newDetails["quantityInStock"]
            }
        }
    }
    if (contador==0) {
        alert("el id que ingresaste no existe");
    }
}
function eliminar_producto(){
    let id = document.getElementById("id_eliminar").value;
    deleteProduct(id);
}
function deleteProduct(id){//función que elinina un producto especificado por el usuario
    let contador = 0;
    for (let i=info[0]["products"].length-1; i >= 0; i--){
        if (id==info[0]["products"][i]["id"]) {
            info[0]["products"].splice(i,1);
            contador+=1;
        }
    }
    if (contador==0) {
        alert("El id que ingresaste no existe");
    }
}
function obtener_proveedor(){
    let id = document.getElementById("id_proveedor").value;
    let name = document.getElementById("name_proveedor").value;
    let phone = document.getElementById("phone_proveedor").value;
    let email = document.getElementById("email_proveedor").value;
    let address = document.getElementById("address").value;
    var proveedor_agregar={"id":id,"name":name,"contactInfo":{"phone":phone,"email":email,"address":address}};
    addSupplier(proveedor_agregar);
}
function addSupplier(supplier){//función que añade un nuevo proveedor
    let contador = 0;
    for (const i of info[0]["suppliers"]){
        if (i["id"]==supplier["id"]) {
            contador=1;
        }
    }
    if (contador==0) {
        info[0]["suppliers"].push(supplier)
    }
    else{
        alert("ya existe un proveedor con este id por lo tanto no se puede agregar");
    }
}
document.getElementById("ver_proveedores").addEventListener("click",viewSuppliers);
function viewSuppliers(){//función que imprime todos los los proveedores
    document.getElementById("mostrar_proveedores").innerHTML =""
    for (const i of info[0]["suppliers"]){
        document.getElementById("mostrar_proveedores").innerHTML +=
        `
        <p>-----------------------------------------------------</p>
        <p>id: ${i["id"]}</p>
        <p>name: ${i["name"]}</p>
        <p>contactInfo: </p>
        <p>------------phone: ${i["contactInfo"]["phone"]}</p>
        <p>------------email: ${i["contactInfo"]["email"]}</p>
        <p>------------address: ${i["contactInfo"]["address"]}</p>
        <p>-----------------------------------------------------</p>
        `
    }
}
function actualizar_proveedor(){
    let id = document.getElementById("id_proveedor_actualizar").value;
    let name = document.getElementById("name_proveedor_actualizar").value;
    let phone = document.getElementById("phone_proveedor_actualizar").value;
    let email = document.getElementById("email_proveedor_actualizar").value;
    let address = document.getElementById("address_actualizar").value;
    var proveedor_actualizar={"name":name,"contactInfo":{"phone":phone,"email":email,"address":address}};
    updateSupplier(id,proveedor_actualizar)
}
function updateSupplier(id, newDetails){
    let contador = 0;
    for (const i of info[0]["suppliers"]){
        if (id==i["id"]) {
            contador+=1;
            if (newDetails["name"]!="") {
                i["name"]=newDetails["name"]
            }
            if (newDetails["contactInfo"]["phone"]!="") {
                i["contactInfo"]["phone"]=newDetails["contactInfo"]["phone"]
            }
            if (newDetails["contactInfo"]["email"]!="") {
                i["contactInfo"]["email"]=newDetails["contactInfo"]["email"]
            }
            if (newDetails["contactInfo"]["address"]!="") {
                i["contactInfo"]["address"]=newDetails["contactInfo"]["address"]
            }
        }
    }
    if (contador==0) {
        alert("el id que ingresaste no existe");
    }
}
function eliminar_proveedor(){
    let id = document.getElementById("id_eliminar_proveedor").value;
    deleteSupplier(id)
}
function deleteSupplier(id){//funcion que elimina un proveedor elegido por el usuario
    let contador = 0;
    for (let i=info[0]["suppliers"].length-1; i >= 0; i--){
        if (id==info[0]["suppliers"][i]["id"]) {
            info[0]["suppliers"].splice(i,1);
            contador+=1
        }
    }
    if (contador==0) {
        alert("El id que ingresaste no existe");
    }
}
function obtener_orden(){
    let orderId = document.getElementById("order_id").value;
    let productId = document.getElementById("produc_id").value;
    let quantity = document.getElementById("order_quantity").value;
    let status = document.getElementById("status").value;
    const hoy = new Date();
    let mes = Number(hoy.getMonth())+1
    if (mes<10) {
        mes = "0"+String(mes);
    }
    let orderDate = (hoy.getFullYear()+"-"+mes+"-"+hoy.getDate());
    console.log(orderDate);
    let orden_agregar = {"orderId":orderId,"productId":productId,"quantity":quantity,"orderDate":orderDate,"status":status};
    addOrder(orden_agregar)
}
function addOrder(order){//función que añade una nueva orden
    let contador_order = 0;
    let contador_produc = 0;
    let contador_cantidad = 0;
    for (const i of info[0]["orders"]){
        if (i["orderId"]==order["orderId"]) {//comprueba si ya existe una orden con este id
            contador_order+=1;
        }
    }
    for (const i of info[0]["products"]){
        if (i["id"]==order["productId"]) {
            contador_produc+=1;
            if (order["quantity"]<=i["quantityInStock"] && order["quantity"]>0) {//comprueba si existe un producto con el id ingresado
                contador_cantidad+=1;
            }
        }
    }
    if (contador_order>0) {
        alert("ya existe una orden con el id que ingresaste");
    }
    if (contador_produc==0) {
        alert("no existe ningun producto con el id que ingresaste");
    }
    if (contador_cantidad==0) {
        alert("la cantidad que ingresaste supera a la cantidad en stock o es una cantidad invalida");
    }
    if (contador_order==0 && contador_produc>0 && contador_cantidad>0){
        for (const i of info[0]["products"]){
            if (i["id"]==order["productId"]) {
                i["quantityInStock"]-=order["quantity"]//le resta la cantidad que se pidió al producto
            }
        }
        info[0]["orders"].push(order);//añade la nueva orden
    }
}
document.getElementById("ver_ordenes").addEventListener("click",viewOrders);
function viewOrders(){//funcion que muestra todas la ordenes
    document.getElementById("mostrar_ordenes").innerHTML =""
    for (const i of info[0]["orders"]){
        document.getElementById("mostrar_ordenes").innerHTML +=
        `
        <p>-----------------------------------------------------</p>
        <p>orderId: ${i["orderId"]}</p>
        <p>productId: ${i["productId"]}</p>
        <p>quantity: ${i["quantity"]}</p>
        <p>orderDate: ${i["orderDate"]}</p>
        <p>status: ${i["status"]}</p>
        <p>-----------------------------------------------------</p>
        `
    }
}
function actualizar_orden(){
    let orderId = document.getElementById("actualizar_order_id").value;
    let quantity = document.getElementById("actualizar_order_quantity").value;
    let status = document.getElementById("actualizar_status").value;
    let cambios_orden={"quantity":quantity,"status":status}
    updateOrder(orderId,cambios_orden);
}
function updateOrder(orderId, newDetails){//función que actualiza datos de una orden especificada
    let contador = 0;
    for (const i of info[0]["orders"]){
        if (orderId==i["orderId"]) {
            contador+=1;
            if (newDetails["quantity"]!="") {
                i["quantity"]=newDetails["quantity"];
            }
            if (newDetails["status"]!="") {
                i["status"]=newDetails["status"];
            }
        }
    }
    if (contador==0) {
        alert("el id de orden que ingresaste no existe");
    }
}
function eliminar_orden(){
    let orderId = document.getElementById("id_eliminar_orden").value;
    deleteOrder(orderId)
}
function deleteOrder(orderId){//función que elimina una orden especificada
    let contador = 0;
    for (let i=info[0]["orders"].length-1; i >= 0; i--){
        if (orderId==info[0]["orders"][i]["orderId"]) {
            info[0]["orders"].splice(i,1);
            contador+=1
        }
    }
    if (contador==0) {
        alert("El id que ingresaste no existe");
    }
}