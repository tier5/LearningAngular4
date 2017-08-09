import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild( 'newRecipeName' ) newRecipeNameRef: ElementRef;
  @ViewChild( 'newRecipeAmount' ) newRecipeAmountRef: ElementRef;

  @Output() newIngredientAddedEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {

    const ingName = this.newRecipeNameRef.nativeElement.value;
    const ingAmount = this.newRecipeAmountRef.nativeElement.value;
    const ingredientAdded = new Ingredient( ingName, ingAmount);
    this.newIngredientAddedEmitter.emit(ingredientAdded);
  }

}
