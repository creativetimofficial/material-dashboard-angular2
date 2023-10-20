import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category.model';
import { Product } from 'app/models/product.model';
import { CategoryService } from 'app/services/category/category.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { ProductService } from 'app/services/product/product.service';
// import { MatDialog } from '@angular/material/dialog';
// import { ImageCropperComponent } from '../image-cropper/image-cropper.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categoriesData: Category[] = [];
  product: Product = {
    name: '',
    categoryId: '',
    price: 0,
    description: '',
    imageURL: '',
    isActive: true
  };

  previewUrl: string | ArrayBuffer;

  // imageFileName: string;
  // imageBase64: string;
  // deleteImage = false;
  // existingImageUrl: string;

  constructor(private productsService: ProductService, private categoriesService: CategoryService, private notificationsService: NotificationService
    // private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.loadAllCategoriesData();
  }

  // get img(): string {
  //   if (this.imageBase64) {
  //     return this.imageBase64;
  //   }
  //   if (this.deleteImage) {
  //     return 'assets/img/empty-img.jpg';
  //   }

  //   return this.existingImageUrl ?? 'assets/img/empty-img.jpg';
  // }

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

  addProduct() {
    console.log(this.product);
    this.productsService.createProduct(this.product).subscribe(
      response => {
        console.log('Produit crée avec succès!', response);
        this.notificationsService.showSuccess("Produit crée avec succès!");
      },
      error => {
        console.error('Il y a eu une erreur lors de la création du produit', error);
        this.notificationsService.showError("Il y a eu une erreur lors de la création du produit");
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

  // openImageDialog(): void {
  //   const dialogRef = this.dialog.open(ImageCropperComponent, {
  //     maxHeight: '90vh'
  //   });
  //   dialogRef.afterClosed().subscribe((imgBase64: string) => {
  //     this.imageBase64 = imgBase64;
  //     this.imageFileName = new Date().getTime().toString() + '.png';
  //     this.deleteImage = false;
  //   });
  // }

  // deleteStoreImage(): void {
  //   this.existingImageUrl = null;
  //   this.deleteImage = true;
  //   this.imageBase64 = null;
  //   this.imageFileName = null;
  // }
}
