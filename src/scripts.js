import './styles.css';
import { fetchData } from './apiCalls';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';

const allRecipes = document.getElementById('allRecipes');
const userName = document.getElementById('userGreeting');
let currentUser;

window.addEventListener('load', onPageLoad);


function onPageLoad() {
  fetchData().then(allData => {
    const recipes = allData.recipes.map(recipe => {
      return new Recipe(recipe)
    });
    const randomUserIndex = Math.floor(Math.random() * allData.users.length);
    currentUser = new User(allData.users[randomUserIndex]);
    const ingredients = allData.ingredients;
    greetUser();
    renderRecipes(recipes);
    renderFilterTags(recipes);
  });
}

function greetUser() {
  userName.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}`
}

function renderRecipes(recipes) {
  const recipeMarkup = recipes.map(item => {
    return ` <article>
        <div class='recipe-card' id='recipeCard'>
          <img src=${item.image} class='recipe-img'>
          <section class='recipe-card-bottom' id='recipeCardBottom'>
            <div class='favorite-heart' id='favoriteHeart'>
              <img src="https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png"/>
            </div>
            <div class='add-to-cook' id='addToCook'>
              <img src="https://img.icons8.com/ios/50/000000/plus--v1.png"/>
            </div>
          </section>
            <div class='view-recipe-text' id='viewRecipeText'>
            <p class='view-recipe' id='showRecipe'>${item.name}</p>
            </div>
         </article>`
  }).join('');

  allRecipes.innerHTML = recipeMarkup;
}

function renderFilterTags(recipes) {
  const allFilters = document.getElementById('recipeTags');

  const recipeTags = recipes.reduce((acc, recipe) => {
    // {tagname: numberofTags}
    recipe.tags.forEach(tag => {
      if (acc[tag]) {
        acc[tag] += 1
      } else {
        acc[tag] = 1
      }
    })
    return acc;
  }, {});
  
  const tagMarkup = Object.entries(recipeTags).map(tag => {
    console.log(tag);
    const [tagName, quantity] = tag
    return `
      <div class='recipe-tag'>
        <input 
          class='recipe-tag-input' 
          type='radio' 
          id=${tagName} 
          name=${tagName} 
          value=${tagName}>
        <label for=${tagName}>${tagName} 
          <span class='recipe-tag-quantity'>  (${quantity})</span>
        </label>
      </div>`
  }).join('');

  allFilters.innerHTML = tagMarkup;
}

























//
// User Stories for RecipeCollection/Recipe
// As a user, I should be able to view a list of all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by multiple tags.
// As a user, I should be able to search recipes by their name or ingredients.
