(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var array = $('#input').val().split(',').map(strip);
    pow(array);
    console.log(array);
  }

  function strip(num){
    return num.trim();
  }

  function pow(array){
    var odd = $(array':nth-child(odd)');
      for(var i = 0; i < odd.length; i++){
        Math.pow(odd[i], 2);
      }
  }

  // function div(num){
  //   var cls = $(num':nth-child(odd)') ? 'odd' : 'even';
  //   return $('<div>').addClass(cls);
  // }
  //
  // function append(div){
  //   return $('.main').append(div);
  // }


}());
