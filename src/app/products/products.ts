import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  // Form model
  newProduct = {
    name: '',
    price: 0
  };
  
  // Product list
  products: any[] = [];
  
  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
    this.products = this.productService.getProducts();
  }
  
  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {
    this.productService.addProduct({
  name: this.newProduct.name,
  price: this.newProduct.price
});

      
      // Reset form
      this.newProduct = { name: '', price: 0 };
      
      // Refresh product list
      this.loadProducts();
    }
  }
  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }
}