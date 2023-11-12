import { objCart } from "../helpers/loadLocalStorageCart.js";

export const shopCart = (idPhoto,mas_sn,unitPrice) => {
    // Recupera el carrito de localStorage.
    let cart = objCart();
    let photo;

    // Recupera el usuario del LocalStorage.
    const user = JSON.parse(localStorage.getItem('userLogged'));
    const userCart = user+'#Cart'

    // Si no existe el carrito lo crea.
    if (!cart) {
        // Solo lo crea si es boton +
        // Boton - no tiene sentido.
        if (mas_sn) {
            // Recupera ID seleccionado y setea cantidad 1.
            photo = [{"id":idPhoto, "cantidad":1, "precio":unitPrice}];
            const photoStr = JSON.stringify(photo);
            localStorage.setItem(userCart, photoStr);
        }
    } else {
        // Si el carrito esta creado, busca el ID de la foto
        // en el array para sumar o restar segun corresponda.
        let busqueda = cart.findIndex((objeto) => objeto.id == idPhoto);
        
        if (busqueda === -1) {
            // Si no lo encuentra, agrega el array al localStorage
            let nuevaPhoto = {"id":idPhoto, "cantidad":1, "precio":unitPrice};
            cart.push(nuevaPhoto)
            localStorage.setItem(userCart, JSON.stringify(cart))
        } else {
            // Si lo encuentra evalua cantidades.
            let cant = cart[busqueda].cantidad

            if (mas_sn) {
                cant ++
            } else {
                cant --
            }
            
            // Actualiza localStorage con la 
            // cantidad actualizada siempre que sea >= 0.
            if (cant >= 0) {
                cart[busqueda].cantidad = cant
                localStorage.setItem(userCart, JSON.stringify(cart))
            }
        }
    }
}