(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#exp').click(makeArray);
  }

  function makeArray(){
    var twoArrays = $('#input').val().split('-');
    var base = twoArrays[0].split(',');
    var power = twoArrays[1].split(',');
    divs(base,power);
  }

  function divs(x, y){
    for(var i = 0; i < x.length; i++){
      var $equation = $('<div>').append(x[i] + '<sup>' + y[i] + '</sup>').addClass('equation');
      var $result = $('<div>').append(Math.pow(x[i], y[i])).addClass('result');
      var $container = $('<div>');
      ($container).append($equation).append($result).addClass('container');
      $('.answers').append($container);
    }
  }

}());
