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

  it('Should store ingredient data', () => {
    expect(recipeCollection.ingredients).to.be.an('array')
  });

  it('Should filter recipes by one or more tags', () => {
    expect(recipeCollection.filterByTag('antipasti').length).to.equal(9)
  });

  it('Should filter recipes based on name', () => {
    expect(recipeCollection.filterByName('Ambrosia Cupcakes').length).to.equal(1);
  });

  it('Should filter recipes based on an ingredient', () => {
    expect(recipeCollection.filterByIngredient('eggs').length).to.equal(13);
  });
})
