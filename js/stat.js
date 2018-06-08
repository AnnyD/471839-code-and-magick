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

// Просто функция для расчета максимального элемента

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
	//отрисовка тини и облака. Тень выступает за облако на 10px = GAP
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');


	// Отрисовка текста

	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#000000';

	ctx.fillText('Ура вы победили!', 310, 20);
	ctx.fillText('Список результатов:', 310, 50);
	/*
		ctx.fillStyle = '#000';
		ctx.fillText('Вы', CLOUD_X, 100);
		ctx.fillRect(CLOUD_X, 120, BAR_WIDTH, barHeight);

		ctx.fillText('Иван', CLOUD_X + SPACE_GAP, 100);
		ctx.fillRect(CLOUD_X + SPACE_GAP, 120, BAR_WIDTH, barHeight);

		ctx.fillText('Юлия', CLOUD_X + SPACE_GAP * 2, 100);
		ctx.fillRect(CLOUD_X + SPACE_GAP * 2, 120, BAR_WIDTH, barHeight);
	*/
	var maxTime = getMaxElement(times);

	ctx.fillStyle = '#000';
	var names = ['Вы', 'Иван', 'Юлия'];

	for (var i = 0; i < names.length; i++) {
		ctx.fillText(names[i], (CLOUD_X) * i, 100);
		ctx.fillRect((CLOUD_X) * i + SPACE_GAP, 120, BAR_WIDTH, (barHeight * times[i]) / maxTime);
	}


	// Задаем цвет колонок

	for (var i = 0; i < names.length; i++) {
		if (names[i] === 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
		}
	}
};
