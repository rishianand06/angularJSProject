
import { Injectable } from "@angular/core";

import { Product } from "./product";
import { IProductService } from "./iproduct.service";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class ProductRestService implements IProductService {

    private products: Array<Product>;
    private baseUrl: string = "http://192.168.99.100:3500/products";

    constructor(private http: Http,
        private authService: AuthService) {

        this.products = new Array<Product>();
        this.asyncProducts();
    }

    private asyncProducts(): void {
        let ourheaders: Headers = new Headers({
            "Accept": "application/json"
        });

        let requestOptions: RequestOptions = new RequestOptions({
            headers: ourheaders
        });

        let observable: Observable<Response> = this.http.get(this.baseUrl, requestOptions);

        observable.subscribe(
            (response) => {
                this.products = response.json();
            }
        );
    }

    addProduct(product: Product): Observable<Number> {

        let ourheaders: Headers = new Headers({ "Content-Type": "application/json" });

        if (this.authService.token != null) {
            ourheaders.append("authorization", `Bearer<${this.authService.token}>`);
        }

        let requestOptions: RequestOptions = new RequestOptions({ headers: ourheaders });

        return this.http.post(this.baseUrl, product, requestOptions)
            .map((response) => {

                this.asyncProducts();
                return response.status;
            });

    }

    updateProduct(updateProduct: Product): Observable<Number> {

        let ourheaders: Headers = new Headers({ "Content-Type": "application/json" });

        if (this.authService.token != null) {
            ourheaders.append("authorization", `Bearer<${this.authService.token}>`);
        }
        let requestOptions: RequestOptions = new RequestOptions({ headers: ourheaders });

        return this.http.put(this.baseUrl + "/" + updateProduct.id, updateProduct, requestOptions)
            .map((response) => { 
                this.asyncProducts();
                return response.status; 
        });
    }

    deleteProduct(pid: number): Observable<Number> {

        let ourheaders: Headers = new Headers({});

        if (this.authService.token != null) {
            ourheaders.append("authorization", `Bearer<${this.authService.token}>`);
        }

        let requestOptions: RequestOptions = new RequestOptions({ headers: ourheaders });

        return this.http.delete(this.baseUrl + "/" + pid, requestOptions)
            .map((response) => { 
                this.asyncProducts();
                return response.status; 
            });
    }

    getProductById(pid: number): Product {

        let product: Product = this.products.find((product) => {
            return product.id == pid;
        });
        return product;
    }

    getProducts(category: string = null): Array<Product> {

        return this.products.filter((product) => (category == null || product.category == category));
    }
 
    getCategories(): Array<String> {

        let categories = this.products.map((product) => product.category)
            .filter((cat, index, arr) => arr.indexOf(cat) == index)
            .sort();
        return categories;
    }
}
