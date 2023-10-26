import { photoForm } from "./photo.js"

export const photoContainer = (props) => {

    let { photographs } = props;

    
    //let section = document.createElement('section');
    //section.setAttribute('class', 'seccion-fotos')

    let div = document.querySelector('.contenedor_acerca_de_mis_favoritas');

    console.log(div)
    //div.setAttribute('class', 'contenedor_acerca_de_mis_favoritas')

    //section.appendChild(div);

    //document.body.appendChild(section);

    //console.log(section)

    photographs.forEach(foto => {
        const photo = photoForm(foto);
        div.append(photo);
    });

    return div;
}