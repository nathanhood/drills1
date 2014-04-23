(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#mateSum').click(makeArray);
  }

  function makeArray(){
    var input = $('#input').val().split(',');
    var array = [];
    for(var i = (input[0] * 1); i <= (input[1] *1); i++){
      array.push(i);
    }
    sortAddArray(array);
  }

  function sortAddArray(x){
    var sortSum = [];
    while(x.length > 1){
      var first = x.shift();
      var last = x.pop();
      var sum = first + last;
      sortSum.push(sum);
      if(x.length === 1){
        sortSum.push(x[0]);
      }
    }
    return sortSum.map(div);
  }

  function div(x){
    var $div = $('<div>').append(x).addClass('div');
    $('.answers').append($div);
  }


}());
