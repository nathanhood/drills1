(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#exp').click(makeArray);
  }

  function makeArray(){
    var array = $('#input').val().split(',');
    array.forEach(powDiv);
  }

  function powDiv(x){
    var $div = $('<div>');
    $div.text(Math.pow(x, 4)).addClass('div');
    $('.answers').append($div);
  }

}());
