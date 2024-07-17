import { getCartProductFromLocal } from "./getCartProduct";



export const summary = () => {
    let localStorageProduct = getCartProductFromLocal();
    let sumText = document.querySelector( ".productSubTotal" );
   let total = document.querySelector(".productFinalTotal");
    let initial=0;
    let sum = localStorageProduct.reduce( (accum,curElem ) => {
        let productp= parseInt(curElem.price) || 0;
       return accum+ productp;
    }, initial )
    sumText.innerHTML=`₹${sum}`;
    total.innerHTML= `₹${sum+50}`;
    
}
