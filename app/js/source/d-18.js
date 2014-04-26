(function(){
  'use strict';

  var timer;

  $(document).ready(init);

  function init(){
    $('#get').click(split);
  }

  function split(){
    $('#symbol').val().toUpperCase().split(',').map(strip).map(addQuote);
  }

  function strip(word){
    return word.trim();
  }

  function addQuote(symbol){
    // var symbol = $('#symbol').val().trim().toUpperCase(); //stock symbol. needs to be upper case. Input into url below.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, getReport);//service/responding server calls function getReport once response comes back.
  }

  function getReport(data){
    var $tr = $('<tr class="symbol">');
    $('tbody').append($tr);

    $tr.append('<td>' + data.Symbol + '</td>');
    $tr.append('<td id="' + data.Symbol + '">' + '$' + data.LastPrice + '</td>');
    refreshRate();
  }

  function refreshRate(){
    clearInterval(timer);
    timer = setInterval(function(){
      repopulate();
    }, 1000);
  }

  function repopulate(){
    var array = $('td:nth-child(odd)');
    var newArray = [];
    for(var i = 1; i < array.length; i++){
      newArray.push($(array[i]).text());
    }
    newArray.map(reQuote);
  }

  function reQuote(symbol){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, updateReport);
  }

  function updateReport(data){
    var newPrice = $('#' + data.Symbol).text('$' + data.LastPrice);
    console.log(newPrice);
  }

}());
