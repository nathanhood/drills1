(function(){
  'use strict';

  var timer;
  var clock = 0;

  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
  }

  function start(){
    clearInterval(timer);
    timer = setInterval(function(){
      clock++;
      $('#display').text(clock);
    }, 1000);
  }

  function stop(){
    clearInterval(timer);
  }



}());
