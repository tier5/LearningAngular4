import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    } );
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    for (const value of ingredients) {
      const newIng = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngredient(newIng);
    }
  }

}
