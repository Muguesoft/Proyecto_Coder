import { photoForm } from "../components/photo.js"
import { numberFormated } from "./numericFormat.js"

export const setPhotoData = (divElement, arrayPhotoSelected) => {
    
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

      // Crea un array con solo los ids 
      //del array pasado por argumento
      let ids = arrayPhotoSelected.map(function (elemento) { return elemento.id; });
      
      // Filtrar el array de datos JSON usando el array de ids
      let arrayFiltrado = data.photo.filter(function (elemento) { return ids.includes(elemento.id); });
            
      let div = document.querySelector('.contenedor_acerca_de_mis_favoritas');

      let idCounter = '';
      let contadorObj;
      let busqueda;
      let cantidad;
      let acumCant = 0;
      let acumSubt = 0;
      let acumIVA = 0;
      let subtotalObj;
      let subtotal = 0;

      // Para cada foto filtrada del carrito
      // Crea DIV correspondiente.
      arrayFiltrado.forEach(foto => {
          const photo = photoForm(foto);
          div.append(photo);

          idCounter = `counter-${foto.id}`;
          contadorObj = document.getElementById(idCounter);

          busqueda = arrayPhotoSelected.findIndex((objeto) => objeto.id == foto.id);
          cantidad = arrayPhotoSelected[busqueda].cantidad;
          
          contadorObj.textContent = cantidad;
          acumCant += cantidad;

          // Setea subtotal por foto.
          subtotalObj = document.getElementById(`subtotal-${foto.id}`)
        
          subtotal = numberFormated(cantidad * foto.price)
          subtotalObj.textContent = `Subtotal: $${subtotal} + IVA`

          // Acumula Subtotal y el IVA a PAGAR
          acumSubt += cantidad * foto.price;
          acumIVA += cantidad * foto.price * 0.21;

      });

      // Inicializa el contador de elementos en el carrito
      document.getElementById("contador-carrito").textContent = acumCant;

      // Setea TOTALES A PAGAR.
      document.querySelector(".pesos_subtotal").textContent = `Subtotal: $${numberFormated(acumSubt)}`
      document.querySelector(".pesos_iva").textContent = `IVA (21%): $${numberFormated(acumIVA)}`
      document.querySelector(".pesos_total").textContent = `TOTAL: $${numberFormated(acumSubt + acumIVA)}`
      

    })
    .catch(error => {
        // Manejar el error
        return error
    })
}