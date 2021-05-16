class RecipeCollection {
  constructor(allRecipes, allIngredients) {
    this.recipes = allRecipes;
    this.ingredients = allIngredients;
  }

  filterByTag(searchTag) {
    const recipesWithTag = this.recipes.reduce((searchedRecipes, recipe) => {
      if (recipe.name.toLowerCase().includes(searchTag.toLowerCase()) ||
      recipe.tags.includes(searchTag.toLowerCase())) {
        searchedRecipes.push(recipe);
      }
      return searchedRecipes;
    }, [])
    return recipesWithTag;
  }


    findRecipe(searchText){
      let searchResult = this.recipesData.reduce((searchedRecipes, recipe) => {
        if (recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
        recipe.tags.includes(searchText.toLowerCase())) {
          searchedRecipes.push(recipe);
        }
        return searchedRecipes;
      }, [])
      return searchResult;
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
