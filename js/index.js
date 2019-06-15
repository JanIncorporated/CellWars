class Cell {
	constructor(owner) {
		this.owner = owner;
		// this.color = owner.color;
	}

	GetCell(x, y) {
		return '<div id="cell-' + x + '' + y + '" style="display: inline-block; height: 20px;' +
		'width: 20px;' +
		'background: ' + this.owner.color + '; border: 1px solid #fff"></div>';
	}
}
class Player {
	constructor(minA, maxA, def, hp, color) {
		this.minAtack = minA;
		this.maxAtack = maxA;
		this.defence = def;
		this.hp = hp;
		this.color = color;
	}
}
class Field {
	constructor(width, height) {
		this.height = height;
		this.width = width;
		this.field = [];
	}
	initField(line) {
		for (let i = 0; i < this.height; i++) {
			this.field[i] = [];
			let result = '';
			for (var j = 0; j < this.width; j++) {
				if (j < line) {
					this.field[i].push(new Cell(Player1))
				} else {
					this.field[i].push(new Cell(Player2))
				}
				result += this.field[i][j].GetCell(j, i);
			}
			$('#app').append('<div>' + result + '</div>');
		}
	}
	SetNewCell(i, j, c) {
		let resultR = c.substr(-3, 1);
		let resultG = c.substr(-2, 1);
		let resultB = c.substr(-1);
		console.log(resultR);
		this.field[i][j].owner.color = c;
		$('#cell-' + j + '' + i).css({'background' : c});
	}
	Check() {
		for (let i = 0; i < this.height; i++) {
			for (var j = 0; j < this.width; j++) {
				try {
					if (this.field[i][j].owner !== this.field[i][j + 1].owner) {
						this.SetNewCell(i, j, '#fab');
					}
				}
				catch {}
			}
		}
	}
}

var Player1 = new Player(0, 0, 0, 0, '#f00');
var Player2 = new Player(0, 0, 0, 0, '#00f');
var f = new Field(20, 20);


function HexToNum(h) {
	if (h == 'f') return 15;
	if (h == 'e') return 14;
	if (h == 'd') return 13;
	if (h == 'c') return 12;
	if (h == 'b') return 11;
	if (h == 'a') return 10;
}




var blue = [];
var red = [];
$(document).ready(function(){
	f.initField(10);
	f.Check();
	// for (let i = 0; i < 10; i++) {
	// 	let result = [];
	// 	let blueInit = [];
	// 	let redInit = [];
	// 	let str = '';
	// 	for (let j = 0; j < 10; j++) {
	// 		if (j < 5) {
	// 			result.push(new Cell(20, 20, '#f00'));
	// 			redInit.push(new Cell(20, 20, '#00f'));
	// 			blueInit.push(false);
	// 		}
	// 		else {
	// 			result.push(new Cell(20, 20, '#00f'));
	// 			blueInit.push(new Cell(20, 20, '#00f'));
	// 			redInit.push(false);
	// 		}
	// 		str += result[j].GetCell(i, j);
	// 	}
	// 	blue.push(blueInit);
	// 	red.push(redInit);
	// 	$('#app').append('<div>' + str + '</div>');
	// }
	// console.log(red);
	// console.log(blue);
	// checkRed();
});
function checkRed() {
	for (let i = 0; i < red.length; i++) {
		for (let j = 0; j < red[i].length; j++) {
			try {
				if (red[i][j] !== false && blue[i][j + 1] !== false) {
					$('#cell-' + i + '' + (j + 1)).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i][j - 1] !== false) {
					$('#cell-' + i + '' + (j - 1)).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i + 1][j] !== false) {
					$('#cell-' + (i + 1) + '' + j).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i - 1][j] !== false) {
					$('#cell-' + (i - 1) + '' + j).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i + 1][j + 1] !== false) {
					$('#cell-' + (i + 1) + '' + (j + 1)).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i - 1][j - 1] !== false) {
					$('#cell-' + (i - 1) + '' + (j - 1)).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i + 1][j - 1] !== false) {
					$('#cell-' + (i + 1) + '' + (j - 1)).css({'background' : '#008'})
				}
				if (red[i][j] !== false && blue[i - 1][j + 1] !== false) {
					$('#cell-' + (i - 1) + '' + (j + 1)).css({'background' : '#008'})
				}
			} catch {}
		}
	}
}
