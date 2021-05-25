import './styles.css';
import { fetchData } from './apiCalls';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';
import RecipeCollection from '../src/classes/RecipeCollection';

const allRecipesSection = document.getElementById('allRecipes');
const userName = document.getElementById('userGreeting');
const recipeModal = document.getElementById('modal')
const recipeTags = document.getElementById('recipeTags');
const searchBar = document.getElementById('searchBar');
const favoriteRecipes = document.getElementById('myFavoriteRecipes');
const recipesToCook = document.getElementById('recipesToCook');
let currentUser, recipeCollection, ingredients, recipes;

window.addEventListener('load', onPageLoad);
recipeTags.addEventListener('click', filterUIByTag);
searchBar.addEventListener('keyup', searchNameOrIngredient);
favoriteRecipes.addEventListener('click', displayFavoriteRecipes);
recipesToCook.addEventListener('click', displayRecipesToCook);
allRecipesSection.addEventListener('click', determineRecipeClick);
recipeModal.addEventListener('click', determineModalClick);

const HEART_ICON =
  `https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png`;
const PLUS_ICON =
  `https://img.icons8.com/ios/50/000000/plus--v1.png`;
const CLOSE_ICON =
  `https://img.icons8.com/fluent-systems-regular/48/000000/x.png`;

function onPageLoad() {
  fetchData()
    .then(allData => {
      recipes = allData.recipes.map(recipe => {
        return new Recipe(recipe)
      });
      const randomUserIndex = Math.floor(Math.random() * allData.users.length);
      currentUser = new User(allData.users[randomUserIndex]);
      ingredients = allData.ingredients;
      recipeCollection = new RecipeCollection(recipes, ingredients);
      greetUser();
      renderRecipes(recipeCollection.recipes);
      renderFilterTags(recipeCollection);
    })
    .catch(err => displayPageLevelError());
}

function displayPageLevelError() {
  userName.innerHTML = `~ Follow us on IG ~ @rosemary&sage`
  allRecipesSection.innerHTML = `Ooops, we seem to be experiencing some
    technical difficulties!`
}

