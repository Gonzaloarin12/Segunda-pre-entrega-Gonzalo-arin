const productos = [
    { nombre: "auto", precio: 10000},
    { nombre: "camioneta", precio: 15000},
    { nombre: "camion", precio: 25000},
    { nombre: "micro", precio: 30000},
    { nombre: "moto", precio: 5000},
    { nombre: "cuatriciclo", precio: 8000},
];

let carrito = []

alert ("Bienvenido a Transoceanica Vehiculos")

let seleccion = prompt ("Hola desea comprar alguna de nuestas Unidades -- SI O NO")

// Bucle
while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor responder unicamente con si o no")
    seleccion = prompt("Hola desea comprar algunos de nuestas Unidades -- SI O NO")
}

if (seleccion == "si") {
    alert ("A continucion le mostraremos las unidades desponibles")
    let todosLosProductos = productos.map(
        (productos) => productos.nombre + " " + "$" + productos.precio
        );
        alert(todosLosProductos.join (" " + " " + "/-/" + " " + " "))  
} else if (seleccion == "no") {
    alert ("Gracias por visitarnos, Hasta Pronto")
}

while(seleccion != "no"){
    let producto = prompt ("Agregar una unidad al carrito (auto / camioneta / camion / micro / moto / cuatriciclo")
    let precio = 0

    if (producto == "auto" || producto == "camioneta" || producto == "camion" || producto == "micro" || producto == "moto" || producto == "cuatriciclo") {
        switch(producto) {
            case "auto":
            precio = 10000;
            break
            
            case "camioneta":
            precio = 15000;
            break
    
            case "camion":
            precio = 25000;
            break
    
            case "micro":
            precio = 30000;
            break
    
            case "moto":
            precio = 5000;
            break
    
            case "cuatriciclo":
            precio = 8000;
            break
            default:
                break;
        }

        let unidades = parseInt(prompt ("Cuantas Unidades quiere seleccionar? ( Ej: 1, 2, 3, Etc."))
        
        carrito.push ({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert ("No tenemos stock de esa unidad")
    }
    seleccion = prompt ("Quiere mas unidades? Respondes con si o no")
    while(seleccion == "no"){
        alert ("Gracias por la compra, Hasta Pronto!!!")
        carrito.forEach ((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
alert (`el total a pagar es de $: ${total}`)





