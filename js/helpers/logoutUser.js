import { popMessage } from "./sweetalert.js";

export const logoutUsuario = () => {
    alert('logout')
    popMessage('Sesión de usuario finalizada','success',true,3000);

    // Parrafo donde se muestra el usuario logueado.
    const pElement = document.querySelector('.p_logged')
    pElement.textContent = ''
    
    // Invisibilizo CERRAR SESION y Visibilizo INGRESAR
    const bIngresar = document.querySelector('.item-menu-ingresar')
    bIngresar.classList.toggle('invisible');
    
    const bCerrarSesion = document.querySelector('.item-menu-cerrar-sesion')
    bCerrarSesion.classList.toggle('invisible');

    // Elimina el LocalStorage.
    localStorage.removeItem("userLogged");
}