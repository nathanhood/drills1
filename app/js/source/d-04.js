(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#exp').click(makeArray);
  }

  function makeArray(){
    var twoArrays = $('#input').val().split('-');
    var base = twoArrays[0].split(',').map(strip);
    var power = twoArrays[1].split(',').map(strip);
    makeDivs(base,power);
  }

  function strip(str){
    return str.trim();
  }

  function makeDivs(x, y){
    for(var i = 0; i < x.length; i++){
      var $equation = $('<div>').append(x[i] + '<sup>' + y[i] + '</sup>').addClass('equation');
      var $result = $('<div>').append(Math.pow(x[i], y[i])).addClass('result');
      var $container = $('<div>');
      ($container).append($equation).append($result).addClass('container');
      $('.answers').append($container);
    }
  }

  // practice writing html strings and concatenating 

  // function createDivs(bases, exponents, results){
  //   var divs = [];
  //   for(var i = 0; i < bases.length; i++){
  //     var equation = '<div class="equation">' + x[i] + '<sup>' + y[i] + '</sup></div>';
  //     var results = '<div class="result"' + results + '</div>';
  //   }
  // }

}());
