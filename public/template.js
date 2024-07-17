const productContainer= document.querySelector('#productContainer')
const productTemplate= document.querySelector("#productTemplate");
import { addToCart } from './addToCart';
import { homeToggle} from './homeToggle';

export const showProductContainer=(products)=>{
    if(!products){
        return false;
    }
    products.forEach((prodElem)=>{
        const { brand, category, description, id, image, name , price, stock}= prodElem;
        const productClone= document.importNode(productTemplate.content, true);

         productClone.querySelector("#cardvalue").setAttribute("id",`card${id}`);

         productClone.querySelector(".productName").textContent= name;
         productClone.querySelector(".categry").textContent= category;
         productClone.querySelector(".productStock").textContent= stock;
         productClone.querySelector(".description").textContent= description;
         productClone.querySelector(".ProdAct").textContent= `₹${price}`;
         productClone.querySelector(".discount").textContent= `₹${(price*3).toFixed(2)}`;

         productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
              homeToggle(event, id, stock);
         }) 
         productClone.querySelector(".AddCart").addEventListener("click",
            (event)=>{
                addToCart(event,id,stock);

            }
         );
         productContainer.append(productClone);

    })
} 

