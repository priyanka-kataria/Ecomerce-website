import { updateCartValue } from "./updateCartValue";


export let getCartProductFromLocal=()=>{
    let cartproducts= localStorage.getItem("cartProductLs");
    if(!cartproducts){
        return [];
    }
    
    cartproducts= JSON.parse(cartproducts);
    updateCartValue(cartproducts);
    return cartproducts;
}
