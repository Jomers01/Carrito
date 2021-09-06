//variables
const url = 'https://jomers01.github.io/Carrito/scripts/data.json'
const contP = document.getElementById('container-principal');
const contC = document.getElementById('cafeteria');
const cart = document.getElementById('carrito');
const btnCart = document.getElementById('btnCart');
const btnCafe = document.getElementById('cafe');
const btnPapel = document.getElementById('papel');

//Cuando apenas se ejecute la pagina llamamos a que se muestre los articulos de la cafetería en pantalla
document.addEventListener('DOMContentLoaded', () => {
    mostarItemsCafeteria();
});

//Escuchar el evento click en el navbar para cambiar de comtenido
btnCafe.addEventListener('click', mostarItemsCafeteria);
btnPapel.addEventListener('click', mostarItemsPapeleria);

//Funcion para mostrar el contenido solo de la cafeteria 
async function mostarItemsCafeteria() {
    const res = await fetch(url);
    const productos = await res.json();
    //Limpiamos el contenedor
    contC.innerHTML = '';

    //Mostramos todos los productos del array
    productos.productos.forEach(items => {
        //Desectructuramos
        const { nombre, precio, img, id } = items;
        const itemss = document.createElement('div')
        //Imprimimos
        itemss.innerHTML +=
            `<div class="card" style="width: 12rem; margin-right: 20px; margin-top: 20px;">
            <img src="${img}" class="card-img-top" alt="item" id="img">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p>$ ${precio} COP</p>
            <a class="btn btn-primary" onclick="agregarPeli(id)" id="${id}">Agregar al carrito</a>
            </div>
        </div>`
        contC.appendChild(itemss)
    });
}

//Funcion para mostrar el contenido solo de la papaleria 
async function mostarItemsPapeleria() {
    const res = await fetch(url);
    const productos = await res.json();
    //Limpiamos el contenedor
    contC.innerHTML = '';

    //Mostramos todos los productos del array
    productos.papeleria.forEach(items => {
        //Desectructuramos
        const { nombre, precio, img, id } = items;
        //Imprimimos
        contC.innerHTML +=
            `<div class="card" style="width: 12rem; margin-right: 20px; margin-top: 20px;">
                <img src="${img}" class="card-img-top" alt="item">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p>$ ${precio} COP</p>
                    <a class="btn btn-primary" onclick="agregar(id)" id="${id}">Agregar al carrito</a>
                </div>
            </div>`
    });
}

function agregarPeli(id) {
    console.log(id);
}

//Mostrar contenido del carrito
btnCart.addEventListener('click', () => {
    // cart.innerHTML = 
    // `<h1>Carrito</h1>
    // `
});