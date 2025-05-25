import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule ,NgIf} from '@angular/common';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})



export class ProductFormComponent {
  productForm: FormGroup;
  categories = ['Informatique', 'Électronique', 'Maison', 'Autre'];

  constructor(private fp: FormBuilder) {
    this.productForm = this.fp.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  get priceValue(): number {
    return this.productForm.get('price')?.value || 0;
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Produit créé :', this.productForm.value);
    }else {
      console.error('Erreeur, Formulaire invalide');
    }
  }

  onReset(): void {
    this.productForm.reset();
  }
}
