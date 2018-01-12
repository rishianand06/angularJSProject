
import { Product } from './product';
import { Observable } from 'rxjs/Observable';

export interface IProductService {

    addProduct(product: Product): Observable<Number>;

    updateProduct(updateProduct: Product): Observable<Number>;

    deleteProduct(pid: number): Observable<Number>;

    getProductById(pid: number): Product;

    getProducts(category?: string): Array<Product>;

    getCategories(): Array<String>;
}