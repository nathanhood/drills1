(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#click').click(makeArray);
  }

  function makeArray(){
    var array = $('#input').val().split(',');
    array.forEach(makeDiv);
  }

  function makeDiv(x){
    var $div = $('<div>');
    if(x.length % 2){ //odd
      $div.text(x.toUpperCase());
      $div.css('background-color', 'red');
    } else {
      $div.text(x.toLowerCase());
      $div.css('background-color', 'green');
    }
    $('.block').append($div);
  }



}());
