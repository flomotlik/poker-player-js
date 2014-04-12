
module.exports = {

  VERSION: "Default JavaScript folding player",
  RANKS: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],

  bet_request: function(game_state) {
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

    if(first_card.rank == second_card.rank) {
      return raise * 2;
    }

    if (this.RANKS.indexOf(first_card.rank) > 7 || this.RANKS.indexOf(second_card.rank) > 7){
      return call;
    }

    return 0;
  },

  showdown: function(game_state) {

  }
};
