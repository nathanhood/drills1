(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(go);
  }

  function go(){
    var temp = $('#input').val().split('-').map(strip);
    var sums = temp[0].split('+').map(strip).filter(isOdd);
    var prod = temp[1].split('*').map(strip).filter(isOdd);
    sums = sum(sums);
    prod = product(prod);
    div(sums);
    div(prod);
}

  function isOdd(num){
    return num % 2 === 1;
  }

  function sum(array){
    var total = 0;

    for(var i = 0; i < array.length; i++){
      total += parseInt(array[i]);
    }
    return total;
  }

  function product(array){
    var total = 1;

    for(var i = 0; i < array.length; i++){
      total *= parseInt(array[i]);
    }
    return total;
  }

  function strip(string){
    return string.trim();
  }

  function div(num){
    var $div = $('<div class="container">' + num + '</div>');
    $('body').append($div);
  }


}());
