import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'app/models/category.model';
import { Product } from 'app/models/product.model';
import { CategoryService } from 'app/services/category/category.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { ProductService } from 'app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsData: Product[] = [];
  categoriesData: Category[] = [];
  currentCategory: Category = {
    name: ''
  };
  category: Category = {
    name: ''
  };

  constructor(private productsService: ProductService, private router: Router, private categoriesService: CategoryService, private notificationsService: NotificationService) { }

  ngOnInit(): void {
    this.loadAllProductsData();
    this.loadAllCategoriesData();
  }

  loadAllProductsData(): void {
    this.productsService.getAllProducts().subscribe(
      response => {
        this.productsData = response;
        console.log('Produits récupérés avec succès!', response);
      },
      error => {
        console.error('Il y a eu une erreur lors de la récupération des produits', error);
      }
    );
  }

  loadAllCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe(
      response => {
        this.categoriesData = response;
        console.log('Catégories récupérées avec succès!', response);
      },
      error => {
        console.error('Il y a eu une erreur lors de la récupération des catégories', error);
      }
    );
  }

  getCategoryName(categoryId) {
    const category = this.categoriesData.find(cat => cat.id === categoryId);
    if (category) {
      return category.name;
    }
  }

  addCategory() {
    this.categoriesService.createCategory(this.category).subscribe(
      response => {
        console.log('Catégorie créée avec succès!', response);
        this.loadAllCategoriesData();
        this.notificationsService.showSuccess("Catégorie créée avec succès!");
        this.category.name = '';
      },
      error => {
        console.error('Il y a eu une erreur lors de la création de la catégorie', error);
        this.notificationsService.showError("Il y a eu une erreur lors de la création de la catégorie");
      }
    );
  }

  changeCurrentCategory(category: Category) {
    this.currentCategory = Object.assign({}, category);
  }

  updateCategory(currentCategory: Category) {
    this.categoriesService.updateCategory(currentCategory.id, currentCategory).subscribe(
      response => {
        console.log('Catégorie modifiée avec succès!', response);
        this.loadAllCategoriesData();
        this.notificationsService.showSuccess("Catégorie modifiée avec succès!");
      },
      error => {
        console.error('Il y a eu une erreur lors de la modification de la catégorie', error);
        this.notificationsService.showError("Il y a eu une erreur lors de la modification de la catégorie");
      }
    );
  }

  deleteCategory(category: Category) {
    this.categoriesService.deleteCategory(category.id).subscribe(
      response => {
        console.log('Catégorie supprimée avec succès!', response);
        this.loadAllCategoriesData();
        this.notificationsService.showSuccess("Catégorie supprimée avec succès!");
      },
      error => {
        console.error('Il y a eu une erreur lors de la suppression de la catégorie', error);
        this.notificationsService.showError("Il y a eu une erreur lors de la suppression de la catégorie");
      }
    );
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product.id).subscribe(
      response => {
        console.log('Produit supprimé avec succès!', response);
        this.loadAllCategoriesData();
        this.notificationsService.showSuccess("Produit supprimé avec succès!");
      },
      error => {
        console.error('Il y a eu une erreur lors de la suppression du produit', error);
        this.notificationsService.showError("Il y a eu une erreur lors de la suppression du produit");
      }
    );
  }

  navigateToCreateProduct() {
    this.router.navigate(['/admin/products/create-product']);
  }

  navigateToUpdateProduct(id) {
    this.router.navigate(['/admin/products/edit-product', id]);
  }
}
