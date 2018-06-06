'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // расстояние, на которое выступает тень облака
var GAP_X = 20; //начальная точка гистограммы по горизонтали. Почему задаем значение 20?
var GAP_Y = 20; // начальная точка гистограммы по вертикали. Почему задаем значение 20?
var FONT_GAP = 15; // какое это расстояние?
var TEXT_HIGHT = 20; //высота, которую занимает текст с учетом высоты строки
var BAR_GAP = 20; //расстояние между чем???
var SPACE_GAP = 50; //расстояние между колонками гистограммы
var BAR_WIDTH = 40; // ширина колонки
var barHeight = CLOUD_HEIGHT - GAP_Y - FONT_GAP - GAP_Y - CLOUD_Y; //не очень понятно, как рассчитывается


//функция отрисовки облака
var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Находим максимальный результат игрока. Функция создает массив,
//счетчик перебирает массив результатов и возвращает самый высокий результат.
//Почему мы не задаем этот массив. Нужно ведь задать пустой массив без значений?

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

	// Перебираем массив с именами и присваеваем цвет столбика гистограммы

	var maxTime = getMaxElement(times);

	for (var i = 0; i < names.length; i++) {

		if (names[i] === 'Me') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else if (names[i] === 'Tom') {
			ctx.fillStyle = 'rgba(43, 89, 158, 1)';
		} else if (names[i] === 'Jerry') {
			ctx.fillStyle = 'rgba(40, 87, 128, 1)';
		} else {
			ctx.fillStyle = 'rgba(45, 97, 160, 1)';
		}
		// Вот эту часть нужно подробнее пояснить.
		ctx.fillText(names[i], CLOUD_X + GAP_X + BAR_GAP + (SPACE_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_Y + FONT_GAP + barHeight + TEXT_HEIGHT);
		ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + BAR_GAP + (SPACE_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_Y + FONT_GAP + barHeight - (barHeight * times[i] / maxTime) - CLOUD_Y);


		ctx.fillRect(CLOUD_X + GAP_X + BAR_GAP + (SPACE_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP_Y + FONT_GAP + barHeight, BAR_WIDTH, -(barHeight * times[i] / maxTime));
	}
};
