import { expect } from 'chai';

import Recipe from '../src/classes/Recipe';
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients';

let recipe;


describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(recipeData[0]);
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should store its id', () => {
    expect(recipe.id).to.equal(recipeData[0].id);
  });
  
  it('should store its image', () => {
    expect(recipe.image).to.equal(recipeData[0].image);
  });

  it.only('should store its ingredients', () => {
    console.log(recipe.ingredients);
    expect(recipe.ingredients).to.equal(recipeData[0].ingredients);
  });

  it('should store its instructions', () => {
    expect(recipe.instructions).to.equal(recipeData[0].instructions);
  });

  it('should store its name', () => {
    expect(recipe.name).to.equal(recipeData[0].name);
  });

  it('should store its tags', () => {
    expect(recipe.tags).to.equal(recipeData[0].tags);
  });

  it('should be able to calulate the cost of a recipe', () => {
    const recipeCost = recipe.calculateCost();

    expect(recipeCost).to.equal();
  });

  it('should be able to return what ingredients are needed', () => {
    const returnedIngredients = recipe.returnIngredients();

    expect(returnedIngredients).to.deep.equal();
  });

  it('should be able to return the instructions to the recipe', () => {
    const recipeInstructions = recipe.returnInstructions();

    expect(recipeInstructions).to.equal();
  });

});    