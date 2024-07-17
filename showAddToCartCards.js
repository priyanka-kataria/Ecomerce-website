import products from './api/product.json';
import { CartIncrementDecrement } from './cartIncrementDecrement';
import { getCartProductFromLocal } from './getCartProduct';
import { LSpriceQuantity } from './localstorPriceQuantity';
import { removeCartElement } from './removeElementFromCart';
import { summary } from './Summery';




const CartTemplate = document.querySelector( "#productCartTemplate" );
const productCartContainer = document.querySelector( "#productCartContainer" )

let localStorageProduct = getCartProductFromLocal();


let filterProducts = products.filter( ( elem ) => {

    return localStorageProduct.some( ( curelem ) => curelem.id === elem.id );

} );

console.log( filterProducts );
const showCartProduct = ()=>{
   
    filterProducts.forEach( ( prodElem ) => {
        const { brand, category, description, id, image, name, price, stock } = prodElem;
        const productClone = document.importNode( CartTemplate.content, true );

        const lsActualData= LSpriceQuantity(id,price);

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector( ".categry" ).textContent = category;
        productClone.querySelector( ".productName" ).textContent = name;
        productClone.querySelector(".productQuantity").textContent= lsActualData.quantity;
        productClone.querySelector(".priceElem").innerHTML=`₹ ${lsActualData.price}`;

        productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
           CartIncrementDecrement(event, id,stock,price);

       }) 
    productClone.querySelector(".remove-to-cart-button").addEventListener("click",(event)=>{
        removeCartElement(event,id);
    }) 
    

        productCartContainer.append( productClone );
    } );

};

showCartProduct();

summary();

// console.log(filterProducts);