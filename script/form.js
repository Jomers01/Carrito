const from = document.getElementById('form');
const cont = document.getElementById('container');

from.addEventListener('submit', e =>{
    e.preventDefault()

    name = document.getElementById('nombre').value;
    pass = document.getElementById('contraseña').value;
    ci = document.getElementById('cedula').value;
    tel = document.getElementById('celular').value;
    email = document.getElementById('email').value;
    date = document.getElementById('reserva').value;
    hora = document.getElementById('hora').value;
    igr = document.getElementById('ingreso').value;
    metod = document.getElementById('metodo').value;

    viewCompra()
})

function viewCompra(){
    const value = localStorage.getItem("Monto");
    cont.innerHTML =
    `<div class="resumen">
    <h4>${name}</h4>
    <h4>${ci}</h4>
    <h4>Recoge en la fecha ${date} a las ${hora}</h4>
    <h4>Paga con ${metod}</h4>
    <hr>
    <h4>El valor a pagar es: <br>$ ${value} COP</h4>
    </div>
    `
}