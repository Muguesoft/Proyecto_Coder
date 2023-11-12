import { photoForm } from "./photo.js"
import { loadCart } from "../helpers/loadShoppingCart.js";

export const photoContainer = (props) => {
    
    let { photographs } = props;

    let div = document.querySelector('.contenedor_acerca_de_mis_favoritas');

    photographs.forEach(foto => {
        const photo = photoForm(foto);
        div.append(photo);
    });

    // Llamada a funcion que recarga un
    // posible carrito de compras empezado
    // que se encuentre en localStorage.
    loadCart();

    return div;
}