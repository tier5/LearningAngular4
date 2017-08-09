import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild( 'newRecipeName' ) newRecipeNameRef: ElementRef;
  @ViewChild( 'newRecipeAmount' ) newRecipeAmountRef: ElementRef;

  constructor( private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  onAddItem() {

    const ingName = this.newRecipeNameRef.nativeElement.value;
    const ingAmount = this.newRecipeAmountRef.nativeElement.value;
    const newIngredient = new Ingredient( ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
