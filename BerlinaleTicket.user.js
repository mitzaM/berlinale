// ==UserScript==
// @name         Berlinale ticket
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       mitzaM
// @match        https://www.eventim.de/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        var inputs = document.querySelectorAll('input[type=hidden].js-cc-amount-selection');
        inputs.forEach(function(input) {
            input.value = 1;
        });
        var add_cart = document.querySelectorAll('button[data-qa=TimeslotAddToShoppingCart1],button[data-qa=SeatAddToShoppingCart1],button[data-qa=AddToShoppingCart]')[0];
        if(add_cart) {
            add_cart.disabled = false;
            add_cart.classList.remove('disabled');
            add_cart.click();
        }
    }, false);
})();
