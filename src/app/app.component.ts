import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductFormComponent],
template: `<app-product-form></app-product-form>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormReactif';
}
