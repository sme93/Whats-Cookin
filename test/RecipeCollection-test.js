import { expect } from 'chai';

import { recipeData } from '../src/testData/recipes';
import { ingredientsData } from '../src/testData/ingredients';
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

  it('Should filter recipes by one tag', () => {
    expect(recipeCollection.filterByTag(['antipasti']).length).to.equal(2)
  });

  it('Should filter recipes by multiple tags', () => {
    expect(recipeCollection.filterByTag(['antipasti', 'sauce']).length).to.equal(3)
  });

  it('Should filter recipes based on name', () => {
    expect(recipeCollection.filterByName('Ambrosia Cupcakes').length).to.equal(1);
  });

  it('Should filter recipes based on an ingredient', () => {
    expect(recipeCollection.filterByIngredient('eggs').length).to.equal(3);
  });
})
