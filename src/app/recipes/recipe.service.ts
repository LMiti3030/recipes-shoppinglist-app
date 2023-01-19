import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Marmitako',
      'This Basque tuna stew is bursting with flavor and is ready in less than an hour!',
      'https://www.cookipedia.co.uk/wiki/images/4/47/Marmitako_%282%29_recipe.jpg',
      [
        new Ingredient('Onions', 2),
        new Ingredient('Fish stoc', 2),
        new Ingredient('garlic', 3),
        new Ingredient('Red pepper', 1),
        new Ingredient('patato', 5),
      ]
    ),
    new Recipe(
      'Pasta Alla Gricia with Lobster',
      'Interesting combination',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1352/20210517-Pasta-alla-Gricia-with-Lobster3002-v3-scaled-530x380-c.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('Marine lobster tail meat', 5),
        new Ingredient('Pecorino Romano', 3),
        new Ingredient('Salt', 1),
        new Ingredient('Olive Oil', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes() {
    //return this.recipes; //it could be modified from outside
    return this.recipes.slice(); //returns copy of array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}


