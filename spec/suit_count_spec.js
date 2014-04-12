player = require('../player.js')

describe("Apoker suite", function() {
  it("should count the same suit cards", function() {
    community_cards = [
        {
            "rank": "4",
            "suit": "spades"
        },
        {
            "rank": "A",
            "suit": "hearts"
        },
        {
            "rank": "6",
            "suit": "hearts"
        }
    ];
    expect(player.same_suit_cards('hearts', community_cards)).toEqual(2);
  });
});
