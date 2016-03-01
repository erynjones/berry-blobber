// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`

var writeBerries = function (berries) {
  document.write('<h1>Berries</h1>');

  document.write('<ol>');

  berries.forEach(function(berry) {
    document.write('<li>');
    document.write('<h2>' + berry.name + '</h2>');
    document.write('<dl>');
    document.write('<dt>Latin</dt>');
    document.write('<dd><i>' + berry.latin + '</i></dd>');
    document.write('<dt>onShrub</dt>');
    document.write('<dd><i>' + berry.onShrub + '</i></dd>');
    document.write('<dt>Energy</dt>');
    document.write('<dd><i>' + berry.energy + '</i></dd>');
    document.write('<dt>Carbs</dt>');
    document.write('<dd><i>' + berry.carbs + '</i></dd>');
    document.write('<dt>Protien</dt>');
    document.write('<dd><i>' + berry.protien + '</i></dd>');
    document.write('</dl>');
    document.write('</li>');
  });

    document.write('</ol>');
};


// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
