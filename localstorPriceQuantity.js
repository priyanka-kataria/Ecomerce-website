import { getCartProductFromLocal } from "./getCartProduct";

export const LSpriceQuantity = ( id, price ) => {

    let arrLocalStorageProduct = getCartProductFromLocal();


    let existing = arrLocalStorageProduct.find( 
        (curr)=> curr.id===id
 
     );

    let quantity = 1; 
    if ( existing ) {
        console.log(existing.quantity)
        quantity = existing.quantity;
        price = existing.price;
    }
    // console.log( quantity, price )
    return { quantity, price };
}