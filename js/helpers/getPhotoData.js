import { photoContainer } from "../components/photo-container.js";
import { loadCart } from "./loadShoppingCart.js";

export const photoData = (divElement) => {
    
    fetch('../js/helpers/photoData.json')
    .then(response => {
        // Verificar si la respuesta es exitosa
        if (response.ok) {
          // Convertir la respuesta a un objeto JSON
          return response.json()
        } else {
          // Lanzar un error si la respuesta falla
          throw new Error('Algo salió mal')
        }
      })
    .then(data => {
        // Crea los DIVs usando la funcion photoContainer
        divElement.append(photoContainer({ photographs: data.photo }));

        loadCart();

    })
    .catch(error => {
        // Manejar el error
        return error
    })
}