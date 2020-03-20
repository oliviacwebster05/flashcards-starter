const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', () => {
  let game, deck, round;

  beforeEach(() => {
    game = new Game();
    card1 = new Card(data.prototypeData[0]);
    card2 = new Card(data.prototypeData[1]);
    card3 = new Card(data.prototypeData[2]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a new instance of Deck when game starts', () => {
    game.start()
    expect(deck).to.be.an.instanceof(Deck);
  });
  it('should create a new instance of Round when game starts', () => {
    game.start()
    expect(round).to.be.an.instanceof(Round);
  });
});
