import { Component, OnInit } from '@angular/core';
import {FoodService} from '../service/food/food.service';
import {Food} from '../shared/model/Food';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
foods: Food[] = [];
  constructor(private foodService: FoodService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params.searchTerm)
        { // @ts-ignore
          // this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
          this.foods=this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        }
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = this.foodService.getAll();
    })
  }

}
