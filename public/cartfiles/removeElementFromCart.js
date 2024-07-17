import { getCartProductFromLocal } from "../getCartProduct";
import { updateCartValue } from "../updateCartValue";

export const removeCartElement = ( event, id, ) => {

    let localStorageProduct = getCartProductFromLocal();

    localStorageProduct = localStorageProduct.filter( ( curProd ) =>
        curProd.id !== id
    )
    console.log( localStorageProduct )
    localStorage.setItem( "cartProductLs", JSON.stringify( localStorageProduct ) );

    let divRemove=  document.querySelector(`#card${id}`);
    divRemove.remove();
   updateCartValue(localStorageProduct);
}