import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
    // this.recipeService.selectedRecipeEmitter.subscribe( (data: Recipe) => {
    //   this.recipe = data;
    // } );
  }
}
