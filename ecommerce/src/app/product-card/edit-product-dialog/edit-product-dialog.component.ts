import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveChanges() {
    this.dialogRef.close(this.data); // Pass updated data back
  }
  isFormValid(): boolean {
    return this.data?.name?.trim() !== '' && this.data?.price !== null && this.data?.quantity !== null;
  }
  
}
