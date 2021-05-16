class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }
  
  //this is called a private function. We can use it as a helper function
  //inside of this class - the two underscores are called dunder prototypes
  __findMatchingIngredient(ingredients, targetIngredient) {
    return ingredients.find(ingredient => {
      return ingredient.id === targetIngredient.id;
    })
  }
  
  calculateCost(ingredientsData) {
    const totalCost = this.ingredients.reduce((acc, ingredient) => {
      //use the private findMatchingIng function to match the current
      //ingredient to the ingredient in the dataset
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData, 
        ingredient
      );
        // tally up the matching ingredient costs in cents
      acc += matchingIngredient.estimatedCostInCents;
        
      return acc;
    }, 0) / 100;
    return `$${totalCost}`;
  }
    
  returnIngredients(ingredientsData) {
    const completeIngredients = this.ingredients.reduce((acc, ingredient) => {
      //same thing as the above method, matching ingredient ids to the data
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData, 
        ingredient
      );
          
      //using Object.assign to merge the two objects of ingredients together

      //recipe datashape
      // { 
      //   id: 2047, 
      //   quantity: { amount: 0.5, unit: 'tsp' } 
      // }

      // ingredient datashape  
      // {
      //   id: 2047, 
      //   name: 'salt', 
      //   estimatedCostInCents: 280 
      // }

      //merged datashape  
      // {
      //   id: 2047, 
      //   quantity: { amount: 0.5, unit: 'tsp' } 
      //   name: 'salt', 
      //   estimatedCostInCents: 280 
      // }
      
      const mergedIngredient = Object.assign(matchingIngredient, ingredient);
      // use the spread operator to insert each merged ingredient 
      //into the acc array
      return [...acc, mergedIngredient];
    }, []);

    return completeIngredients;
  }

  returnInstructions() {
    const numberedInstructions = this.instructions.map(instruction => {
      return `${instruction.number}. ${instruction.instruction}.`
    })
    return numberedInstructions.join(' ');
  }

}


export default Recipe;