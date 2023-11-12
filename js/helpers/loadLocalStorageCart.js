export const objCart = () => {
    
    // Recupera el usuario del LocalStorage.
    const user = JSON.parse(localStorage.getItem('userLogged'));

    // Recupera carrito de localStorage.
    let userCart = user+'#Cart'
    let cart = JSON.parse(localStorage.getItem(userCart));
    
    return cart;
}