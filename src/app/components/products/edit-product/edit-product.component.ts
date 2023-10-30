import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'app/models/category.model';
import { Product } from 'app/models/product.model';
import { CategoryService } from 'app/services/category/category.service';
import { ProductService } from 'app/services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: string;
  product: Product = new Product();

  productData: Product;
  categoriesData: Category[] = [];
  previewUrl: string | ArrayBuffer;

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoriesService: CategoryService) { }

  ngOnInit(): void {
    this.loadProductData();
    // this.loadAllCategoriesData();
  }

  loadProductData() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      this.productService.getProductById(this.productId).subscribe(
        data => {
          this.product = data;
          console.log(this.product);

        },
        error => {
          console.error('There was an error!', error);
        }
      )
    });
  }

  loadAllCategoriesData() {
    this.categoriesService.getAllCategories().subscribe(
      data => {
        this.categoriesData = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
