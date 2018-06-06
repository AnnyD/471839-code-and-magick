'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15; //ВОПРОС какое это расстояние? Между строками текста?
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

//функция отрисовки облака
var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
	//отрисовка тини и облака. Тень выступает за облако на 10px = GAP
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

	// Находим максимальный результат игрока

	var getMaxElement = function(arr) {
		var maxElement = arr[0];

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > maxElement) {
				maxElement = arr[i];
			}
		}

		return maxElement;
	};

	// Отрисовка текста
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#000000';
	ctx.fillText('Ура вы победили!', 310, 20);
	ctx.fillText('Список результатов:', 310, 50);


	ctx.fillText('Me', CLOUD_X + GAP, CLOUD_Y + BAR_HEIGHT + GAP);
	ctx.fillRect(120, 80, 40, 150);


	ctx.fillText('Tom', 180, 250);
	ctx.fillRect(180, 80, 40, 150);


	ctx.fillText('Jerry', 240, 250);
	ctx.fillRect(240, 80, 40, 150);
};
