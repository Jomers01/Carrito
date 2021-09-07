let carritoLocal = JSON.parse(localStorage.getItem("Carrito"));
const tablaCarrito = document.querySelector("#carrito");
let cantidad = 0;
let total = 0;

document.addEventListener("DOMContentLoaded", () => {

  if (carritoLocal == null) {
    tablaCarrito.innerHTML = "Carrito vacio";
  }else{
    carritoLocal.forEach((items) => {
      const { Titulo, Cantidad, Portada, Precio } = items;
  
      tablaCarrito.innerHTML += `<div class="detalles">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">Vista Previa</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Sub Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><a href="./detalleProducto.html"><img src="${Portada}" alt="" width="100px"></a></th>
                  <td>${Titulo}</td>
                  <td><input type="number" id="cant" min="0" class="cant" value="${Cantidad}" readonly></td>
                  <td>$${Precio} COP</td>
                  <td>$${Precio * Cantidad} COP</td>
                </tr>
            </table>
          </div>
      </div>`;
      total += (Precio  * Cantidad);
    });
  
    tablaCarrito.innerHTML += `<div class="compra">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Total $${total} COP</th>
          </tr>
        </thead>
      </table>
      <a href="../form.html"><button id="btn-carrito-alquilar" class="btn-carrito-alquilar btn btn-danger" onclick="monto()">Pagar</button></a>
      </div>`;
  }
});

function monto(){
  localStorage.setItem("Monto", total)
}