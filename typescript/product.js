class Product {
    constructor(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}
class ProductRepository {
    constructor() {
        this.products = new Array();
    }
    addProduct(product) {
        product.id = this.products.length + 1;
        this.products.push(product);
    }
    updateProduct(updateProduct) {
        let index = this.products.findIndex((product) => {
            return product.id == updateProduct.id;
        });
        this.products.splice(index, 1, updateProduct);
    }
    deleteProduct(pid) {
        let index = this.products.findIndex((product) => {
            return product.id == pid;
        });
        this.products.splice(index, 1);
    }
    getProductById(pid) {
        let product = this.products.find((product) => {
            return product.id == pid;
        });
        return product;
    }
    getProducts(category = null) {
        return this.products.filter((product) => (category == null || product.category == category));
    }
    getCategories() {
        let categories = this.products.map((product) => product.category)
            .filter((cat, index, arr) => arr.indexOf(cat) == index)
            .sort();
        return categories;
    }
}
let repo = new ProductRepository();
repo.addProduct(new Product(0, "LG", "Mobile", "Smart Phone", 21222));
repo.addProduct(new Product(0, "Vivo", "Mobile", "Smart Phone", 18222));
repo.addProduct(new Product(0, "Samsung", "Mobile2", "Smart Phone", 21000));
console.log(JSON.stringify(repo.getProducts()));
repo.updateProduct(new Product(2, "Vivo", "Mobile", "Smart Phone", 18244));
console.log(JSON.stringify(repo.getProducts()));
console.log(JSON.stringify(repo.getProductById(1)));
//repo.deleteProduct(1);
console.log(JSON.stringify(repo.getProducts("Mobile2")));
console.log(JSON.stringify(repo.getCategories()));
