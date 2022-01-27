import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart/cart.service';
import { FoodService } from '../service/food/food.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';
import { Food } from '../shared/model/Food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
 cart?: Cart

  constructor(private cartService: CartService,
  private foodService: FoodService) {
   let foods = foodService.getAll();
   this.setCart()
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    // @ts-ignore
    this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
    // @ts-ignore
    this.cartService.changeQuantity(cartItem.food.id,quantity)

  }


}
