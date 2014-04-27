(function(){
  'use strict';


  $(document).ready(randomPos);
  $(document).ready(init);

  function init(){
    $('body').on('click', 'div', selectSquare);
    $('body').on('keydown', move);
  }

  function selectSquare(event){ //had to move inline (above) for 'stopProp' to work
    event.stopPropagation();
    $('div').removeClass('moveable');
    $(this).addClass('moveable');
  }

  function move(event){
    if(event >= 37 && event <= 40){
      event.preventDefault();
    }

    var currentX = parseInt($('.moveable').css('left'));
    var currentY = parseInt($('.moveable').css('top'));
    var boundX = $('.moveable').parent().width() - $('.moveable').width();
    var boundY = $('.moveable').parent().height() - $('.moveable').height();


    switch(event.keyCode){
    case 37:
      if(currentX > 4){currentX -= 5;}
      break;
    case 38:
      if(currentY > 4){currentY -= 5;}
      break;
    case 39:
      if(currentX < boundX){currentX += 5;}
      break;
    case 40:
      if(currentY < boundY){currentY += 5;}
      break;
    }

    $('.moveable').css('left', currentX).css('top', currentY);

  }


  function randomPos(){
    var ah = window.innerHeight;
    var aw = window.innerWidth;
    var bh = $('.big').height();
    var bw = $('.big').width();
    var ch = $('.small').height();
    var cw = $('.small').width();

    var bigX = Math.floor(Math.random() * (aw - bw));
    var bigY = Math.floor(Math.random() * (ah - bh));
    $('.big').css('left', bigX + 'px');
    $('.big').css('top', bigY + 'px');
    var smallX = Math.floor(Math.random() * (bw - cw));
    var smallY = Math.floor(Math.random() * (bh - ch));
    $('.small').css('left', smallX + 'px');
    $('.small').css('top', smallY + 'px');
  }

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


}());
