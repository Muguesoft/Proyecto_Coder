import { popMessage } from "../helpers/sweetalert.js";

export const handlePhotoPrint = (photo) => {
    const selectedPhoto = photo;
    console.log(selectedPhoto);
    
    // Hay usuario logeado?
    const userLog = JSON.parse(localStorage.getItem('userLogged'));

    if(userLog){ 

        let globalItemCount = JSON.parse(localStorage.getItem('itemCount'));
        //console.log(globalItemCount)

        if (globalItemCount) {
            globalItemCount++
        } else {
            globalItemCount = 1
        } 

        localStorage.setItem('itemCount',globalItemCount)

        // Inicializa el contador de elementos en el carrito
        document.getElementById("contador-carrito").textContent = globalItemCount;

    } else {
        popMessage('Debe ingresar con un usuario registrado para poder comprar impresiones de fotografías','error',false,3000)
    }
    //const selectedMascotaDisplay = document.querySelector('#selected-mascota');
    //selectedMascotaDisplay.textContent= `Queres irte de paseo con ${mascota.name}`
}
