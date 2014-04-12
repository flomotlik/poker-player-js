fs = require('fs')

describe("Apoker suite", function() {

  var mockObj = undefined;
  var player = undefined;

  beforeEach(function(){
    mockfile = fs.readFileSync('./spec/mock.js').toString()
    mockObj = JSON.parse(mockfile)
    player = require('../player.js');
  })

  it("should raise by the minimum", function() {
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
    expect(player.bet_request(mockObj)).toEqual(480)
  });

  it("should raise by three times of the minimum if double", function() {
    mockObj.players[mockObj.in_action].hole_cards = [
        {
            "rank": "J",
            "suit": "hearts"
        },
        {
            "rank": "J",
            "suit": "spades"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(1440)
  });

  it("should raise by four times if triplet", function() {
    mockObj.players[mockObj.in_action].hole_cards = [
        {
            "rank": "J",
            "suit": "hearts"
        },
        {
            "rank": "J",
            "suit": "spades"
        }
    ];
    mockObj.community_cards = [
        {
            "rank": "J",
            "suit": "hearts"
        }
    ];
    expect(player.bet_request(mockObj)).toEqual(1920)
  });

  it("should call if one card is a high card and call less than 50% of stack", function() {
    our_player = mockObj.players[mockObj.in_action]
    our_player.stack = 1000;
    mockObj.current_buy_in = 300;
    our_player.bet = 1;
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
    expect(player.bet_request(mockObj)).toEqual(299)
  });

it("should not call with high card if call more than 50% of stack", function() {
  our_player = mockObj.players[mockObj.in_action]
  our_player.stack = 1000;
  mockObj.current_buy_in = 500;
  our_player.bet = 0;
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
  expect(player.bet_request(mockObj)).toEqual(0)
});

it("should not call with high card if call more than 50% of stack", function() {
  our_player = mockObj.players[mockObj.in_action]
  our_player.stack = 1000;
  mockObj.current_buy_in = 500;
  our_player.bet = 0;
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
  expect(player.bet_request(mockObj)).toEqual(0)
});

it("should not call with high card and call more than 300", function() {
  our_player = mockObj.players[mockObj.in_action]
  our_player.stack = 1000;
  mockObj.current_buy_in = 301;
  our_player.bet = 1;
  mockObj.players[mockObj.in_action].hole_cards = [
      {
          "rank": "10",
          "suit": "hearts"
      },
      {
          "rank": "4",
          "suit": "spades"
      }
  ];
  expect(player.bet_request(mockObj)).toEqual(0)
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

it("should call if its the same suit at preflop", function() {
  mockObj.community_cards = [];
  mockObj.players[mockObj.in_action].hole_cards = [
      {
          "rank": "5",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      }
  ];
  expect(player.bet_request(mockObj)).toEqual(240)
});

it("should raise if >= 4 equal suits", function() {
  mockObj.players[mockObj.in_action].hole_cards = [
      {
          "rank": "5",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      }
  ];
  mockObj.community_cards = [
      {
          "rank": "K",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      }
  ];
  expect(player.bet_request(mockObj)).toEqual(480)
});

it("should raise if >= 4 equal suits", function() {
  mockObj.players[mockObj.in_action].hole_cards = [
      {
          "rank": "5",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      }
  ];
  mockObj.community_cards = [
      {
          "rank": "K",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      },
      {
          "rank": "7",
          "suit": "hearts"
      }
  ];
  expect(player.bet_request(mockObj)).toEqual(100000000)
});

it("should not raise if all cards on the table and no flush chance", function() {
  mockObj.players[mockObj.in_action].hole_cards = [
      {
          "rank": "5",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      }
  ];
  mockObj.community_cards = [
      {
          "rank": "K",
          "suit": "hearts"
      },
      {
          "rank": "6",
          "suit": "hearts"
      },
      {
          "rank": "7",
          "suit": "spades"
      },
      {
          "rank": "8",
          "suit": "spades"
      },
      {
          "rank": "9",
          "suit": "spades"
      }
  ];
  expect(player.bet_request(mockObj)).toEqual(0)
});

it("should not raise if all cards on the table and no flush chance", function() {
  our_player = mockObj.players[mockObj.in_action]
  our_player.bet = 151
  our_player.stack = 149
  expect(player.bet_request(mockObj)).toEqual(999999)
});


});
