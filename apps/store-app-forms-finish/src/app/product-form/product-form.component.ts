import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage = false;
  @ViewChild('productForm', { static: false }) form: NgForm;

  constructor() { }

  ngOnInit() { }

  // m1() {
  //   this.form;
  // }

  // m2() {
  //   this.form;
  // }

  onSubmit() {
    console.log('form submitted.. form:', this.form);
    console.log('form data:', this.form.value);
    // form.reset();
  }
}
