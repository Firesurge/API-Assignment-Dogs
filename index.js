'use strict';
let dogsearch = document.getElementById('dogsearch')

function getRandomDogImg(str) {
    fetch('https://dog.ceo/api/breeds/image/random/' + str)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Sorry! Something went wrong. Try Again later.'));
}

function submitForm() {
    $('form').submit('.button', event => {
        event.preventDefault();
        let val = dogsearch.value
        getRandomDogImg(val);
    });
}

$(function() {
    console.log('App is Up and running!');
    submitForm();
}); 

function displayResults(responseJson) {
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    $('.results').removeClass('hidden');
  }