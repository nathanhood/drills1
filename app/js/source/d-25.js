/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';


  $(document).ready(init);

  function init(){
    makeChart();
    $('#get').click(get);
  }


  function get(){
    var symbol = $('#symbol').val().trim().toUpperCase(); //stock symbol. needs to be upper case. Input into url below.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, stockValue);//service/responding server calls function getReport once response comes back.
  }

  function stockValue(data){
    var stockPrice = data.LastPrice;
    var numShares = $('#shares').val().trim() * 1;
    var stockTotal = stockPrice * numShares;

    var stock = {};
    stock.company = data.Symbol;
    stock.totalValue = stockTotal;

    chart.dataProvider.push(stock);//inserting data
    chart.validateData();//updating the state. Causes the chart to refresh
  }

  var chart;

  function makeChart(){
    chart = AmCharts.makeChart('chartdiv', {
      'type': 'pie',
  	  'theme': 'none',
      'titles': [{
          'text': 'Stock Breakdown',
          'size': 20
      }],
      'dataProvider': [],
      'valueField': 'totalValue',
      'titleField': 'company',
      'startEffect': 'elastic',
      'startDuration': 2,
      'labelRadius': 15,
      'innerRadius': '50%',
      'depth3D': 10,
      'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
      'angle': 15,
      'exportConfig':{
        menuItems: [{
        icon: '/lib/3/images/export.png',
        format: 'png'
        }]
	    }
    });
  }


}());
