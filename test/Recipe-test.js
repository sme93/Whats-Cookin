import { expect } from 'chai';

import Recipe from '../src/classes/Recipe';
import { recipeData } from '../src/testData/recipes';
import { ingredientsData } from '../src/testData/ingredients';

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

  it('should store its ingredients', () => {
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

  it('should be able to calculate the cost of a recipe', () => {
    const recipeCost = recipe.calculateCost(ingredientsData);

    expect(recipeCost).to.equal('$59.21');
  });

  it('should be able to return what ingredients are needed', () => {
    const returnedIngredients = recipe.returnIngredients(ingredientsData);

    expect(returnedIngredients[0]).to.deep.equal({
      id: 20081,
      name: 'wheat flour',
      estimatedCostInCents: 142,
      quantity: { amount: 1.5, unit: 'c' }
    });
  });

  it('should be able to return each instruction in the recipe', () => {
    const recipeInstructions = recipe.returnInstructions();

    expect(recipeInstructions.length).to.equal(6);
  });

  it('should be able to return the instructions as an array', () => {
    const recipeInstructions = recipe.returnInstructions();

    expect(recipeInstructions).to.be.an('array');
  });
});
