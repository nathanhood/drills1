(function(){
  'use strict';

  var sum = 0;
  var count = 0;

  $(document).ready(init);

  function init(){
    $('#get').click(buildArray);
  }

  function buildArray(){
    $('#symbol').val().toUpperCase().split(',').map(strip).forEach(addQuote);
  }

  function strip(word){
    return word.trim();
  }

  function addQuote(symbol, index, array){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){//must write callback function in line to access 'array'.
      sum += data.LastPrice;
      count++;
      if(count === array.length){
        console.log('abc');
        var $div = $('<div class="container">').text('$' + sum);
        $('body').append($div);
      }
    });//service/responding server calls function getReport once response comes back.
  }


}());
