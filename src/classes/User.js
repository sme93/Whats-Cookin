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

  //const mockTagsArray = ['snack', 'dessert']
  //const mockFavRecipe = [
  //   {id: 1, tags: ['snack']}, 
  //   {id: 2, tags: ['dessert']}
  //   {id: 3, tags: ['not a tag']}
  // ]

  filterByTag(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findFavorites(nameOrIngredient) {
    const newSearchText = nameOrIngredient.toLowerCase();
    return this.favoriteRecipes.filter(recipe => {
      console.log("recipe ", recipe);
      const stringifiedInstructions = recipe.instructions.map(item => {
        return item.instruction;
      }).join(' ').toLowerCase();
      
      return recipe.name.toLowerCase().includes(newSearchText) || 
        stringifiedInstructions.includes(newSearchText)
    });
  }
}

export default User;


// [
//   { name: "jane", id: 4},
//   { name: "jack", id: 42}
// ]

// ["jane", "jack"]

