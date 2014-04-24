(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#click').click(makeArray);
  }

  function makeArray(){
    var array = $('#input').val().split(',').map(strip);
    array.forEach(makeDiv);
  }

  function strip(word){
    return word.trim();
  }

  function makeDiv(word){
    var $div = $('<div>');
    if(word.length % 2){ //odd
      $div.text(word.toUpperCase());
      $div.css('background-color', 'red');
    } else {
      $div.text(word.toLowerCase());
      $div.css('background-color', 'green');
    }
    $('.block').append($div);
  }



}());
