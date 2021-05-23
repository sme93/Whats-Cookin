import './styles.css';
import { fetchData } from './apiCalls';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';
import RecipeCollection from '../src/classes/RecipeCollection';

const allRecipesSection = document.getElementById('allRecipes');
const userName = document.getElementById('userGreeting');
const recipeModal = document.getElementById('modal')
const recipeTags = document.getElementById('recipeTags');
const favoriteRecipe = document.querySelector('.favorite-icon');
let currentUser, recipeCollection, ingredients, recipe;

window.addEventListener('load', onPageLoad);
recipeTags.addEventListener('click', filterByTag);
allRecipesSection.addEventListener('click', () => {
  checkClickedRecipe(event);
})

function onPageLoad() {
  fetchData().then(allData => {
    recipe = allData.recipes.map(recipe => {
      return new Recipe(recipe)
    });
    const randomUserIndex = Math.floor(Math.random() * allData.users.length);
    currentUser = new User(allData.users[randomUserIndex]);
    ingredients = allData.ingredients;
    recipeCollection = new RecipeCollection(recipe, ingredients);
    greetUser();
    renderRecipes(recipeCollection.recipes);
    renderFilterTags(recipeCollection);
  });
}

function greetUser() {
  userName.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}`
}

function renderRecipes(recipes) {
  const recipeMarkup = recipes.map(recipe => {
    return ` <article id=${recipe.id}>
        <div class='recipe-card'>
          <img src=${recipe.image} class='recipe-img'>
          <section class='recipe-card-bottom' id='recipeCardBottom'>
            <div class='favorite-heart' id='favoriteHeart'>
              <img src='https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png' class='favorite-icon' id='favoriteIcon'/>
            </div>
            <div class='add-to-cook' id='addToCook'>
              <img src='https://img.icons8.com/ios/50/000000/plus--v1.png' class='add-to-cook-icon' id='addToCookIcon'/>
            </div>
          </section>
            <div class='view-recipe-text' id='viewRecipeText'>
            <p class='view-recipe' id='showRecipe'>${recipe.name}</p>
            </div>
         </article>`
  }).join('');

  allRecipesSection.innerHTML = recipeMarkup;
}

function renderFilterTags(recipeCollection) {
  const allFilters = document.getElementById('recipeTags');

  const recipeTags = recipeCollection.recipes.reduce((acc, recipe) => {
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

function filterByTag(event) {
  event.target.className += ' clicked';
  const radioButtons = document.querySelectorAll('.recipe-tag-input.clicked');
  const radioButtonIds = [...radioButtons].map(button => {
    return button.id;
  })
  const recipes = recipeCollection.filterByTag(radioButtonIds);
  renderRecipes(recipes);
 console.log("recipes ", recipes);
}

function checkClickedRecipe(event) {
  //instead of selecting the event.target.id, we are selecting the closest HTML
  //article element to our event.target. This will give us the recipe.id
  //every time.
  if (event.target.className === 'favorite-icon') {
    debugger;
    addToFavoritesList(event);
  } else if (event.target.className.includes('active')) {
    removeFromFavorites(event);
  } else if (event.target.id === 'addToCookIcon') {
    addRemoveToCook(event);
  } else {
    const recipeId = parseInt(event.target.closest("article").id);
    //changed your filter to find since we wanted one recipe returned, not
    //an array with a recipe. Renamed to recipeInstance since it was
    //returning a recipe class instance
    const matchingRecipe = recipeCollection.recipes.find(recipe => {
      if (recipe.id === recipeId) {
        return recipe;
      }
    })
    displayRecipe(matchingRecipe)
  }
}

function displayRecipe(matchingRecipe) {
  recipeModal.innerHTML = `
        <div class='modal-content' id='modal${matchingRecipe.id}'>
          <img id='closeModal' src='https://img.icons8.com/fluent-systems-regular/48/000000/x.png' class='x-icon'/>
          <h2 class='modal-header' id='modalHeader'>${matchingRecipe.name}</h2>
          <div>
            <img id="modalImg" src='${matchingRecipe.image}' alt="recipe image" class="modal-img">
          </div>
          <article class='modal-details' id='modalDetails'>
            <h3 class='ingredient-header'>Ingredients</h3>
            <p class='ingredients' id='recipeIngredients'>ingredients</p>
            <h3 class='cost-header'>Total Cost of Ingredients</h3>
            <p class='total-cost' id='totalCost'>cost</p>
            <h3 class='recipe-instructions-header'>Instructions</h3>
            <p class='instructions' id='instructions'>instructions</p>
          </article>
          <div class='modal-icons'>
            <div class='favorite-heart' id='favoriteHeart'>
              <img src='https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png' class='favorite-icon' id='favoriteIcon'/>
            </div>
            <div class='add-to-cook' id='addToCook'>
              <img src='https://img.icons8.com/ios/50/000000/plus--v1.png' class='add-to-cook-icon' id='addToCookIcon'/>
            </div>
          </div>
        </div>`
  openModal();
}

function openModal() {
  recipeModal.style.display = 'flex';
}

function closeModal(event) {
  //used what you already set up to make the modal close work so I
  //can keep working
  if (event.target.id === 'closeModal') {
    recipeModal.innerHTML = '';
    recipeModal.style.display = 'none';
  }
}

function addToFavoritesList(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  activate(favoriteRecipe);
  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.addToFavorites(matchedRecipe);
  }

function removeFromFavorites(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  deactivate(favoriteRecipe);
  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.removeFromFavorites(matchedRecipe);
  }

function activate(element) {
  element.classList.add('active');
}

function deactivate(element) {
  element.classList.remove('active');
}
