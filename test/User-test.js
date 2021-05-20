import { expect } from 'chai';

import User from '../src/classes/User';
import { recipeData } from '../src/testData/recipes';

let user;

describe('User', () => {
  beforeEach(() => {
    user = new User({name: 'Rosemary', id: 1});
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name', () => {
    expect(user.name).to.equal('Rosemary');
  });

  it('should have an id', () => {
    expect(user.id).to.equal(1);
  });

  it('should not have any favorite recipes by default', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should be able to add recipes to favoriteRecipes', () => {
    user.addToFavorites(recipeData[0]);

    expect(user.favoriteRecipes).to.deep.equal([recipeData[0]]);
  });

  it('should be able to remove recipes from favoriteRecipes', () => {
    user.addToFavorites(recipeData[0]);
    user.addToFavorites(recipeData[1]);
    user.addToFavorites(recipeData[2]);
    user.removeFromFavorites(recipeData[0]);

    expect(user.favoriteRecipes[0]).to.deep.equal(recipeData[1]);
  });

  it('should be able to add recipes to recipesToCook', () => {
    user.addToRecipesToCook(recipeData[0]);

    expect(user.recipesToCook.length).to.equal(1);
  });

  it('should not be able to add duplicate recipes to recipesToCook', () => {
    user.addToRecipesToCook(recipeData[0]);
    user.addToRecipesToCook(recipeData[0]);

    expect(user.recipesToCook.length).to.equal(1);
  });

  describe('filtering and searching favorited recipes', () => {
    beforeEach(() => {
      user.addToFavorites(recipeData[0]);
      user.addToFavorites(recipeData[1]);
    });

    it('should be able to filter through favoriteRecipes by one tag', () => {
      expect(user.filterByTag('snack'))
        .to.deep.equal([recipeData[0]]);
    });

    it('should be able to filter favoriteRecipes by multiple tags', () => {
      user.addToFavorites(recipeData[7]);

      expect(user.filterByTag(['snack', 'antipasti']))
        .to.deep.equal([recipeData[0], recipeData[7]]);
    });
  
    it('should be able to search favoriteRecipes by name', () => {
      expect(user.findFavorites('cookie')).to.deep.equal([recipeData[0]]);
    });

    it(`should be able to search favoriteRecipes, 
              without regard to capitalization`, () => {
      expect(user.findFavorites('PUDDING')).to.deep.equal([recipeData[0]]);
    });

    it('should be able to search favoriteRecipes by ingredient', () => {
      expect(user.findFavorites('apple slices')).to.deep.equal([recipeData[1]]);
    });
  });
});