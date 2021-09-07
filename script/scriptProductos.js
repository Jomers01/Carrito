const URL_API = "https://jomers01.github.io/Carrito/scripts/data.json"
let ctg = "Cafeteria";
let objCart = [];
let res;
const div = document.querySelector('#productos');
const ctgA = document.querySelector('#cafeteria');
const ctgI = document.querySelector('#papeleria');


//Capturamos la API
document.addEventListener('DOMContentLoaded', ()=>{
    const ver = async(url) =>{
        const data = await fetch(url);
        res = await data.json();
        mostrarProductos()
    };
    ver(URL_API);
})

//Mostramos los items
function mostrarProductos(){

    if (localStorage.getItem('Categoria') != null) {
        ctg = localStorage.getItem('Categoria');
    }

    div.innerHTML = ''

    res.productos.forEach(it => {
        const {nombre, precio, img, id} = it;
        const div2 = document.createElement('div');
        div2.setAttribute('class', "items");

        if (ctg === "Cafeteria" && it.categoria === "cafeteria") {
            div2.innerHTML = 
                `<div class="card" style="width: 13rem; height: 19.6rem; background-color: transparent; border: none;">
                <a href="" class="img" id="${id}"><img src="${img}" class="card-img-top" alt=""></a>
                <div class="card-body">
                    <h5>${nombre}</h5>
                    <p>$ ${precio} COP</p>
                    <a href="" class="btn btn-primary" id="${id}" onclick="agregarCart(id)">Comprar</a><input id="cant" onblur="agregarCant(value)" type="number" class="cant" min="0" value="0">
                </div>
                </div>`
            div.appendChild(div2);

        }else if(ctg === "Papeleria" && it.categoria === "papeleria"){
            div2.innerHTML = 
                `<div class="card" style="width: 13rem; height: 19.6rem; background-color: transparent; border: none;">
                <a href="" class="img" id="${id}"><img src="${img}" class="card-img-top" alt=""></a>
                <div class="card-body">
                    <h5>${nombre}</h5>
                    <p>$ ${precio} COP</p>
                <a href="" class="btn btn-primary" id="${id}" onclick="agregarCart(id)">Comprar</a><input onblur="agregarCant(value)" id="cant" type="number" class="cant" min="0" value="0">
                </div>
                </div>`
            div.appendChild(div2);
        }
    });
}

//Carrrito
function agregarCart(id1) {
    if (localStorage.getItem("Carrito") == null) {
        localStorage.setItem("Carrito", objCart);
    }else{
        objCart = JSON.parse(localStorage.getItem("Carrito"));
    }
    res.productos.forEach( objeto => {

        const {id, img, precio} = objeto;
        if (id1 == id) {
            objCart.push({"Titulo": id, "Portada": img, "Precio": precio, "Cantidad": Number(cant)})

            localStorage.setItem('Carrito', JSON.stringify(objCart));  
        }
    });
}

function agregarCant(value){
    cant = value;
}

//Categorias
ctgA.addEventListener('click',() =>{
    localStorage.setItem('Categoria', "Cafeteria");
    window.location.reload();
})

ctgI.addEventListener('click',() =>{
    localStorage.setItem('Categoria', "Papeleria");
    window.location.reload();
})