class RecipeCollection {
  constructor(allRecipes, allIngredients) {
    this.recipes = allRecipes;
    this.ingredients = allIngredients;
  }

  filterByTag(searchTag) {
    const formatTag = searchTag.toLowerCase();
    return this.recipes.filter(recipe => {
      return recipe.tags.filter(tag => {
        return tag.includes(formatTag)
      })
    })
  }

  findRecipe(searchText) {
    const formatSearch = searchText.toLowerCase()
    return this.recipes.filter(recipe => {
        return this.ingredients.filter(ingredient => {
          return ingredient.name.includes(formatSearch) ||
            recipe.name.includes(formatSearch)
        });
      });
    }
  }

  export default RecipeCollection;
