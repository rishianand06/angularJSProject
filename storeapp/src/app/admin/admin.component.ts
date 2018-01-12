import { Component, Inject } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { Router } from "@angular/router";
import { IProductService } from "../model/iproduct.service";
import { Product } from "../model/product";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {

    public statusCode: Number;

    public productId: Number = null;

    public productForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required)
    });

    constructor(private router: Router,
        private authService: AuthService,
        @Inject('IProductService') private productService: IProductService) { }


    saveOrUpdate(): void {

        let product = this.productForm.value;

        if (this.productId == null) {

            this.productService.addProduct(product).subscribe((status) => {
                this.statusCode = status;
                this.productForm.reset();
            });
        } else {
            product.id = this.productId;

            this.productService.updateProduct(product).subscribe((status) => {
                this.statusCode = status;
                this.productForm.reset();
                this.productId = null;
            });
        }
    }


    getProductById(id: number): void {

        let oldProduct = this.productService.getProductById(id);

        this.productForm.setValue({
            name: oldProduct.name,
            category: oldProduct.category,
            description: oldProduct.description,
            price: oldProduct.price
        });

        this.productId = oldProduct.id;
    }

    get products(): Array<Product> {
        return this.productService.getProducts();
    }

    deleteProduct(id: number): void {
        this.productService.deleteProduct(id).subscribe(
            (status) => {
                this.statusCode = status;
            }
        );
    }

    public logout() {
        this.authService.logout();
        this.router.navigateByUrl("/");
    }
}