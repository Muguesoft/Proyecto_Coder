import { photoForm } from "./photo.js"

export const photoContainer = (props) => {

    let { photographs } = props;

    let div = document.querySelector('.contenedor_acerca_de_mis_favoritas');

    photographs.forEach(foto => {
        const photo = photoForm(foto);
        div.append(photo);
    });

    return div;
}