import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientChange = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient( 'Apple', 5),
    new Ingredient( 'Orange', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

}
