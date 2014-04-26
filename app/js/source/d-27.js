/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';


  $(document).ready(init);

  function init(){
    $('#get').click(get);
    createMap();
  }


  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/a32c1c536b032b2d/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, forecast);
  }
  //
  // function forecast(conditions){
  //   var tempIcon = conditions.forecast.simpleforecast.forecastday.map(urls);
  //   var day = conditions.forecast.simpleforecast.forecastday.map(dayTemp);
  //   createForecast(tempIcon, day);
  // }
  //
  // function urls(conditions){
  //   return conditions.icon_url;
  // }
  //
  // function dayTemp(conditions){
  //   return conditions.date.weekday;
  // }
  //
  // function createForecast(tempIcon, day){
  //   for(var i = 0; i < day.length; i++){
  //     // debugger;
  //     var img = '<img src='' + tempIcon[i] + ''>';
  //     var $div = $('<div class='day'>');
  //     $div.append(img).append(day[i]);
  //     $('#forecast').append($div);
  //   }
  // }

var map;
// svg path for target icon
function createMap(){
  var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

  map = AmCharts.makeChart('chartdiv', {
  	type: 'map',
      'theme': 'none',
       pathToImages: 'http://www.amcharts.com/lib/3/images/',

  	imagesSettings: {
  		rollOverColor: '#089282',
  		rollOverScale: 3,
  		selectedScale: 3,
  		selectedColor: '#089282',
  color:'#13564e'
  	},

  zoomControl:{buttonFillColor:'#15A892'},

  areasSettings:{unlistedAreasColor:'#15A892'},

  	dataProvider: {
  		map: 'worldLow',
  		images: [{
  			svgPath: targetSVG,
  			zoomLevel: 5,
  			scale: 0.5,
  			title: 'Vienna',
  			latitude: 48.2092,
  			longitude: 16.3728
  		}]
  	  }
    });
  }


})();
