'use strict'

const store = require('./../store')

const startNewGameSuccess = function (response) {
  store.game = response.game
  store.player = 'X'
  $('#message').text('Player X goes first')
  $('#game-board').show()
  $('#game').show()
  $('#start-new-game').hide()
  $('#player').show()
}

const startNewGameFailure = function (error) {
  $('#message').text('Start new game failed, try again')
}

const updateGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('it is ' + store.player + "'s turn!")
  store.player = store.player === 'O' ? 'X' : 'O'
}

const updateGameFailure = function (error) {
  $('#message').text('Try again')
}



module.exports = {
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure

}
