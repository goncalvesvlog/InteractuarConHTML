const BBDD = [
    {
        "id": 1,
        "nombre": "Una noche en Venecia", 
        "img": "./assets/img/book1.png",
        "precio": 14.59,
        "cantidad": 1
    },
    {
        "id": 2,
        "nombre": "Love in Paris", 
        "img": "./assets/img/book2.png",
        "precio": 19.99,
        "cantidad": 1
    },
    {
        "id": 3,
        "nombre": "Locura de Amor", 
        "img": "./assets/img/book3.png",
        "precio": 8.99,
        "cantidad": 1
    },
    {
        "id": 4,
        "nombre": "Frank", 
        "img": "./assets/img/book4.png",
        "precio": 18.35,
        "cantidad": 1
    },
    {
        "id": 5,
        "nombre": "Crimenes y Poder", 
        "img": "./assets/img/book5.png",
        "precio": 21.58,
        "cantidad": 1
    },
    {
        "id": 6,
        "nombre": "Tragedia en el Nilo", 
        "img": "./assets/img/book6.png",
        "precio": 14.55,
        "cantidad": 1
    },
    {
        "id": 7,
        "nombre": "Caidas al vacio", 
        "img": "./assets/img/book7.png",
        "precio": 18.19,
        "cantidad": 1
    },
    {
        "id": 8,
        "nombre": "Reir, ¿Fallar? y Soñar", 
        "img": "./assets/img/book8.png",
        "precio": 9.55,
        "cantidad": 1
    },
    {
        "id": 9,
        "nombre": "Anotomia de una Carcajada", 
        "img": "./assets/img/book9.png",
        "precio": 12.45,
        "cantidad": 1
    }
]

const carrito = [];

let total = 0;

function renderizarProductos(){

    let tienda = document.getElementById('tienda');
    
    BBDD.forEach((e) => {

        let productoHTML = `
        
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${e.img}" alt="Card 1" />
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${e.precio} €</p>
                <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `
        tienda.innerHTML += productoHTML
    });
}
renderizarProductos();

function agregarProductoAlCarrito(id){

    let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){

        producto.cantidad++;
    }else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    renderizarCarrito();
}

function renderizarCarrito(){
    let carritoHTML = document.getElementById('carrito');

    html = '';
    carrito.forEach((producto, id)=>{

        html +=`
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${producto.img}" alt="Card 1"/>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${producto.precio} €</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
            </div>
        </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html;
}

const textElement = document.getElementById("bienvenida")

console.log( textElement.innerText )

const usuario = prompt('Ingrese su nombre por favor')

textElement.innerText = "Bienvenido " + usuario + ","