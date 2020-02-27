import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondAppAngularTs';

  productList: any[] = [];

  onProductAddedHandler(product) {
    console.log(product);
    // this.productList.push({...product}); echivalent cu
    this.productList.push(Object.assign({}, product));
  }

}
