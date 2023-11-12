import { popMessage } from "../helpers/sweetalert.js";
import { handleCounter } from "./handleCounterPhotoPrint.js";

export const handlePhotoPrint = (photo) => {
    const selectedPhoto = photo;

    // Hay usuario logeado?
    const userLog = JSON.parse(localStorage.getItem('userLogged'));

    if(userLog){ 
        handleCounter(selectedPhoto, true);
    } else {
        popMessage('Debe ingresar con un usuario registrado para poder comprar impresiones de fotografías','error',false,3000)
    }
}
