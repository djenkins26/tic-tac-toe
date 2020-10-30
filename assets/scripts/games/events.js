
'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onStartNewGame = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

api.startNewGame(data)

  .then(ui.startNewGameSuccess)
  .catch(ui.startNewGameFailure)
}

let currentPlayer = 'X'


const onCheckWinner = function (event) {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[0] + ' wins!')
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[3] + ' wins!')
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[6] + ' wins!')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[0] + ' wins!')
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[1] + ' wins!')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[2] + ' wins!')
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[0] + ' wins!')
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {

    store.game.over = true

    $('#message').text('Player ' + store.game.cells[2] + ' wins!')
    // determine tie game
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '' )


  $('#message').text('Tie game, start a new game!')
}

const onPlayNewGame = function (event) {
  event.preventDefault()

  if (!store.game.over) {

  }

  const form = event.target
  const data = getFormFields(form)

// clear board
  $('.box').text('')




  api.playNewGame(data)
    .then(ui.playNewGameSuccess)
    .catch(ui.playNewGameFailure)
}

const onBoxClick = function (event) {
  event.preventDefault()
// prevent playing after someone wins
  if (store.game.over) {
    return onBoxClick
  }




  const box = $(event.target)
  box.text(currentPlayer)
  const cellIndex = box.data('cell-index')

  box.css('background', 'transparent').text(currentPlayer)
  box.css('pointer-events', 'none')

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
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
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
  onPlayNewGame,
  onViewGamesPlayed
}
