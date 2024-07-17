let cartValueUpdate = document.querySelector('.fa-solid');


export const updateCartValue =(products)=>{

    // console.log(products.length);
  return  ( cartValueUpdate.innerHTML= Number(products.length));

 
}