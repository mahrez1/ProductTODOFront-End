import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {
  product: Product = new Product(0, '', 0, false, '');
  imageUrl: File | null = null;

  constructor(private productService: ProductService) {}

  onSubmit() {
    if (this.imageUrl) {
      this.product.imageUrl = this.imageUrl.name; // Assign the name of the image file to the imageUrl property
      this.productService.addProduct(this.product, this.imageUrl)
        .subscribe(
          () => {
            // Success handling
            console.log('Product added successfully');
          },
          (error) => {
            // Error handling
            console.error('Failed to add product', error);
          }
        );
    } else {
      console.log('Please select an image file');
    }
  }
  

  onImageFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.imageUrl = event.target.files[0];
    }
  }
  
}
