//use localStorage to manage cart data
const addToDb = id=>{
    const quantity = localStorage.getItem(id);
    if(quantity){
      const newQuantiy =parseInt (quantity)+1;
      localStorage.setItem(id, newQuantiy)
    }
    else{
        localStorage.setItem(id,1);
    }
    
}

export{addToDb}