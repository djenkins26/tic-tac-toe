
'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onStartNewGame = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  currentPlayer = 'X'
  api.startNewGame(data)

    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
}

const onCheckWinner = function (event) {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[0] + ' wins!')
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[3] + ' wins!')
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[6] + ' wins!')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[0] + ' wins!')
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[1] + ' wins!')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[2] + ' wins!')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[0] + ' wins!')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {

    store.game.over = true
    $('#start-new-game').show()

    $('#message').text('Player ' + store.game.cells[2] + ' wins!')
    // determine tie game
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '' ) {

    store.game.over = true
    $('#start-new-game').show()
    $('#message').text('Tie game, start a new game!')
}
}

let currentPlayer = 'X'



// const onPlayNewGame = function (event) {
//   event.preventDefault()
//
//
//   const form = event.target
//   const data = getFormFields(form)
//
//   api.playNewGame(data)
//     .then(ui.playNewGameSuccess)
//     // .then({ store.player })
//     .catch(ui.playNewGameFailure)
// }

const onBoxClick = function (event) {
  event.preventDefault()
// prevent playing after someone wins
  if (store.game.over) {
    $('#message').text('Game is over, start a new game!')
    return onBoxClick
  }
  // prevent changing x and o
  if ($(event.target).text() === 'X') {
    $('#message').text('Invalid move, try again')
    return onBoxClick
  } else if ($(event.target).text() === 'O') {
    $('#message').text('Invalid move, try again')
    return onBoxClick
  }

  const box = $(event.target)
  box.text(currentPlayer)
  const cellIndex = box.data('cell-index')

  const data = {
    game: {
      cell: {
        index: cellIndex,
        value: currentPlayer
      },
      over: false
    }
}
api.updateGame(data)

    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
    .then(onCheckWinner)

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  $('#message').text("It's " + currentPlayer + "'s turn!")
}

const onViewGamesPlayed = function (event) {
  event.preventDefault()

  api.viewGamesPlayed()
    .then(ui.viewGamesPlayedSuccess)
    .catch(ui.viewGamesPlayedFailure)
}

module.exports = {
  onStartNewGame,
  onBoxClick,
  onCheckWinner,
  // onPlayNewGame,
  onViewGamesPlayed
}
