
'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
let player = 'X'
let over = false

const onStartNewGame = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

api.startNewGame(data)

  .then(ui.startNewGameSuccess)
  .catch(ui.startNewGameFailure)
}


const onBoxClick = function (event) {
  const box = $(event.target)
  if (box.text()) return
  const data = {
    game: {
      cell: {
        index: box.data('cell-index'),
        value: player
      },
      over: over
    }
  }
  box.css('background', 'transparent').text(player)
  api.updateGame(data)

  .then(ui.updateGameSuccess)
  .catch(ui.updateGameFailure)

  player = player === 'O' ? 'X' : 'O'
}




module.exports = {
  onStartNewGame,
  onBoxClick

}
