//variables
const contP = document.getElementById('container-principal');
const contC = document.getElementById('cafeteria');
const cart = document.getElementById('carrito');
const btnCart = document.getElementById('btnCart');
const btnCafe = document.getElementById('cafe');
const btnPapel = document.getElementById('papel');

//Importamos los productos desde la data
import productos from './data.js'

//Cuando apenas se ejecute la pagina llamamos a que se muestre los articulos de la cafetería en pantalla
document.addEventListener('DOMContentLoaded', ()=>{
    mostarItemsCafeteria();
});

//Escuchar el evento click en el navbar para cambiar de comtenido
btnCafe.addEventListener('click', mostarItemsCafeteria);
btnPapel.addEventListener('click', mostarItemsPapeleria);

function agregar(id){
    console.log(id);
}

//Funcion para mostrar el contenido solo de la cafeteria 
function mostarItemsCafeteria(){
    //Limpiamos el contenedor
    contC.innerHTML= '';

    //Mostramos todos los productos del array
    productos.cafeteria.forEach(items=> {
        //Desectructuramos
        const { nombre, precio, img, id } = items;
        //Imprimimos
        contC.innerHTML += 
        `<div class="card" style="width: 12rem; margin-right: 20px; margin-top: 20px;">
            <img src="${img}" class="card-img-top" alt="item" id="img">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p>$ ${precio} COP</p>
            <a class="btn btn-primary" onclick="agregar(id)" id="${id}">Agregar al carrito</a>
            </div>
        </div>`
    });
}

//Funcion para mostrar el contenido solo de la papaleria 
function mostarItemsPapeleria(){
    //Limpiamos el contenedor
    contC.innerHTML= '';

    //Mostramos todos los productos del array
    if (true) {
        productos.papeleria.forEach(items=> {
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
}

//Mostrar contenido del carrito
btnCart.addEventListener('click', ()=>{
    // cart.innerHTML = 
    // `<h1>Carrito</h1>
    // `
});