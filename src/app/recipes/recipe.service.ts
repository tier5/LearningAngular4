import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Ricotta Salad',
      'Yum Yum!',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Carrot', 1),
        new Ingredient('Potato', 1),
        new Ingredient('Meat', 1)
      ]
    ),
    new Recipe(
      'Eggplant',
      'Hum Hum',
      'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-01.jpg',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Fish', 1),
        new Ingredient('Meat', 1)
      ]

    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

}
