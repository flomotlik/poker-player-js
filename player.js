
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
    game_state = JSON.parse(game_state);

    players = game_state.players
    our_player = game_state.players[game_state.in_action]

    current_buy_in = game_state.current_buy_in
    in_action = game_state.in_action

    bet = our_player.bet

    hole_cards = our_player.hole_cards;

    minimum_raise = game_state.minimum_raise

    return game_state.current_buy_in - players[in_action][bet] + minimum_raise;
  },

  showdown: function(game_state) {

  }
};
