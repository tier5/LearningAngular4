import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeDetailsEmitter = new EventEmitter<object>();

  recipes: Recipe[];

  constructor( private recipeServic: RecipeService) { }

  showRecipeDetails(obj: { name: string, description: string, imagePath: string }) {
    this.recipeDetailsEmitter.emit(obj);
  }

  ngOnInit() {
    this.recipes = this.recipeServic.getRecipes();
  }

}
