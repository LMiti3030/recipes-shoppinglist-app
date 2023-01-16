import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('A test recipe', 
    'This is simply a test', 
    'https://www.cookipedia.co.uk/wiki/images/4/47/Marmitako_%282%29_recipe.jpg'),
    new Recipe('Another test recipe', 
    'This is simply another test', 
    'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1352/20210517-Pasta-alla-Gricia-with-Lobster3002-v3-scaled-530x380-c.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
