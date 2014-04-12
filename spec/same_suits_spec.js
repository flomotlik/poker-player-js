player = require('../player.js')

describe("Same suits", function() {
  it("should compare suits", function() {
    expect(player.same_suits({suit: "hearts"}, {suit: "hearts"})).toBeTruthy();
  })

  it("should compare suits", function() {
    expect(player.same_suits({suit: "hearts"}, {suit: "spade"})).toBeFalsy();
  })
})
