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
  $('#play-again').show()
}

const startNewGameFailure = function (error) {
  $('#message').text('Start new game failed, try again')
}

let turn = false
const updateGameSuccess = function (response) {
  const player = turn ? 'X' : 'O'
  store.game = response.game
  $('#message').text("It's " + player + "'s turn!")
  return (turn = !turn)

}

const updateGameFailure = function (error) {
  $('#message').text('Try again')
}



const playNewGameSuccess = function (response) {
  store.game = response.game
  store.player = 'X'
  $('#message').text('Start new game! Player X goes first')
  $('#game-board').show()
  $('#game').show()
  $('#start-new-game').show()
  $('#start-new-game').on('submit', gameEvents.onStartNewGame)
  // $('#play-again').show()
}
const playNewGameFailure = function (error) {
  $('#message').text('Please try again')
}

const viewGamesPlayedSuccess = function (response) {
  $('#message').text(response.games.length)
}

const viewGamesPlayedFailure = function (error) {
  $('#message').text('Cannot view games, try again')
}

module.exports = {
  startNewGameSuccess,
  startNewGameFailure,
  updateGameSuccess,
  updateGameFailure,
  playNewGameSuccess,
  playNewGameFailure,
  viewGamesPlayedSuccess,
  viewGamesPlayedFailure

}
