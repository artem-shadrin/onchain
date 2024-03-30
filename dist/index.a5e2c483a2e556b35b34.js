/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var burgerBtnEl = document.getElementById('burger-button');
  var burgerMenuEl = document.getElementById('burger-menu');
  burgerBtnEl.addEventListener('click', function () {
    burgerBtnEl.classList.toggle('active');
    burgerMenuEl.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
});
/******/ })()
;