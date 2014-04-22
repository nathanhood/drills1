(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#evensquare').click(makeArray);
  }

  function makeArray(){
    var array = $('#input').val().split(',');
  }

  function square(x){
    return x * x;
  }

  

}());
