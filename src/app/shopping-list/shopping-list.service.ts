import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{


  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10)
  ];

  getIngredients() : Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // } //to many events
    this.ingredients.push(...ingredients); //spread operator = ... => transforms the array into a list that can be passed as a param
    this.ingredientsChanged.emit(this.ingredients.slice());
  }





}
