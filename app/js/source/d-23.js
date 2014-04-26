/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';


  $(document).ready(init);

  function init(){
    $('#get').click(get);
    makeGraph();
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/a32c1c536b032b2d/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(conditions){
      addLocationToChart(conditions);
    });
  }

  function addLocationToChart(conditions){
    debugger;
    var location = {};
    location.temp = conditions.current_observation.temp_f;
    location.zip = conditions.current_observation.observation_location.city;

    chart.dataProvider.push(location);//inserting data
    chart.validateData();//updating the state. Causes the chart to refresh
  }

  var chart;//will be using chart variable in multiple functions.

  function makeGraph(){
    chart = AmCharts.makeChart('weather', { //'graph' is simply div name in your jade file
      'type': 'serial',//type of graph
      'theme': 'chalk',
      'dataProvider': [],// where data goes
        'valueAxes': [{
            'gridColor':'#FFFFFF',
        'gridAlpha': 0.2,
        'dashLength': 0
      }],
        'gridAboveGraphs': true,
        'startDuration': 1,
        'graphs': [{
          'balloonText': '[[category]]: <b>[[value]]</b>',
          'fillAlphas': 0.8,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': 'temp'// Y-Axis
      }],
      'chartCursor': {
          'categoryBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false
      },
      'categoryField': 'zip',// X-Axis
      'categoryAxis': {
          'gridPosition': 'start',
          'gridAlpha': 0
      },
      'exportConfig':{
        'menuTop': 0,
        'menuItems': [{
          'icon': '/lib/3/images/export.png',
          'format': 'png'
        }]
      }
    });
  }


}());
