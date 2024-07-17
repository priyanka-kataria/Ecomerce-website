import { getCartProductFromLocal } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocal();
export const addToCart = ( event, id, stock ) => {

    let arrLocalStorageProduct = getCartProductFromLocal();

    const currentProd = document.querySelector( `#card${ id }` );
    let quantity = currentProd.querySelector( ".prodQuantity" ).innerHTML;
    let price = currentProd.querySelector( ".ProdAct" ).innerHTML;
    price = Number( price.replace( "₹", "" ) );

    let existing = arrLocalStorageProduct.find(
        ( curr ) => curr.id === id

    );
    // console.log(existing.quantity);

    // Number(existing.quantity)
    if ( existing && quantity > 1 ) {

        quantity = Number( quantity ) + Number( existing.quantity );
        price = Number( price * quantity );
       
        console.log(price); 
        // console.log(quantity);

        let updateData = { id, price, quantity };
        updateData = arrLocalStorageProduct.map( ( curr ) => {

            return curr.id === id ? updateData : curr;
        } )
        // console.log(updateData);

        localStorage.setItem( "cartProductLs", JSON.stringify( updateData ) );

    }

    if ( existing ) {
        return false;
    }

    price = Number( price * quantity );
    quantity = Number( quantity );

    arrLocalStorageProduct.push( { id, price, quantity } );

    localStorage.setItem( "cartProductLs", JSON.stringify( arrLocalStorageProduct ) )

    updateCartValue( arrLocalStorageProduct );

}
// Number((updateCartValue).innerHTML)