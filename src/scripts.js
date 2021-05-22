import './styles.css';
import { fetchData } from './apiCalls';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';
import RecipeCollection from '../src/classes/RecipeCollection';

const allRecipesSection = document.getElementById('allRecipes');
const userName = document.getElementById('userGreeting');
const favorite = document.getElementById('favoriteHeart')
let currentUser, recipeCollection, ingredients, modal, recipe;

window.addEventListener('load', onPageLoad);
window.addEventListener('click', closeModal);
allRecipesSection.addEventListener('click', () => {
  displayRecipe(event);
})
favorite.addEventListener('click', checkFavorites)


function onPageLoad() {
  fetchData().then(allData => {
    recipe = allData.recipes.map(recipe => {
      return new Recipe(recipe)
    });
    const randomUserIndex = Math.floor(Math.random() * allData.users.length);
    currentUser = new User(allData.users[randomUserIndex]);
    recipeCollection = new RecipeCollection(allData.recipes, allData.ingredients);
    greetUser();
    renderRecipes(recipeCollection);
    renderFilterTags(recipes);
  });
}

function greetUser() {
  userName.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}`
}

function renderRecipes(recipeCollection) {
  const recipeMarkup = recipeCollection.recipes.map(item => {
    return ` <article>
        <div class='recipe-card' id='${item.id}'>
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

  allRecipesSection.innerHTML = recipeMarkup;
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



//I think this logic is correct but I cannot seem to get it to recognize the recipeData :(
function displayRecipe(event) {
  const recipeID = event.target.id;
  const matchingRecipe = recipeData.filter(recipe => {
    return recipe.id === parseInt(recipeId)
  })
  openModal(matchingRecipe)
}

function openModal(matchingRecipe) {
   modal = `<div class='modal' id='${matchingRecipe.id}'>
        <div class='modal-content' id='modalContent'>
          <img src='https://img.icons8.com/fluent-systems-regular/48/000000/x.png' class='x-icon'/>
          <h2 class='modal-header' id='modalHeader'>Recipe</h2>
          <div>
            <img id="modalImg" src=${matchingRecipe.image} alt="recipe image" class="modal-img">
          </div>
          <article class='modal-details' id='modalDetails'>
            <h3 class='ingredient-header'>Ingredients</h3>
            <p class='ingredients' id='recipeIngredients'>${matchingRecipe.returnIngredients()}</p>
            <h3 class='cost-header'>Total Cost of Ingredients</h3>
            <p class='total-cost' id='totalCost'>${matchingRecipe.calculateCost(ingredientsData)}</p>
            <h3 class='recipe-instructions-header'>Instructions</h3>
            <p class='instructions' id='instructions'>${matchingRecipe.returnInstructions()}</p>
          </article>
          <div class='favorite-heart' id='favoriteHeart'>
            <img src="https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png"/>
          </div>
          <div class='add-to-cook' id='addToCook'>
            <img src="https://img.icons8.com/ios/50/000000/plus--v1.png"/>
          </div>
        </div>
      </div>`
      modal.style.display = 'block';
    }

function closeModal(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}


function checkFavorites() {
  favorite.classList.add('active')

}








//
// User Stories for RecipeCollection/Recipe
// As a user, I should be able to view a list of all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by multiple tags.
// As a user, I should be able to search recipes by their name or ingredients.
