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
        </div>
        <a data-id=${id} class="btn-imprimir">+</a>
        `;

    //const photoPrint = div.querySelector('.btn-imprimir');


    return div;
}