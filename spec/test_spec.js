mockObj = require('./mock.js');
player = require('../player.js')

describe("Apoker suite", function() {
  it("should raise by twice of the minimum", function() {
    mockObj.players[mockObj.in_action].hole_cards = [
        {
            "rank": "6",
            "suit": "hearts"
        },
        {
            "rank": "6",
            "suit": "spades"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(960)
  });

  it("should call", function() {
    mockObj.players[mockObj.in_action].hole_cards = [
        {
            "rank": "K",
            "suit": "hearts"
        },
        {
            "rank": "6",
            "suit": "spades"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(240)
  });

  it("should fold if both are less than 10", function() {
    mockObj.players[mockObj.in_action].hole_cards = [
        {
            "rank": "5",
            "suit": "hearts"
        },
        {
            "rank": "6",
            "suit": "spades"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(0)
  });

});
