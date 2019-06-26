import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // required
  templateUrl: './app.component.html',
  // template: '<h2>Inline template</h2>', // required
  styleUrls: ['./app.component.css']
  // styles: ['h2 {color: red;}'] // optional
})
export class AppComponent {
  productName = "Samsung M30";
  productPrice = 40000;

  onSave() {
    console.log('product saved');
  }
}
