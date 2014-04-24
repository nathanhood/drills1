(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var temp = $('#input').val().split(',').map(strip);
    var final = pow(temp).map(div).forEach(append);
    console.log(final);
  }

  function strip(num){
    return num.trim();
  }

  function pow(array){
    var powArray = [];
    for(var i = 0; i < array.length; i++){
      if(i % 2){ //odd
        powArray.push(Math.pow(array[i], 2));
      }else{
        powArray.push(Math.pow(array[i], 3));
      }
    }
    return powArray;
  }

  function div(num){
    return '<div class="result">' + num + '</div>';
  }

  // function backgroundColor(array){
  //   var powArray = [];
  //   for(var i = 0; i < array.length; i++){
  //     if(i % 2){ //odd
  //       powArray.push($('array[i]').css('background-color', 'blue'));
  //     }else{
  //       powArray.push($('array[i]').css('background-color', 'red'));
  //     }
  //   }
  //   return powArray;
  // }

  function append(div){
    return $('.answers').append(div);
  }



}());
