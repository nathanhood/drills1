(function(){
  'use strict';

  $(document).ready(randomPos);
  $(document).ready(init);

  function init(){
    $('body').on('click', 'div', function(event){
      event.stopPropagation();
      $('div').removeClass('moveable');
      $(this).addClass('moveable');
    });
    $('body').on('keydown', move);
  }

  // function toggleMove(event){ //had to move inline (above) for 'stopProp' to work
  //   event.stopPropagation();
  //   $('div').removeClass('moveable');
  //   $(this).addClass('moveable');
  // }

  // function divPosition(){
  //   var bigTop = parseInt($('.big').css('top'));
  //   var bigLeft = parseInt($('.big').css('left'));
  //   var smallTop = parseInt($('.small').css('top'));
  //   var smallLeft = parseInt($('.small').css('left'));
  //
  //   if(bigTop > 10 && bigTop < 390){
  //     moveBig(event);
  //   } else if(bigLeft > 10 && bigLeft < 1034){
  //     moveBig(event);
  //   } else if(smallTop > 10 && smallTop < 320){
  //     moveSmall(event);
  //   } else if(smallLeft > 10 && smallLeft > 320){
  //     moveSmall(event);
  //   }
  //
  // }

  function move(event){
    var $selected = $('div.moveable');

    if(event >= 37 || event <= 40){
      event.preventDefault();
    }

    switch(event.keyCode){
    case 38:
      $selected.css('top', '-=10');
      break;
    case 40:
      $selected.css('top', '+=10');
      break;
    case 37:
      $selected.css('left', '-=10');
      break;
    case 39:
      $selected.css('left', '+=10');
      break;
    }
  }

  // function moveSmall(event){
  //   var $selected = $('div.moveable');
  //
  //   if(event >= 37 || event <= 40){
  //     event.preventDefault();
  //   }
  //
  //   switch(event.keyCode){
  //   case 38:
  //     $selected.css('top', '-=10');
  //     break;
  //   case 40:
  //     $selected.css('top', '+=10');
  //     break;
  //   case 37:
  //     $selected.css('left', '-=10');
  //     break;
  //   case 39:
  //     $selected.css('left', '+=10');
  //     break;
  //   }
  // }


  function randomPos(){
    var bigLeft = Math.floor(Math.random() * 1044);
    var bigTop = Math.floor(Math.random() * 400);
    $('.big').css('left', bigLeft + 'px');
    $('.big').css('top', bigTop + 'px');
    var smallDim = Math.floor(Math.random() * 330);
    $('.small').css('left', smallDim + 'px');
    $('.small').css('top', smallDim + 'px');
  }



}());
