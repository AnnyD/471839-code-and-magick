'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var SPACE_GAP = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

//функция отрисовки облака

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция перебирает массив и ищет максимальное значение

var getMaxElement = function(arr) {
	var maxElement = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};

window.renderStatistics = function(ctx, names, times) {

	//отрисовка тени и облака. Тень выступает за облако на 10px = GAP

	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

	// Отрисовка текста

	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#000000';

	ctx.fillText('Ура вы победили!', 310, 20);
	ctx.fillText('Список результатов:', 310, 50);

	var maxTime = getMaxElement(times);

	var names = ['Вы', 'Иван', 'Юлия'];

	for (var i = 0; i < names.length; i++) {
		ctx.fillText(Math.floor(times[i]), CLOUD_X + ((BAR_WIDTH + SPACE_GAP) * i) + SPACE_GAP, CLOUD_HEIGHT - GAP * 2 - barHeight);
		ctx.fillText(names[i], CLOUD_X + ((BAR_WIDTH + SPACE_GAP) * i) + SPACE_GAP, CLOUD_HEIGHT - GAP);

		if (names[i] === 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
		}
		ctx.fillRect(CLOUD_X + ((BAR_WIDTH + SPACE_GAP) * i) + SPACE_GAP, CLOUD_HEIGHT - barHeight, BAR_WIDTH, (barHeight * times[i]) / maxTime);
	}
};
