//use localStorage to manage cart data
const addToDb = id=>{
    // const quantity = localStorage.getItem(id);
    let shoppinCart;
    const getPrevCartData = localStorage.getItem('shopping-cart');
    if(getPrevCartData){
      shoppinCart = JSON.parse(getPrevCartData);
     
    }
    else{
      shoppinCart = {};
    }
    // add quantity
    const quantity =shoppinCart[id];
    if(quantity){
       const newQuantity = quantity+1;
       shoppinCart[id] = newQuantity;

      // const newQuantiy =parseInt (quantity)+1;
      // localStorage.setItem(id, newQuantiy)
    }
    else{
        // localStorage.setItem(id,1);
        shoppinCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppinCart));

}

export{addToDb}