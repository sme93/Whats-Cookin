import { expect } from 'chai';
import RecipeCollection from '../src/classes/RecipeCollection';

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(RecipeCollection).to.be.a('function');
  });
})