function greetUser() {
  userName.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}`
}

function renderRecipes(recipes) {
  const userFavorites = getUsersFavoriteIds();
  const recipeMarkup = recipes.map(recipe => {
    const isFavorite = userFavorites.includes(recipe.id);
    const favoriteClass = isFavorite ? 'active' : '';
    return ` <article id=${recipe.id}>
        <div class='recipe-card'>
          <img src=${recipe.image} class='recipe-img' alt='${recipe.name}'>
          <section class='recipe-card-bottom' id='recipeCardBottom'>
            <div class='favorite-heart' id='favoriteHeart'>
              <img
                src=${HEART_ICON}
                class='favorite-icon ${favoriteClass}'
                id='favoriteIcon' alt='heart icon'/>
            </div>
            <div class='add-to-cook' id='addToCook'>
              <img
                src=${PLUS_ICON}
                class='add-to-cook-icon'
                id='addToCookIcon' alt='plus icon'>
            </div>
          </section>
            <div class='view-recipe-text' id='viewRecipeText'>
            <p class='view-recipe' id='showRecipe'>${recipe.name}</p>
            </div>
         </article>`
  }).join('');

  allRecipesSection.innerHTML = recipeMarkup;
}

function getUsersFavoriteIds() {
  return currentUser.favoriteRecipes.map(recipe => {
    return recipe.id;
  })
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
    const [tagName, quantity] = tag;
    return `
      <div class='recipe-tag'>
        <input
          class='recipe-tag-input'
          type='radio'
          id="${tagName}"
          name="${tagName}"
          value="${tagName}">
        <label for="${tagName}">${tagName}
          <span class='recipe-tag-quantity'>  (${quantity})</span>
        </label>
      </div>`
  }).join('');

  const clearFilters = `
  <div class='clear-filters'>
    <button class='button' id='clearFilters'>Clear Filters</button>
  </div>`

  allFilters.innerHTML = tagMarkup + clearFilters;
}

function filterUIByTag(event) {
  if (event.target.type === 'radio') {
    event.target.className += ' clicked';
    const radioButtons = document.querySelectorAll('.recipe-tag-input.clicked');
    const radioButtonIds = [...radioButtons].map(button => {
      return button.id;
    })
    const recipes = recipeCollection.filterByTag(radioButtonIds);
    renderRecipes(recipes);
    return
  }
  event.preventDefault();
  if (event.target.id === 'clearFilters') {
    renderRecipes(recipeCollection.recipes);
    const radioButtons = document.querySelectorAll('.recipe-tag-input.clicked');
    radioButtons.forEach(button => {
      button.classList.remove('clicked');
      button.checked = false;
    });
  }
}

function determineRecipeClick(event) {
  if (event.target.className.includes('favorite-icon')) {
    if (event.target.className.includes('active')) {
      removeFromFavorites(event);
    } else {
      addToFavoritesList(event);
    }
  } else if (event.target.id === 'addToCookIcon') {
    addToCook(event);
  } else {
    const recipeId = parseInt(event.target.closest("article").id);
    const matchingRecipe = recipeCollection.recipes.find(recipe => {
      if (recipe.id === recipeId) {
        return recipe;
      }
    })
    displayRecipe(matchingRecipe)
  }
}

function displayRecipe(matchingRecipe) {
  const userFavorites = getUsersFavoriteIds();
  const isFavorite = userFavorites.includes(matchingRecipe.id);
  const favoriteClass = isFavorite ? 'active' : '';
  const matchingRecipeIng = matchingRecipe.returnIngredients(ingredients);
  const formattedIngredients = matchingRecipeIng.map(ingredient => {
    // eslint-disable-next-line max-len
    return `<br><strong>${ingredient.name}</strong> - ${ingredient.quantity.amount} ${ingredient.quantity.unit}</br>`
  }).join('');
  const matchingRecipeInst = matchingRecipe.returnInstructions()
  console.log("matchingRecipeInst ", matchingRecipeInst);
  const formattedInstructions = matchingRecipeInst.map(instruction => {
    return `<br><em>Step</em> ${instruction}</br>`
  }).join('')
  recipeModal.innerHTML = `
        <article class='modal-content' id='${matchingRecipe.id}'>
        <div class='x'>
          <div class='modal-icons'>
           <div class='favorite-heart' id='favoriteHeart'>
            <img
              src=${HEART_ICON}
              class='favorite-icon ${favoriteClass}'
              id='favoriteIcon' alt='heart-icon'/>
           </div>
           <div class='add-to-cook' id='addToCook'>
            <img
              src=${PLUS_ICON}
              class='add-to-cook-icon'
              id='addToCookIcon' alt='plus-icon'/>
           </div>
          </div>
         <img id='closeModal' src=${CLOSE_ICON} class='x-icon'/>
        </div>
          <div class='modal-header'>
            <img
              id="modalImg"
              src='${matchingRecipe.image}'
              alt="recipe image"
              class="modal-img">
            <h2
              class='modal-header'
              id='modalHeader'>${matchingRecipe.name}</h2>
          </div>
        <div class='modal-details'>
          <article class='all-modal-ing'>
           <div class='modal-ingredients'>
            <h3 class='ingredient-header'>Ingredients:</h3>
              <p
              class='ingredients'
              id='recipeIngredients'>${formattedIngredients}</p>
           </div>
           <div class='modal-cost'>
            <h3 class='cost-header'>Cost of Ingredients:</h3>
              <p
              class='total-cost'
              id='totalCost'>${matchingRecipe.calculateCost(ingredients)}</p>
           </div>
          </article>
          <article class='modal-instructions'>
           <div class='instructions-div'>
            <h3 class='instructions-header'>Instructions:</h3>
              <p
             class='instructions'
             id='instructions'>${formattedInstructions}</p>
           </div>
          </article>
         </div>
       </article>`
  openModal();
}

function openModal() {
  recipeModal.style.display = 'flex';
}

function determineModalClick(event) {
  if (event.target.id === 'closeModal') {
    recipeModal.innerHTML = '';
    recipeModal.style.display = 'none';
  } else if (event.target.className.includes('favorite-icon')) {
    if (event.target.className.includes('active')) {
      removeFromFavorites(event);
    } else {
      addToFavoritesList(event);
    }
  } else if (event.target.id === 'addToCookIcon') {
    addToCook(event);
  }
}

function addToFavoritesList(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  activate(event.target);

  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.addToFavorites(matchedRecipe);
}

function removeFromFavorites(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  deactivate(event.target);
  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.removeFromFavorites(matchedRecipe);
}

function addToCook(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.addToRecipesToCook(matchedRecipe);
}

function activate(element) {
  element.classList.add('active');
}

function deactivate(element) {
  element.classList.remove('active');
}

function searchNameOrIngredient(event) {
  const searchText = event.target.value;
  if (favoriteRecipes.innerHTML === 'Show All Recipes') {
    let favoriteResult = currentUser.findFavorites(searchText);
    renderRecipes(favoriteResult);
  } else {
    let nameResult = recipeCollection.filterByName(searchText);
    let ingredientResult = recipeCollection.filterByIngredient(searchText);
    let finalResult = [...nameResult, ...ingredientResult];
    renderRecipes([...new Set(finalResult)]);
  }
}

function displayFavoriteRecipes(event) {
  if (event.target.innerHTML === 'Show All Recipes') {
    renderRecipes(recipeCollection.recipes);
    favoriteRecipes.innerHTML = 'My Favorite Recipes';
  } else {
    favoriteRecipes.innerHTML = 'Show All Recipes';
    if (!currentUser.favoriteRecipes.length) {
      allRecipesSection.innerHTML = `
      <div class='favorites-text'>
        <p class='no-recipes'>Oh no! You have no favorites to display!</p>
      </div>`
    } else {
      renderRecipes(currentUser.favoriteRecipes);
    }
  }
}

function displayRecipesToCook(event) {
  if (event.target.innerHTML === 'Show All Recipes') {
    renderRecipes(recipeCollection.recipes);
    recipesToCook.innerHTML = 'My Recipes To Cook';
  } else {
    recipesToCook.innerHTML = 'Show All Recipes';
    if (!currentUser.recipesToCook.length) {
      allRecipesSection.innerHTML = `
      <div class='no-recipes-text'>
        <p class='no-recipes'>Add a few recipes to cook!</p>
      </div>`
    } else {
      renderRecipes(currentUser.recipesToCook);
    }
  }
}
