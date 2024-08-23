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
    else if (query==4) {
        bool=false;
    }
}
let bool = true;
while (bool==true) {
    menu_filtro();
    let opc_filtro = prompt("escoje tu opción");
    searchProducts(opc_filtro);
}