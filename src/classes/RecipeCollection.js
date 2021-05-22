class RecipeCollection {
  constructor(allRecipes, allIngredients) {
    this.recipes = allRecipes;
    this.ingredients = allIngredients;
  }

  filterByTag(tags) {
    const recipeMatches = this.recipes.reduce((searchedRecipes, recipe) => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          searchedRecipes.push(recipe)
        }
      })
      return searchedRecipes;
    }, [])
    return [...new Set(recipeMatches)];
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
