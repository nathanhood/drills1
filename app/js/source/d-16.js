(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(addQuote);
  }

  function addQuote(){
    var symbol = $('#input').val().trim().toUpperCase(); //stock symbol. needs to be upper case. Input into url below.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';

    $.getJSON(url, getReport);//service/responding server calls function getReport once response comes back.

    //JSON is jQuery method.(address, name of function to be called once callback is returned)
  }

  function getReport(data){
    var $div = $('<div class="container">');
    $('body').append($div);

    $div.append('<div id="symbol">' + data.Symbol + '</div>');
    $div.append('<div id="company">' + data.Name + '</div>');
    $div.append('<div id="marketHigh">' + '$' + data.High + '</div>');
  }


}());
