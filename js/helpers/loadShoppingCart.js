import { numberFormated } from "./numericFormat.js";
import { objCart } from "./loadLocalStorageCart.js";

export const loadCart = () => {
    
    // Recupera el carrito del LocalStorage.
    let cart = objCart();

    // Si existe el carro cargado.
    if (cart) {
        let idPhoto;
        let cantidad;
        let idCounter;
        let contadorObj;
        let subtotalObj;
        let subtotal;
        let acumCant = 0;
        let price;
        let acumSubt = 0;
        let acumIVA = 0;

        cart.forEach(photo => {
            
            // Recupera valores para cada 
            //elemento del array.
            idPhoto = photo.id;
            cantidad = photo.cantidad;
            acumCant += cantidad;
            price = photo.precio;


            // Recupera de document el contador
            // de fotos a imprimir
            idCounter = `counter-${idPhoto}`;
            
            contadorObj = document.getElementById(idCounter);
            if (contadorObj) {
                contadorObj.textContent = cantidad;
            }

            subtotalObj = document.getElementById(`subtotal-${idPhoto}`);
            if (subtotalObj) {
                subtotal = numberFormated(cantidad * price);
                subtotalObj.textContent = `Subtotal: $${subtotal} + IVA`;    
            }
            
            acumSubt += cantidad * price;
            acumIVA += cantidad * price * 0.21;
        }); 

        // Inicializa el contador de elementos en el carrito
        document.getElementById("contador-carrito").textContent = acumCant;
        
        // Setea TOTALES A PAGAR.
        // SOLO CUANDO EL DOCUMENT ES EL CORRESPONDIENTE
        // AL HTML DEL CARRITO DE COMPRAS.
        let pesosSubtObj = document.querySelector(".pesos_subtotal")
        
        if (pesosSubtObj) {
            pesosSubtObj.textContent = `Subtotal: $${numberFormated(acumSubt)}`
            document.querySelector(".pesos_iva").textContent = `IVA (21%): $${numberFormated(acumIVA)}`
            document.querySelector(".pesos_total").textContent = `TOTAL: $${numberFormated(acumSubt + acumIVA)}`    
        }
    } else {
        document.getElementById("contador-carrito").textContent = 0;

        // Recorro todas las fotos y las setea en 0
        // la cantidad a imprimir.
        for (let l_i = 1; l_i <= 15; l_i++) {
            document.getElementById(`counter-${l_i}`).textContent = 0;
            document.getElementById(`subtotal-${l_i}`).textContent = 'Subtotal: $0 + IVA';
        }
    }
}
