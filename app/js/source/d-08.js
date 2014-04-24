(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.toggleDiv').click(changeColor);
  }

  function changeColor(){
    if($('.toggleDiv').hasClass('red')){
      $('.toggleDiv').removeClass('red');
      $('.toggleDiv').addClass('green');
    }else{
      $('.toggleDiv').removeClass('green');
      $('.toggleDiv').addClass('red');
    }
  }


}());
