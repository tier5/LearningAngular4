import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
    ) { }

  showRecipeDetails(recipeId: number) {
    // this.recipeService.selectedRecipeEmitter.emit(obj);
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
