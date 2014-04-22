(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#equals').on('click', add);
  }

  function add(){
    var a = $('#input1').val() * 1;
    var b = $('#input2').val() * 1;
    $('.answer').append(a+b);
  }

}());
