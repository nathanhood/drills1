(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.toggleDiv').click(randomColor);
  }


  function randomColor(){
    var array = colors();
    $('.random').css('background-color', 'rgba(' + array.join() + ')');
  }

  function colors(){
    var rgb = [];
    for(var i = 0; i < 3; i++){
      rgb.push(Math.floor(Math.random() * 256));
    }
    rgb.push(opacity());
    return rgb;
  }

  function opacity(){
    var opac = ((Math.round(Math.random() *100)) / 100);
    return opac;
  }


}());
