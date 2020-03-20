const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', () => {
  let card, turn;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn("array", card);
  });
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });
  it('Turn should be instantiated with a card', () => {
    expect(turn.card).to.equal(card);
  });
  it('Turn should be instantiated with a guess', () => {
    expect(turn.guess).to.equal("array");
  });
})
