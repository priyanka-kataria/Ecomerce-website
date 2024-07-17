import { getCartProductFromLocal } from "./getCartProduct";
import { summary } from "./Summery";


export const CartIncrementDecrement = ( event, id, stock,price ) => {
    let currentCardElement = document.querySelector( `#card${ id }` );

    let productQuantity  = currentCardElement.querySelector(".productQuantity");
    let productprice  = currentCardElement.querySelector(".priceElem");
  
    let quantity = 1;
    let localStPrice= 0; 

    let arrLocalStorageProduct = getCartProductFromLocal();

    let existing= arrLocalStorageProduct.find((curprod)=> curprod.id===id)

    // productQuantity=Number(productQuantity);
    if(existing){
        quantity= existing.quantity;
       localStPrice= existing.price;
    }else{
        localStPrice= price;
        price=price;
    }
    if ( event.target.className === "cartIncrement" ) {
        if ( quantity < stock ) {
            quantity += 1;
        } else if ( quantity === stock ) {
            quantity = stock;
            localStPrice= price*stock;
        }
    }

    if ( event.target.className === "cartDecrement" ) {
        if ( quantity > 1 ) {
            quantity -= 1;
            
        }
    }
    localStPrice= price*quantity;

    let updateData = { id, price:localStPrice, quantity };
    updateData = arrLocalStorageProduct.map( ( curr ) => {

        return curr.id === id ? updateData : curr;
    } )
  

    localStorage.setItem( "cartProductLs", JSON.stringify( updateData ) );
    
    productQuantity.innerHTML = quantity;
    productprice.innerHTML= `₹${localStPrice.toFixed(2)}`;
    // console.log( quantity, "hello" );
  summary();
}
