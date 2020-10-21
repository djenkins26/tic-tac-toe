
'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
let over = false
const store = require('./../store')

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
        value: store.player
      },
      over: over
    }

    // const data = {
    //   gameOver: {
    //     cell: {
    //       index: box.data('cell-index'),
    //       value: store.player
    //     },
    //
    //   }

  }
  box.css('background', 'transparent').text(store.player)
  api.updateGame(data)

    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)


}
// const onGameOver = function (event) {
//   if (cell-index[0].textContent === 'X' &&
//       cell-index[1].textContent === 'X' &&
//       cell-index[2].textContent === 'X'
//   ) {alert('Winner')}
//
//   else if (
//     cell-index[3].textContent === 'X' &&
//       cell-index[4].textContent === 'X' &&
//       cell-index[5].textContent === 'X'
//   ) { alert('Winner')}
//   else if (
//     cell-index[6].textContent === 'X' &&
//       cell-index[7].textContent === 'X' &&
//       cell-index[8].textContent === 'X'
//   ) { alert('Winner')}
// }
//
// .then(ui.updateGameSuccess)
// .catch(ui.updateGameFailure)




module.exports = {
  onStartNewGame,
  onBoxClick

}
