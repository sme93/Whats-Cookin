class RecipeCollection {
  constructor(allRecipes, allIngredients) {
    this.recipes = allRecipes;
    this.ingredients = allIngredients;
  }

  filterRecipe(searchInput) {
    const recipeMatches = this.recipes.reduce((searchedRecipes, recipe) => {
      if (recipe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      recipe.tags.includes(searchInput.toLowerCase()) ||
      recipe.ingredients.includes(searchInput.toLowerCase())) {
        searchedRecipes.push(recipe);
      }
      return searchedRecipes;
    }, [])
    return recipeMatches;
  }

//Finding the ingredient in ingredientData that matches the ingredient input
  findRecipe(ingredientInput) {
    const ingredientMatch = this.ingredients.find(ingredient => {
     if(ingredient.name === ingredientInput.toLowerCase()){
       return ingredient
     }
     });
    console.log(ingredientMatch)
//im getting an error that recipes.ingredients.id.includes is not a function -- not sure if Im accessing this wrong??
    const recipesWithIngredient = this.recipes.filter(recipe => {
      return recipe.ingredients.id.includes(ingredientMatch.id)
      });

    return recipesWithIngredient
  }
}

// recipeData = {
//   "id": 595736,
//   "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
//   "ingredients": [
//     {
//       "id": 20081,
//       "quantity": {
//         "amount": 1.5,
//         "unit": "c"
//       }
//     }

  export default RecipeCollection;
