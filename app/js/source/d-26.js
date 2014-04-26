/* jshint camelcase:false */

(function(){
  'use strict';


  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }


  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/a32c1c536b032b2d/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, forecast);
  }

  function forecast(conditions){
    var tempIcon = conditions.forecast.simpleforecast.forecastday.map(urls);
    var day = conditions.forecast.simpleforecast.forecastday.map(dayTemp);
    createForecast(tempIcon, day);
  }

  function urls(forecastday){
    return forecastday.icon_url;
  }

  function dayTemp(conditions){
    return conditions.date.weekday;
  }

  function createForecast(tempIcon, day){
    for(var i = 0; i < day.length; i++){
      // debugger;
      var img = '<img src="' + tempIcon[i] + '">';
      var $div = $('<div class="day">');
      $div.append(img).append(day[i]);
      $('#forecast').append($div);
    }
  }



}());
