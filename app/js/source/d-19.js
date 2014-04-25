(function(){
  'use strict';

  // var quotes = [];

  $(document).ready(init);

  function init(){
    $('#get').click(buildArray);
  }

  function buildArray(){
    $('#symbol').val().toUpperCase().split(',').map(strip).map(addQuote);
  }

  function strip(word){
    return word.trim();
  }

  function addQuote(symbol){
    // var symbol = $('#symbol').val().trim().toUpperCase(); //stock symbol. needs to be upper case. Input into url below.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, getValues);//service/responding server calls function getReport once response comes back.
  }

  function getValues(data){
    debugger;
    var temp = [];
    $.each(data, function(){
      temp.push(data.LastPrice);
    });
    sum(temp);
    // quotes.push(data.LastPrice);
    // setTimeout(function(){
    //   sum(temp);
    // }, 3000);
    // clearTimeout();
  }

  function sum(array){
    var total = array.reduce(function(a, b){
      return a + b;
    });
    var $div = $('<div class="container">').text('$' + total);
    $('body').append($div);
    console.log();
  }

}());
