(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(addQuote);
  }

  function addQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase(); //stock symbol. needs to be upper case. Input into url below.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, getReport);//service/responding server calls function getReport once response comes back.
  }

  function getReport(data){
    var $div = $('<div class="container">');
    $('body').append($div);

    $div.append('<div id="share">' + '$' + $('#shares').val() + '</div>');
    $div.append('<div id="price">' + '$' + data.LastPrice + '</div>');
    $div.append('<div id="position">' + '$' + (Math.round($('#shares').val() * data.LastPrice * 100) / 100) + '</div>');
  }


}());
