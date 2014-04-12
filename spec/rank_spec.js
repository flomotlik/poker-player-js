player = require('../player.js')

describe("Same suits", function() {
  it("should return index 0 for card 2", function() {
    expect(player.card_rank({rank: "2"})).toBe(0);
  })

  it("should return index", function() {
    expect(player.card_rank({rank: "J"})).toBe(9);
  })
})
