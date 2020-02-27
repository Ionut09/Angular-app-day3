import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {
    price: 0,
    productName: '',
    category: 'SMARTPHONE'
  };

  @Output()
  onProductAdded: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addProduct(event) {
    this.onProductAdded.emit(this.product);
  }

  handleInputChange(event, key) {
    this.product[key] = event.target.value;
  }
}
