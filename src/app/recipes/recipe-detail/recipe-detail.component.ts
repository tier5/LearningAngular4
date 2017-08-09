import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.modal';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeData: Recipe;
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
