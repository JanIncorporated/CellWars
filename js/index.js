class Cell {
	constructor(owner) {
		this.owner = owner;
		this.color = owner.color;
		this.maxHP = owner.hp;
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
	SetNewCell(i, j, c, fault) {
		c = getColor(c);
		if (c === '#000') {
			this.field[i][j].owner = fault.owner;
			this.field[i][j].color = fault.owner.color;
			c = fault.owner.color;
		} else {
			this.field[i][j].color = c;
		}
		$('#cell-' + j + '' + i).css({'background' : c});
	}
	Check() {
		for (let i = 0; i < this.height; i++) {
			for (var j = 0; j < this.width; j++) {
				try {
					if (this.field[i][j].owner !== this.field[i][j + 1].owner) {
						this.SetNewCell(i, j, this.field[i][j], this.field[i][j + 1]);
					}
				} catch {}
			}
		}
	}
}

var Player1 = new Player(3, 5, 1, 10, '#f00');
var Player2 = new Player(3, 5, 1, 10, '#00f');
var f = new Field(10, 10);

function getColor(cell) {
	let color = cell.color;

	let maxA = cell.owner.maxAtack;
	let minA = cell.owner.minAtack;
	let damage = Math.floor(Math.random() * (maxA - minA + 1)) + minA;

	let defence = cell.owner.defence;
	let hp = (defence < damage) ? cell.owner.hp - damage + defence : cell.owner.hp;
	let maxHP = cell.maxHP;

	let r = NumToHex(Math.floor(HexToNum(color.substr(-3,1)) / maxHP * hp));
	let g = NumToHex(Math.floor(HexToNum(color.substr(-2,1)) / maxHP * hp));
	let b = NumToHex(Math.floor(HexToNum(color.substr(-1)) / maxHP * hp));
	console.log('#' + r + g + b);
	return '#' + r + g + b;
}
function HexToNum(h) {
	if (h == 'f') return 15;
	if (h == 'e') return 14;
	if (h == 'd') return 13;
	if (h == 'c') return 12;
	if (h == 'b') return 11;
	if (h == 'a') return 10;
	return +h;
}
function NumToHex(h) {
	if (h == 15) return 'f';
	if (h == 14) return 'e';
	if (h == 13) return 'd';
	if (h == 12) return 'c';
	if (h == 11) return 'b';
	if (h == 10) return 'a';
	return h;
}




var blue = [];
var red = [];
$(document).ready(function(){
	new Game();
});