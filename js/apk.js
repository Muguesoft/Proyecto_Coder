import { photosdata } from "./helpers/data.js";
import { usersdata } from "./helpers/data.js";
import { photoContainer } from "./components/photo-container.js";
import { loginUsuario } from "./helpers/loginUser.js";
import { logoutUsuario } from "./helpers/logoutUser.js";

export const apk = () => {

    // Se utilizara el LocalStorage para almacenar los datos de los
    // usuarios previamente cargados.
    // Esta no es una buena practica //
    // SOLO SE HACE PARA USAR LOCALSTORAGE!
    const datosUsuarios = JSON.parse(localStorage.getItem('usersData'));

    // Si los datos de usuarios no estan almacenados los almacena.
    if(!datosUsuarios){
        localStorage.setItem('usersData', JSON.stringify(usersdata));    
    }
    
    // Recupera ID root.
    let mainElement = document.getElementById('root');

    // Creo Evento para ventana Modal de Login de Usuarios.
    const loginButton = mainElement.querySelector('.btn-login');
    loginButton.addEventListener('click',loginUsuario)

    // Crea un elemento <section>
    let sectionElement = document.createElement('section');

    // Crea un elemennto <p> donde se mostrara el mail de usuario logueado.
    let pElement = document.createElement('p')
    pElement.className = 'p_logged';

    // Crea un elemento <h1>
    let h1Element = document.createElement('h1');
    h1Element.className = 'fotografia_hobby';
    h1Element.textContent = 'Acerca de mis favoritas...';

    // Crea un elemento <div> con la clase "container-fotos"
    let divElement = document.createElement('div');
    divElement.className = 'contenedor_acerca_de_mis_favoritas';

    // Agrega el <p> al <section>
    sectionElement.appendChild(pElement);

    // Agrega el <h1> al <section>
    sectionElement.appendChild(h1Element);

    // Agrega el <div> al <section>
    sectionElement.appendChild(divElement);

    // Agrega el <section> al <main>
    mainElement.appendChild(sectionElement);

    // Hay un usuario logueado?
    const userLogged = JSON.parse(localStorage.getItem('userLogged'))
    const bIngresar = document.querySelector('.item-menu-ingresar')
    const bCerrarSesion = document.querySelector('.item-menu-cerrar-sesion')
    
    // Defino un evento para cerrar la sesion de usuario.
    bCerrarSesion.addEventListener('click',logoutUsuario)
    
    if (userLogged) {
        // Invisibilizo la opcion de INGRESAR.
        bIngresar.classList.toggle('invisible');

        // Parrafo donde se muestra el usuario logueado.
        const pElement = document.querySelector('.p_logged')
        pElement.textContent = `Usuario: ${userLogged}`

    } else {
        // Invisibiliza la opcion de cerrar sesion de la NAV-BAR.
        bCerrarSesion.classList.toggle('invisible');
    }

    // Crea las Card con las FOTOS dinamicamente.
    divElement.append(photoContainer({ photographs: photosdata }));
    
}