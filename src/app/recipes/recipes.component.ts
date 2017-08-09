import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipe: { name: string, description: string, imagePath: string };
  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails( obj: Recipe ) {
    this.recipe = obj;
  }

}
