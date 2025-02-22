import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productCard',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
 @Input() products : any[] = []; //using @input to get value from Parent(appcomp) where we have the products array which consists of products
 //so AppComp sends the product array to productCard which is the child

 constructor(public dialog: MatDialog, private productService : ProductService) {} 
      deleteProduct(id: string, index : number){ // the id param is for backend deletion, while the index param is for UI deletion since the products are traversed using the index variable
        this.productService.deleteProduct(id).subscribe( () => {
          this.products.splice(index,1);
        });
      }
      //creating a modal for the edit option using angular material
      //creating a instance of MatDialog so it could be used in creating a dialog box / modal

      openEditDialog(index: number) {
        const dialogRef = this.dialog.open(EditProductDialogComponent, {
          width: '500px',
          data: { ...this.products[index] } // Pass a copy of the product at the given index
        });
      
        dialogRef.afterClosed().subscribe(updatedProduct => {
          if (updatedProduct) {
            // Updates the product in the products array
            this.productService.updateProduct(updatedProduct._id, updatedProduct).subscribe(
              (response) => {
                this.products[index] = response; // Update UI after successful edit
              }
        )}
            console.log(updatedProduct);
        });
      }
}
