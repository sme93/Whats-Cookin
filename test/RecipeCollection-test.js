import { expect } from 'chai';

import { recipeData } from '../src/data/recipes.js';
import { ingredientsData } from '../src/data/ingredients.js';
import RecipeCollection from '../src/classes/RecipeCollection';

let recipeCollection;

describe('Recipe Collection', () => {
  beforeEach(() => {
  recipeCollection = new RecipeCollection(recipeData, ingredientsData);
  });

  it('Should be a function', () => {
    expect(RecipeCollection).to.be.a('function');
  });

  it('Should store recipe data', () => {
    expect(recipeCollection.recipes).to.be.an('array')
  });

  it('Should filter recipes by one or more tags', () => {
    expect(recipeCollection.filterRecipe('antipasti').length).to.equal(9)
  });

  it('Should filter recipes based on name', () => {
    expect(recipeCollection.filterRecipe('Ambrosia Cupcakes').length).to.equal(1);
  });

  it('Should filter recipes based on an ingredient', () => {
    expect(recipeCollection.findRecipe('eggs').length).to.equal(13);
  });

})



// A RecipeRepository should hold onto all Recipe objects.
//
// It should have a parameter to take in recipe data.
// It should have methods to determine:
// A filtered list of recipes based on one or more tags.
// A filtered list of recipes based on its name or ingredients.
