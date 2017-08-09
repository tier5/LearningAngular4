import {EventEmitter, Output} from '@angular/core';

import { Recipe } from './recipe.modal';

export class RecipeService {

  @Output() selectedRecipeEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Recipe Name 1', 'Recipe Description 1', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg' ),
    new Recipe( 'Recipe Name 2', 'Recipe Description 2', 'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-01.jpg' )
  ];

  getRecipes() {
    return this.recipes;
  }

}
