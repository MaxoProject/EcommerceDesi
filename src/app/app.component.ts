import { Component } from '@angular/core';
// import { ProductService } from './services/product.service';
import { CartAction } from './store/actions/cart.actions';
// import{MdSidenav} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent {
//Firebase Login and Signup
email: string;
password: string;

  public cart:any = [];
 
  public totalPrice: number;
  public totalQuantity: any;

  constructor(private cartStore: CartAction, public authService: AuthService) {}
  
signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}

login() {
  this.authService.login(this.email, this.password);
  this.email = this.password = '';    
}

logout() {
  this.authService.logout();
}
  // ngOnInit() {
  //   this.cartStore.getState().subscribe(res => {
  //     this.cart = res
  //     this.getTotalPrice()
  //   })
  // }

  // public cart = [];
  // public totalPrice: number;
  // public totalQuantity: number;
   public cartSubscription: Subscription;

  // constructor(private productService:ProductService, private cartStore: CartAction) {}

  removeProduct(product) {
    this.cartStore.removeFromCart(product)
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'DesiDine2Go',
      description: 'We Deliver Food In Minutes',
      amount: this.totalPrice * 100 
    });

  }

  getTotalPrice() {
    let totalCost: Array<number> = []
    let quantity: Array<number> = []
    let intPrice: number
    let intQuantity: number
    this.cart.forEach((item, i) => {
      intPrice = parseInt(item.price)
      intQuantity = parseInt(item.quantity)
      totalCost.push(intPrice)
      quantity.push(intQuantity)
    })
    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)
  }

  ngOnInit() { 
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products
      this.getTotalPrice()
    })
  }

  ngOnDestroy() { 
    this.cartSubscription.unsubscribe()
  }
  
// }
//   getTotalPrice() { 
//     let totalCost: Array<number> = []
//     let quantity: Array<number> = []
//     let intPrice: number
//     let intQuantity: number

//     this.cart.products.forEach((item, i) => {
//       intPrice = parseInt(item.price)
//       intQuantity = parseInt(item.quantity)
//       totalCost.push(intPrice)
//       quantity.push(intQuantity)
//     })
 
//     this.totalPrice = totalCost.reduce((acc, item) => {
//       return acc += item
//     }, 0)
//     this.totalQuantity = quantity.reduce((acc, item) => {
//       return acc += item
//     }, 0)

  // }


}

