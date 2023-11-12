import { loadCart } from "./loadShoppingCart.js";
import { popMessage } from "./sweetalert.js";

export const loginUsuario = () => {
        
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#password').value;

    if (email && pass){
        
        // Valida que exista la combinacion de mail y contraseña
        // Recupera desde LocalStorage.
        const datosUsuarios = JSON.parse(localStorage.getItem('usersData'));
        
        let l_pos_mail
        let l_pos_pass
            
        l_pos_mail = datosUsuarios.findIndex((usuarios) => usuarios.id.toLowerCase() === email.toLowerCase());
        l_pos_pass = datosUsuarios.findIndex((usuarios) => usuarios.pass === pass);
        
        if (l_pos_mail >= 0 && l_pos_pass >= 0 && l_pos_mail === l_pos_pass) {

            popMessage(`Bienvenido ${email}`,'success',true,3000);

            // Parrafo donde se muestra el usuario logueado.
            const pElement = document.querySelector('.p_logged')
            pElement.textContent = `Usuario: ${email}`

            // Cierra el modal usando jQuery
            $('#exampleModal').modal('hide');

            // Inserta en LocalStorage el usuario logeado.
            localStorage.setItem('userLogged', JSON.stringify(email));

            // Invisibilizo INGRESAR y Visibilizo CERRAR SESION
            const bIngresar = document.querySelector('.item-menu-ingresar')
            bIngresar.classList.toggle('invisible');
            
            const bCerrarSesion = document.querySelector('.item-menu-cerrar-sesion')
            bCerrarSesion.classList.toggle('invisible');

            // Carga carrito existente.
            loadCart();

        } else {
            popMessage('Los datos ingresados son incorrectos...','error',true,3000);
        }
    } else {
        popMessage('Complete los datos de mail y contraseña','error',true,3000);
    }

}