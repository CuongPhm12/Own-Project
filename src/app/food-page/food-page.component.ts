import { Component, OnInit } from '@angular/core';
import {Food} from '../shared/model/Food';
import {FoodService} from '../service/food/food.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {CartService} from '../service/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food?: Food;
  constructor(private foodService:FoodService,
  private activatedRoute: ActivatedRoute,
              private cartService:CartService,
              private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
          this.food = foodService.getFoodById(params.id)
    })
  }
  ngOnInit(): void {
  }
addToCart(){
    // @ts-ignore
  this.cartService.addToCart(this.food);
    this.router.navigateByUrl('cart-page');

}
}
