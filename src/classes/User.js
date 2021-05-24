class User {
  constructor({name, id}) {
    this.name = name;
    this.id = id;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    };
  }

  removeFromFavorites(recipe) {
    this.favoriteRecipes = this.favoriteRecipes.filter(favRecipe => {
      if (favRecipe.id !== recipe.id) {
        return favRecipe;
      };
    });
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    };
  }

  filterByTag(tags) {
    const newFilterTags = typeof tags === "string" ? [tags] : tags;
    let filteredRecipes = [];
    newFilterTags.forEach(tag => {
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          filteredRecipes.push(recipe)
        };
      });
    });

    return [...new Set(filteredRecipes)];
  }

  findFavorites(nameOrIngredient) {
    const newSearchText = nameOrIngredient.toLowerCase();
    return this.favoriteRecipes.filter(recipe => {
      const stringifiedInstructions = recipe.instructions.map(item => {
        return item.instruction;
      }).join(' ').toLowerCase();

      return recipe.name.toLowerCase().includes(newSearchText) ||
        stringifiedInstructions.includes(newSearchText)
    });
  };
}

export default User;
