import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'Recipe Name 1', 'Recipe Description 1', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg' ),
    new Recipe( 'Recipe Name 2', 'Recipe Description 2', 'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-01.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
