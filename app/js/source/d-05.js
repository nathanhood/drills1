(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#evensquare').click(makeArray);
  }

  function makeArray(){
    debugger;
    var array = $('#input').val().split(',');
    return array.map(square).filter(isEven).map(div);
  }

  function square(x){
    return x * x;
  }

  function isEven(x){
    return x % 2 === 0;
  }

  function div(x){
    var $div = $('<div>').append(x).addClass('div');
    $('.answers').append($div);
  }

}());
