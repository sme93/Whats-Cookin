class RecipeCollection {
  constructor(recipeData) {
    this.recipes = recipeData;
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
        return recipe.ingredients.filter(ingredient => {
          return ingredient.name.toLowerCase().includes(formatSearch) ||
            recipe.name.toLowerCase().includes(formatSearch)
        });
      });
    }
  }

  export default RecipeCollection;
