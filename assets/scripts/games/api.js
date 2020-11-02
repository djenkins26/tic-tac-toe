'use strict'

// {
//   "game": {
//     "cells": ["","","","","","","","",""],
//     "over": false,
//     "_id": "5e823ba98929cc4e95e2f5d9",
//     "owner": "5e82311c8929cc4e95e2f5d8",
//     "createdAt": "2020-03-30T18:34:17.772Z",
//     "updatedAt": "2020-03-30T18:34:17.772Z",
//     "__v": 0
//   }
// }
const store = require('./../store')

const config = require('./../config')

const startNewGame = function () {
  console.log('token:', store.user.token)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const playNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const viewGamesPlayed = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  startNewGame,
  updateGame,
  playNewGame,
  viewGamesPlayed
}
