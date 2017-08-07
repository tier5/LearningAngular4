import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[] = [
    new Recipe( 'Recipe Name', 'Recipe Description', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
