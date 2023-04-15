class ProductManager  {
    constructor () {

    this.products =[];
}
addProduct (id , title, description, price, thumbnail, stock) {
    const product ={ id : this.#nuevoId() + 1, 
        title,
    description,
    price, 
    thumbnail,
    stock,

    };
    this.products.push (product); 


}

#nuevoId (){ 
    let maxId = 0;
    this.products.map ((product)=>{
        if (product.id > maxId) maxId = product.id
    });
    return maxId;

}
getProducts () 
 { return this.products  }

getProductById  = (idProduct) => {
    const product = this.#getProduct(idProduct);
    if(product) {
        return product
    } else {
         console.log ('Not found');
    }
}
#getProduct(idProduct) {
    return this.products.find((product) => product.id === idProduct) }; 

}
const product1 = new ProductManager ();

 product1.addProduct (1, "remera hombre", "100% algodon", 1000,"sin imagen", 25 );
 console.log  (product1.getProducts());