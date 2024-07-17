export const homeToggle =(event,id, stock)=>{
    const currentCardElement= document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    const prodQuantity= currentCardElement.querySelector(".prodQuantity");
    // console.log(prodQuantity);
    let quantity= parseInt(prodQuantity.getAttribute("data-quantity")) || 1;
    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity===stock){
            quantity=stock;
        }
    }
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
    }
    prodQuantity.innerHTML= quantity;
    prodQuantity.setAttribute("data-quantity", quantity);
    return quantity;
}
