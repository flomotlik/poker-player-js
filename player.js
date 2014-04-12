
module.exports = {

  VERSION: "Default JavaScript folding player",
  RANKS: ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
  gamestate: null,

  bet_request: function(game_state) {
    console.log("\n\n\nNew round")

    if (typeof(game_state) !== 'object') game_state = JSON.parse(game_state);

    this.gamestate = game_state

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

    same_suits = this.same_suits(first_card, second_card)


    first_card_rank = this.card_rank(first_card)
    second_card_rank = this.card_rank(second_card)

    console.log("First rank: " + first_card.rank + ":" + first_card_rank)
    console.log("First rank: " + second_card.rank + ":" + second_card_rank)

    stack = our_player.stack

    console.log("Stack: " + stack)

    if(this.has_triple(hole_cards.concat(community_cards))){
      return raise * 4;
    }

    if(first_card.rank == second_card.rank) {
      console.log("Ranks are equal")
      if(first_card_rank > 7){
        return raise* 3
      }else{
        return raise
      }
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

    if ((first_card_rank > 8 && second_card_rank > 8) && call * 2 < stack ){
      console.log("Both cards are > 9")
      return raise * 2;
    }

    if ((first_card_rank > 7 || second_card_rank > 7) && call*2 < stack && call < 300){
      console.log("Both cards are > 7")
      return call;
    }

    if(our_player.stack < 150 && our_player.bet > 150){
      return 999999;
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

  has_triple: function(cards){
    is_triple = false
    this.RANKS.forEach(function(rank){
      rank_count = 0;
      cards.forEach(function(card){
        if(card.rank == rank){
          rank_count++;
        }
      })
      if(rank_count > 2){
       is_triple = true;
      }
    })

    return is_triple;
  },

  card_rank: function(card){
    return this.RANKS.indexOf(card.rank)
  },

  same_suits: function(first_card, second_card){
    first_suit = first_card.suit
    second_suit = second_card.suit
    same_suits = first_suit == second_suit && first_suit != undefined && second_suit != undefined
    console.log("Same suits: " + same_suits + " Suits: " + first_suit + ":" + second_suit);
    return same_suits;
  },

  showdown: function(game_state) {

  }
};
