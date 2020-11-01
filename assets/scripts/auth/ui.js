'use strict'

const store = require('./../store')

const signUpSuccess = function(response) {
  $("#message").text('Thanks for signing up ' + response.user.email)

}

const signUpFailure = function(error) {
  $("#message").text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  $("#message").text('You are now signed in ' + response.user.email)

  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#start-new-game').show()
  $('h2').show()
  $('#view-games-played').show()
}

const signInFailure = function (error) {
  $("#message").text('Sign in failed, try again')
}

const onChangePasswordSuccess = function () {
  $("#message").text('Changed password successfully')
}

const onChangePasswordFailure = function () {
  $("#message").text('Changed password failed, try agin')
}

const onSignOutSuccess = function () {
  $("#message").text('Signed out successfully')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignoutFailure = function () {
  $("#message").text('Sign out failed')
}




module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignoutFailure

}
