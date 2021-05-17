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

  findRecipe(ingredientInput) {
    const ingredientMatch = this.ingredients.find(ingredient => {
      if (ingredient.name === ingredientInput.toLowerCase()) {
        return ingredient
      }
    });
    const recipesWithIngredient = [];
    this.recipes.forEach(recipe => {
      return recipe.ingredients.filter(ingredient => {
        if (ingredient.id === ingredientMatch.id) {
          recipesWithIngredient.push(recipe.name)
        }
      });
    })
    return recipesWithIngredient
  }
}

export default RecipeCollection;
