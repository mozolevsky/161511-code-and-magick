'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 240, 20);
  ctx.fillText('Список результатов:', 230, 40);

  var heightColumnMax = 150;
  var widthColumn = 40;
  var spaceBetweenColumns = 50;
  var timeMax = 0;
  var columnCoordinateX = 150;

  function getColumnColor(name) {
    return (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + Math.random().toFixed(2) + ')';
  }

  function getColumnHeight(time) {
    return heightColumnMax * time / timeMax;
  }

  function drawColumn(name, time) {
    ctx.fillStyle = getColumnColor(name);
    ctx.fillRect(columnCoordinateX, (240 - getColumnHeight(time)), widthColumn, getColumnHeight(time));
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(time.toFixed(0), columnCoordinateX, (220 - getColumnHeight(time)));
    ctx.fillText(name, columnCoordinateX, 250);
  }

  for (var i = 0; i < times.length; i++) {
    if (times[i] > timeMax) {
      timeMax = times[i];
    }
  }

  for (var j = 0; j < times.length; j++) {
    drawColumn(names[j], times[i]);
    columnCoordinateX = columnCoordinateX + widthColumn + spaceBetweenColumns;
  }
};


