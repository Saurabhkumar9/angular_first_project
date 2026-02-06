import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root' // Service is provided in the root injector
})
export class ProductService {
  // Static initial products
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
    { id: 3, name: 'Headphones', price: 199.99 },
    { id: 4, name: 'Tablet', price: 499.99 }
  ];

  constructor() {
    console.log('ProductService initialized with static data');
  }

  /**
   * Get all products
   */
  getProducts(): Product[] {
    return this.products;
  }

  /**
   * Add a new product
   */
  addProduct(product: Omit<Product, 'id'>): void {
    const newId = this.products.length > 0 
      ? Math.max(...this.products.map(p => p.id)) + 1 
      : 1;
    
    const newProduct: Product = {
      id: newId,
      ...product
    };
    
    this.products.push(newProduct);
    // console.log('Product added:', newProduct);
  }

  /**
   * Delete a product by ID
   */
  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log('Product deleted with ID:', id);
    }
  }

  /**
   * Get a product by ID
   */
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  /**
   * Update a product
   */
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      console.log('Product updated:', updatedProduct);
    }
  }
}