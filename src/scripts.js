import './styles.css';
import { fetchData } from './apiCalls';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';

const allRecipes = document.getElementById('allRecipes');

window.addEventListener('load', onPageLoad);


function onPageLoad() {
  fetchData().then(allData => {
    const recipes = allData.recipes.map(recipe => {
      return new Recipe(recipe)
    })
    //we can add logic here to pick a random user on startup
    const user = new User(allData.users[0]);
    const ingredients = allData.ingredients;
    console.log(ingredients)
    renderRecipes(recipes);
  });
}

// We're going to use this function any time we want to render recipes
// sometimes that will be a "users favorites" and other times it will be
// "filtered list". For now it's just going to be all the recipes
// when the page loads!
function renderRecipes(recipes) {
   //console.log("recipes ", recipes);
   const recipeMarkup = recipes.map(item => {
     return ` <article>
        <div class='recipe-card' id='recipeCard'>
          <img src=${item.image}>
          <section class='recipe-card-bottom' id='recipeCardBottom'>
            <div class='favorite-heart' id='favoriteHeart'>
              <img src="https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png"/>
            </div>
            <div class='view-recipe-text' id='viewRecipeText'>
              <p class='view-recipe' id='showRecipe'>${item.name}</p>
            </div>
            <div class='add-to-cook' id='addToCook'>
              <img src="https://img.icons8.com/ios/50/000000/plus--v1.png"/>
            </div>
         </article>`
   }).join('');

   allRecipes.innerHTML = recipeMarkup
  }

  //select recipe area
  //map over recipes to make markup/HTML
  //render on page with markup



























//
// User Stories for RecipeCollection/Recipe
// As a user, I should be able to view a list of all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by multiple tags.
// As a user, I should be able to search recipes by their name or ingredients.
