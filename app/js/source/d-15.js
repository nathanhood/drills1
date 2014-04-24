(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase(); //stock symbol. needs to be upper case. Input into url below.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';

    $.getJSON(url, function(data){//service/responding server calls function(data) once response comes back.

      $('#quote').text('High $' + data.High + 'Low $' + data.Low + 'Market Value $' + data.MarketCap);//data is returned as an object.
    });//JSON is jQuery method.(address, name of function to be called once callback is returned)

}



}());
