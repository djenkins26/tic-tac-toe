'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
const gameEvents = require('./games/events')
const onPlayNewGame = require('./games/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#start-new-game').on('submit', gameEvents.onStartNewGame)
  $('.box').on('click', gameEvents.onBoxClick)
  $('#view-games-played').on('submit', gameEvents.onViewGamesPlayed)
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('h2').hide()
  $('#start-new-game').hide()
  $('#game').hide()
  $('#game-board').hide()
  $('#play-again').hide()
  $('#view-games-played').hide()
})
