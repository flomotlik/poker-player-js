player = require('../player.js')

describe("Same suits", function() {
  it("should return true if suits equal", function() {
    expect(player.same_suits({suit: "hearts"}, {suit: "hearts"})).toBeTruthy();
  })

  it("should return false if suits different", function() {
    expect(player.same_suits({suit: "hearts"}, {suit: "spade"})).toBeFalsy();
  })

  it("should return false if suit undefined", function() {
    expect(player.same_suits({}, {})).toBeFalsy();
  })

})
