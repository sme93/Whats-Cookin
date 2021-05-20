import './styles.css';
import { fetchData } from './apiCalls';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  fetchData().then(allData => {
    const recipes = allData.recipes.map(recipe => {
      return new Recipe(recipe)
    })
    //we can add logic here to pick a random user on startup
    const user = new User(allData.users[0]);
    renderRecipes(recipes);
  });
}

// We're going to use this function any time we want to render recipes
// sometimes that will be a "users favorites" and other times it will be
// "filtered list". For now it's just going to be all the recipes
// when the page loads!
function renderRecipes(recipes) {
  console.log("recipes ", recipes);
  //select recipe area
  //map over recipes to make markup/HTML
  //render on page with markup
}





