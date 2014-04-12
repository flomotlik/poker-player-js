mockObj = require('./mock.js');
player = require('../player.js')

describe("Apoker suite", function() {
  it("test", function() {
    console.log(mockObj.toString());
    expect(player.bet_request(mockObj)).toEqual(480)
  });
});
