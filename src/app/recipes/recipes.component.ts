import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: { name: string, description: string, imagePath: string };
  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails( obj: { name: string, description: string, imagePath: string } ) {
    this.recipe = obj;
  }

}
