/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';


  $(document).ready(init);

  function init(){
    makeGauge();
    $('#get').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/a32c1c536b032b2d/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(gust){
      var wind = gust.current_observation.wind_mph;
      gaugeChart.arrows[0].setValue(wind);
      gaugeChart.axes[0].setBottomText(wind + ' miles/h');
    });
  }

  var gaugeChart;

  function makeGauge(){
    gaugeChart = AmCharts.makeChart('weather', {
      'type': 'gauge',
      'theme': 'dark',
      'axes': [{
          'axisThickness':1,
           'axisAlpha':0.2,
           'tickAlpha':0.2,
           'valueInterval':1,
          'bands': [{
              'color': '#84b761',
              'endValue': 5,
              'startValue': 0
          }, {
              'color': '#fdd400',
              'endValue': 10,
              'startValue': 5
          }, {
              'color': '#cc4748',
              'endValue': 15,
              'innerRadius': '95%',
              'startValue': 10
          }],
          'bottomText': '0 km/h',
          'bottomTextYOffset': -20,
          'endValue': 15
        }],
        'arrows': [{}]
    });
  }

  // setInterval(get, 2000);


}());
