class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFromFavorites(recipe) {
    this.favoriteRecipes = this.favoriteRecipes.filter(favRecipe => {
      if (favRecipe.id !== recipe.id) {
        return favRecipe;
      }
    });
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  filterByTag(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(name) {
    const newSearchText = name.toLowerCase();
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(newSearchText)
    });
  }
}

export default User;