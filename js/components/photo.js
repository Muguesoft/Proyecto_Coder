import { handlePhotoPrint } from "./handlePhotoPrint.js";
import { handleCounter } from "./handleCounterPhotoPrint.js";

export const photoForm = (props) => {
    
    let { id, name, description, thumbnail, price } = props;

    let div = document.createElement('div');
    div.setAttribute('class', 'contenedor_item_acerca_de_mis_favoritas');
    div.innerHTML =
        `
        <img src=${thumbnail} alt="${description}">
        <div class="contenedor_impresion_foto">
            <h4>${name}</h4>
            <p>${description} - Precio impresión: $${price}</p>
            <p id = subtotal-${id}>Subtotal: $0 + IVA</p>
        </div>
        <a id = menos-${id} class="btn-imprimir-menos">-</a>
        <a id = mas-${id} class="btn-imprimir-mas">+</a>
        <p id = counter-${id} class="count-btn-imprimir">0</p>
        </div>
        `;

    const photoPrint = div.querySelector('.btn-imprimir-mas');
    const photoMinusPrint = div.querySelector('.btn-imprimir-menos');
    
    // Define eventos click.
    photoPrint.addEventListener('click', () => handlePhotoPrint(props));
    photoMinusPrint.addEventListener('click', () => handleCounter(props, false));

    return div;
}