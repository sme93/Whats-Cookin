const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/classes/Recipe');
const recipeData = require('../src/data/recipes');
const ingredientsData = require('../src/data/ingredients');

let recipe;

describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(recipeData[0], ingredientsData);
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should store its ingredients', () => {

  });

  it('should store its instructions', () => {

  });

  it('should store its name', () => {

  });

  it('should store its id', () => {

  });

  it('should store its tags', () => {

  });

  it('should store its ingredients data', () => {

  });

  it('should store its image', () => {

  });

  it('should be able to calulate the cost of a recipe', () => {

  });

  it('should be able to return what ingredients are needed', () => {

  });

  it('should be able to return the instructions to the recipe', () => {

  });

});    