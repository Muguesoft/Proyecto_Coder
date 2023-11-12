import { popMessage } from "./sweetalert.js";
import { objCart } from "./loadLocalStorageCart.js";

export const pagar = () => {
    // Recupera el carrito del LocalStorage.
    let cart = objCart();

    // Busca el primer objeto en el array con 
    // cantidad > 0.
    let busqueda = cart.findIndex((objeto) => objeto.cantidad > 0);
        
    if (busqueda === -1) {
        popMessage('No hay fotografías con cantidad mayor a 0 para imprimir...','error',false,3000)
    } else {
        popMessage('GRACIAS POR SU COMPRA!\nPronto enviaremos sus impresiones...','success',false,4000)

        // Recupera el usuario del LocalStorage.
        const user = JSON.parse(localStorage.getItem('userLogged'));
        const userCart = user+'#Cart'

        // Vacio el carrito.
        localStorage.removeItem( userCart );

        // Carga la pagina principal a los 4 segundos.
        setTimeout(function() {
            // Cargar la página index.html
            location.href = "../index.html";
          }, 4000);
    }
}