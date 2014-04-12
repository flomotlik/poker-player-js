
module.exports = {

  VERSION: "Default JavaScript folding player",
  RANKS: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],

  bet_request: function(game_state) {
    console.log("\n\n\nNew round")
    if (typeof(game_state) !== 'object') game_state = JSON.parse(game_state);

    players = game_state.players
    our_player = game_state.players[game_state.in_action]

    current_buy_in = game_state.current_buy_in
    console.log("buy in: " + current_buy_in);
    in_action = game_state.in_action
    console.log("in action: " + in_action);

    bet = our_player.bet

    console.log("bet: " + bet);

    hole_cards = our_player.hole_cards;
    minimum_raise = game_state.minimum_raise;
    console.log("minimumraise: " + minimum_raise);

    call = current_buy_in - bet;
    raise = call + minimum_raise;
    console.log("Call: " + call);
    console.log("Raise: " + raise);

    first_card = hole_cards[0];
    second_card = hole_cards[1];

    community_cards = game_state.community_cards
    community_card_length = community_cards.length
    pre_flop = ( community_card_length == 0);
    post_flop = !pre_flop;
    river = community_card_length == 5;
    console.log("Pre Flop: " + pre_flop);
    console.log("Community Card length: " + community_card_length);

    same_suits = first_card.suits == second_card.suits
    console.log("Same suits: " + same_suits);

    if(first_card.rank == second_card.rank) {
      console.log("Ranks are equal")
      return raise * 2;
    }

    if(pre_flop && same_suits){
      console.log("Preflop and same suits")
      return call;
    }

    if(post_flop && same_suits && this.same_suit_cards(first_card.suit, community_cards) >= 3){
      console.log("Post Flop Flush")
      return 100000000;
    }

    if(!river && same_suits && this.same_suit_cards(first_card.suit, community_cards) >= 2){
      console.log("Preflop with Flush chance")
      return raise;
    }

    if (this.RANKS.indexOf(first_card.rank) > 7 || this.RANKS.indexOf(second_card.rank) > 7){
      console.log("Both cards are > 9")
      return call;
    }

    return 0;
  },

  same_suit_cards: function(suit, community_cards){
    card_count = 0;
    community_cards.forEach(function(card){
      if(suit == card.suit){
        card_count++;
      }
    });
    console.log("Card Count: " + card_count);
    return card_count
  },

  showdown: function(game_state) {

  }
};
