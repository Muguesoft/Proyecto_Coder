import { shopCart } from "./shoppingCart.js"
import { loadCart } from "../helpers/loadShoppingCart.js"
import { numberFormated } from "../helpers/numericFormat.js"

export const handleCounter = (photo, mas) => {
    
    const idCounter = `counter-${photo.id}`
    
    let contadorObj = document.getElementById(idCounter)
    let subtotalObj = document.getElementById(`subtotal-${photo.id}`)

    let contadorInt = parseFloat(contadorObj.textContent)

    if (mas) {
        contadorInt ++
    } else {
        if (contadorInt > 0){
            contadorInt --
        }
    }

    contadorObj.textContent = contadorInt;
    
    let subtotal = numberFormated(contadorInt * photo.price)
    subtotalObj.textContent = `Subtotal: $${subtotal} + IVA`

    // Llamada a funcion que administra el carrito.
    shopCart(photo.id,mas,photo.price);

    loadCart();
}