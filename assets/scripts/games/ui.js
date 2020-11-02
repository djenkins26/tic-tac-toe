'use strict'

const store = require('./../store')

const startNewGameSuccess = function (response) {
  store.game = response.game
  // store.player = 'X'
  $('#message').text('Player X goes first')
  $('#game-board').show()
  $('#game').show()
  $('#start-new-game').hide()
  $('.box').text('')
  $('#play-again').show()
  $('h2').hide()
}

const startNewGameFailure = function (error) {
  $('#message').text('Start new game failed, try again')
}

const updateGameSuccess = function (response) {
  store.game = response.game
}

const updateGameFailure = function (error) {
  $('#message').text('Try again')
}



const playNewGameSuccess = function (response) {
  store.game = response.game
  // store.player = 'X'
  $('#message').text('Start new game! Player X goes first')
  $('#game-board').show()
  $('#game').show()
  $('#start-new-game').show()
  $('.box').text('')
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
