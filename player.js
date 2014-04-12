
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
    if (typeof(game_state) !== 'object') game_state = JSON.parse(game_state);

    players = game_state.players
    our_player = game_state.players[game_state.in_action]
    console.log("our player: " + our_player);

    current_buy_in = game_state.current_buy_in
    console.log("buy in: " + current_buy_in);
    in_action = game_state.in_action
    console.log("in action: " + in_action);

    bet = our_player.bet

    console.log("bet: " + bet);

    hole_cards = our_player.hole_cards;
    minimum_raise = game_state.minimum_raise
    console.log("minimum raise: " + minimum_raise);

    raise = current_buy_in - bet + minimum_raise;

    console.log(raise);

    return raise;
  },

  showdown: function(game_state) {

  }
};
