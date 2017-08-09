import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.modal';
import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeData: Recipe;
  constructor( private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    for (const value of ingredients) {
      const newIng = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngredient(newIng);
    }
  }

}
