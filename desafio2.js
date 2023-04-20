const fs = require ('fs');
class ProductManager  {
    constructor () {

    this.path = './productoss.json';
    this.products= [];
}
static id = 0
addProduct = async ( title, description, price, thumbnail, stock) => {
   ProductManager.id++;
    const product0 ={ id : ProductManager.id,
        title,
    description,
    price, 
    thumbnail,
    stock,

    };
    this.products.push(product0)
    await fs.writeFile(this.path , JSON.stringify (this.products));
};
readProduct = async () => {
    let resultado = await fs.readFileSync(this.path, "utf-8")
return JSON.parse(resultado)
}
getProducts= async ()=> {
    let resultado2 = await this.readProduct()
    
return console.log (resultado2)    
    
    }
getProductsById = async(id) => {
        let resultado3 = await this.readProduct()
if (!resultado3.find(producto => producto.id === id)){
console.log ("Producto no encontrado")
} else{
console.log(resultado3.find(producto => producto.id === id))};
    }
deleteProductById = async (id) => {
    let resultado3 = await this.readProduct();
let productofilter = resultado3.filter(products => products.id !=id)

await fs.promises.writeFile(this.path , JSON.stringify (productofilter));
console.log ("Producto eliminado")
}
updateProducts = async ({id, ...product})=> {
await this.deleteProductById(id);
let productOld = await this.readProduct();
let productodificado = [ {id, ...product}, ...productOld];
await fs.promises.writeFile(this.path , JSON.stringify (productodificado));

};
}
const productos = new ProductManager();




//productos.getProducts();
//productos.getProductsById(4);
//productos.deleteProductById(1)
productos.updateProducts ({
    id: 2,
    title: 'de jean',
    description: 100,
    price: 100,
    thumbnail: 100}
);

