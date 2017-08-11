import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingredientChange = new Subject<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient( 'Apple', 5),
    new Ingredient( 'Orange', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

}
