describe("Apoker suite", function() {
  var player = require('../player.js')
  it("should find triple", function() {
    expect(player.has_triple([{rank: "2"}, {rank: "2"}, {rank: "2"}])).toBeTruthy();
  })

  it("should not find triple", function() {
    expect(player.has_triple([{rank: "3"}, {rank: "2"}, {rank: "2"}])).toBeFalsy();
  })
})
