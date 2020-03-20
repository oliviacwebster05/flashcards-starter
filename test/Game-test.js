const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });
})
