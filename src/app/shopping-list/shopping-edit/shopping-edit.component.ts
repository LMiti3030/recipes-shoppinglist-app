import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(){

  }

  onAddItem(){
   const newIngredient  = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
   console.log(newIngredient);
   this.ingredientAdded.emit(newIngredient);
   

  }

}
