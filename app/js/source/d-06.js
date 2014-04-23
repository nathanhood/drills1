(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#lastThree').click(makeArray);
  }

  function makeArray(){
    debugger;
    var input = $('#input').val().split(',');
    var array = [];
    for(var i = (input[0] *1); i <= (input[1] *1); i++){
      array.push(i);
    }
    return array;
  }

  // function
  //
  // function div(x){
  //   var $div = $('<div>').append(x).addClass('div');
  //   $('.answers').append($div);
  // }
  //
  // function slice(x){
  //   return
  // }

}());
