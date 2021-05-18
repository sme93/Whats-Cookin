class RecipeCollection {
  constructor(allRecipes, allIngredients) {
    this.recipes = allRecipes;
    this.ingredients = allIngredients;
  }

  filterByTag(tag) {
    const recipeMatches = this.recipes.reduce((searchedRecipes, recipe) => {
      if (recipe.tags.includes(tag)) {
        searchedRecipes.push(recipe)
      }
      return searchedRecipes;
    }, [])
    return recipeMatches;
  }

  filterByName(input) {
    const recipesWithInput = this.recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(input.toLowerCase())
    })
    return recipesWithInput
  }

  filterByIngredient(input) {
    const ingredientMatch = this.ingredients.find(ingredient => {
      if (ingredient.name === input.toLowerCase()) {
        return ingredient
      }
    });
    const recipesWithInput = [];
    this.recipes.forEach(recipe => {
      return recipe.ingredients.filter(ingredient => {
        if (ingredient.id === ingredientMatch.id) {
          recipesWithInput.push(recipe.name)
        }
      });
    })
    return recipesWithInput
  }
}

export default RecipeCollection;
