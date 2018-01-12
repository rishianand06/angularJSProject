
import { Product } from './product';

export interface IProductService {

    addProduct(product: Product): void;

    updateProduct(updateProduct: Product): void;

    deleteProduct(pid: number): void;

    getProductById(pid: number): Product;

    getProducts(category?: string): Array<Product>;

    getCategories(): Array<String>;
}