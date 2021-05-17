import { expect } from 'chai';

import User from '../src/classes/User';
import { recipeData } from '../src/data/recipes';

let user;

describe('User', () => {
  beforeEach(() => {
    user = new User(1, 'Rosemary');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });
  
})