class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  __findMatchingIngredient(ingredients, targetIngredient) {
    return ingredients.find(ingredient => {
      return ingredient.id === targetIngredient.id;
    });
  }

  calculateCost(ingredientsData) {
    const totalCost = this.ingredients.reduce((acc, ingredient) => {
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData,
        ingredient
      );
      acc += matchingIngredient.estimatedCostInCents;
      return acc;
    }, 0) / 100;

    return `$${totalCost}`;
  }

  returnIngredients(ingredientsData) {
    const completeIngredients = this.ingredients.reduce((acc, ingredient) => {
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData,
        ingredient
      );
      const mergedIngredient = Object.assign(matchingIngredient, ingredient);
      return [...acc, mergedIngredient];
    }, []);

    return completeIngredients;
  }

  returnInstructions() {
    const numberedInstructions = this.instructions.map(instruction => {
      return `${instruction.number}. ${instruction.instruction}.`
    });
    
    return numberedInstructions.join(' ');
  }
}

export default Recipe;
