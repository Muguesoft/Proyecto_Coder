import { popMessage } from "./helpers/sweetalert.js";
import { setPhotoData } from "./helpers/setPhotoDataCart.js";
import { pagar } from "./helpers/payCart.js";

export const apkCart = () => {
    
    // Recupera de localStorage si esta
    // un usuario logueado.
    let userLogged = JSON.parse(localStorage.getItem('userLogged'));
    
    // Recupera carrito de localStorage.
    let userCart = userLogged+'#Cart'
    let cart = JSON.parse(localStorage.getItem(userCart));

    // Si existe el carro cargado.
    if (cart) {
        // Filtra del carrito solo
        // los items con cantidad > 0.
        let photos = cart.filter(photo => photo.cantidad > 0)
        
        // Recupera ID root.
        let mainElement = document.getElementById('root');

        // Crea un elemento <section>
        let sectionElement = document.createElement('section');

        // Crea un elemennto <p> donde se mostrara el mail de usuario logueado.
        let pElement = document.createElement('p')
        pElement.className = 'p_logged';
        pElement.textContent = `Usuario: ${userLogged}`

        // Crea un elemento <h1>
        let h1Element = document.createElement('h1');
        h1Element.className = 'fotografia_hobby';
        h1Element.textContent = 'Fotografías seleccionadas para Impresión...';

        let div = document.createElement('div');
        div.setAttribute('class', 'contenedor_totales_y_boton');
        div.innerHTML =
            `
            <div class="contenedor_totales">
                <h4 class="pesos_subtotal">Subtotal: $</h4>
                <h4 class="pesos_iva">IVA (21%): $</h4>
                <h4 class="pesos_total">TOTAL: $</h4>
            </div>
            <button class="btn btn-primary boton_pagar">PAGAR</button>
            `;
        

        // Crea un elemento <div> con la clase "container-fotos"
        let divElement = document.createElement('div');
        divElement.className = 'contenedor_acerca_de_mis_favoritas';

        // Agrega el <p> al <section>
        sectionElement.appendChild(pElement);

        // Agrega el <h1> al <section>
        sectionElement.appendChild(h1Element);
    
        // Agrega el <div> con totales al <section>
        sectionElement.appendChild(div);

        // Agrega el <div> al <section>
        sectionElement.appendChild(divElement);

        // Agrega el <section> al <main>
        mainElement.appendChild(sectionElement);

        // Llama a funcion que procesa arrays de datos JSON
        // datos de array de fotos a imprimir.
        setPhotoData(divElement, photos);

        // Agrega evento a boton PAGAR.
        const bPagar = document.querySelector('.boton_pagar')
    
        // Defino un evento para Pagar.
        bPagar.addEventListener('click',pagar)

    } else {
        popMessage('Carrito Vacío...','error',false,3000)

        // Redirecciona a la pagina de favoritas
        // para ingresar fotos a imprimir.
        setTimeout(function() {
            // Cargar la página index.html
            location.href = "../pages/acercademisfavoritas.html";
          }, 3000);
    }
}