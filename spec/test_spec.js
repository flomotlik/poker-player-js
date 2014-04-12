mockObj = require('./mock.js');
player = require('../player.js')

describe("Apoker suite", function() {
  it("should raise by twice of the minimum", function() {
    mockObj.players[mockObj.in_action].hole_cards = [                         // The cards of the player. This is only visible for your own player
                                            //     except after showdown, when cards revealed are also included.
        {
            "rank": "6",                    // Rank of the card. Possible values are numbers 2-10 and J,Q,K,A
            "suit": "hearts"                // Suit of the card. Possible values are: clubs,spades,hearts,diamonds
        },
        {
            "rank": "6",
            "suit": "spades"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(960)
  });

  it("should call", function() {
    mockObj.players[mockObj.in_action].hole_cards = [                         // The cards of the player. This is only visible for your own player
                                            //     except after showdown, when cards revealed are also included.
        {
            "rank": "K",                    // Rank of the card. Possible values are numbers 2-10 and J,Q,K,A
            "suit": "hearts"                // Suit of the card. Possible values are: clubs,spades,hearts,diamonds
        },
        {
            "rank": "6",
            "suit": "spades"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(240)
  });
});
