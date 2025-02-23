import { Component,OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   /* name = '';
    price = '';
    quantity  = ''; */
    product = { 
      name: '', 
      price: null, 
      quantity: null
     };
    products: any[] = []; 
    filteredProducts : any[] = [];

    isFormValid() : boolean{
      return !!this.product.name && !!this.product.price && !!this.product.quantity;
    }


   /* ngOnInit() {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        this.products = JSON.parse(savedProducts);
      }
    } /*temporary fix remove it later*/

    constructor (private productService : ProductService){}

    ngOnInit() {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        this.filteredProducts = [...this.products];
      });
    }
   
   addProduct(){

    if (!this.isFormValid()) {
      alert('All fields are required!');
      return;
    }
    
    this.productService.addProduct(this.product).subscribe(response => {
      this.products.push(response);
    });
  }
    searchQuery : String = '';
    filterProducts(){
      if(!this.searchQuery.trim()){
        this.products =this.filteredProducts;
      }
      else{
        this.products = this.products.filter(product => 
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
    /*
      const newProduct = {
        name : this.name,
        price : this.price,
        quantity : this.quantity 
      };
      this.products.push(newProduct);
      console.log(this.products); 
      /*localStorage.setItem('products', JSON.stringify(this.products)); /*temporary fix remove it later*/
      /* 
      Instead of delcaring an array here itself and storing the data here, we can send it to backend and fetch the response 
      from backend and use that to display here. So data from backend will be stored in products which is then undergoes property
      binding like [products] = "products" so that the products can be used in the child component
      */
      
    /* 
    } */
  }
