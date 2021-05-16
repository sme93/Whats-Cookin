import { expect } from 'chai';

import { recipeData } from '../src/data/recipes.js';
import { ingredientsData } from '../src/data/ingredients.js';
import RecipeCollection from '../src/classes/RecipeCollection';

let recipeCollection;

describe('Recipe Collection', () => {
  beforeEach(() => {
  recipeCollection = new RecipeCollection(recipeData);
  });

  it('Should be a function', () => {
    expect(RecipeCollection).to.be.a('function');
  });

  it('Should take in recipe data and store in an array', () => {
    expect(recipeCollection.recipes).to.be.an('array')
  });

  it('Should filter recipes by one or more tags', () => {
    expect(recipeCollection.filterByTag('snack').length).to.equal(9)
  });

  it('Should filter recipes based on an ingredient', () => {
    expect(recipeCollection.findRecipe('eggs').length).to.equal(13);
  });

  it('Should filter recipes based on name', () => {
   expect(recipeCollection.findRecipe('Ambrosia Cupcakes').length).to.equal(1);
 });

})


// eggs 1123
// A RecipeRepository should hold onto all Recipe objects.
//
// It should have a parameter to take in recipe data.
// It should have methods to determine:
// A filtered list of recipes based on one or more tags.
// A filtered list of recipes based on its name or ingredients.
