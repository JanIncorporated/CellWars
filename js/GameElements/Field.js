class Field {
	constructor(field, cell, Player1, Player2, mfk) {
		this.height = field.height;
		this.width = field.width;
		this.Player1 = Player1;
		this.Player2 = Player2;
		this.cell = cell;
		this.field = [];
		this.initField();
		this.moneyForKill = mfk;
	}
	initField() {
		let h = $('#field').height();
		let minH = this.height * this.cell.height;
		let w;
		if (h > minH) {
			w = h;
		} else {
			w = h = this.width * this.cell.width;
		}
		$('#field').css({width: w});
		for (let i = 0; i < this.height; i++) {
			this.field[i] = [];
			let result = '';
			for (var j = 0; j < this.width; j++) {
				if (j < this.width / 2) {
					this.field[i].push(new Cell(this.cell, this.Player1))
				} else {
					this.field[i].push(new Cell(this.cell, this.Player2))
				}
				result += this.field[i][j].GetCell(j, i);
			}
			$('#field').append('<div>' + result + '</div>');
		}
	}
	// SetNewCell(i, j, c, fault) {
	// 	c = getColor(c);
	// 	if (c === '#000') {
	// 		this.field[i][j].owner = fault.owner;
	// 		this.field[i][j].color = fault.owner.color;
	// 		c = fault.owner.color;
	// 	} else {
	// 		this.field[i][j].color = c;
	// 	}
	// 	$('#cell-' + j + '' + i).css({'background' : c});
	// }
	checkCell(i, j){
		let cell = this.field[i][j];
		let owner = this.field[i][j].owner;
		if (j + 1 < this.width)
			if (owner.name != this.field[i][j + 1].owner.name)
				this.mark(cell, this.field[i][j + 1], i, j + 1);
		if (i + 1 < this.height)
			if (owner.name != this.field[i + 1][j].owner.name)
				this.mark(cell, this.field[i + 1][j], i + 1, j);
		if (j - 1 > 0)
			if (owner.name != this.field[i][j - 1].owner.name)
				this.mark(cell, this.field[i][j - 1], i, j - 1);
		if (i - 1 > 0)
			if (owner.name != this.field[i - 1][j].owner.name)
				this.mark(cell, this.field[i - 1][j], i - 1, j);
	}
	mark(attaker, target, i, j) {
		let damage = attaker.GetDamage();
		damage -= target.owner.defence;
		if (damage <= 0) return;

		target.resultHp = target.hp - damage;
		target.attaker = attaker;
	}
	atack(target, i, j) {
		if (target.resultHp > 0) { 
			target.hp = target.resultHp;
			$('#cell-' + j + i).html(target.resultHp);
		}
		else {
			console.log(target);
			this.field[i][j].owner = target.attaker.owner;
			this.field[i][j].hp = target.attaker.owner.hp;
			$('#cell-' + j + i).css({background: target.attaker.owner.color});
			$('#cell-' + j + i).html(target.attaker.owner.hp);
			this.addMoney(target.attaker.owner.name, this.moneyForKill);
		}
		target.attaker = null;
		target.resultHp = 0;
	}
	addMoney(ownerName, money) {
		if (this.Player1.name == ownerName) {
			this.Player1.money += money;
			$('#p1-money').html(this.Player1.money)
		}
		if (this.Player2.name == ownerName) {
			this.Player2.money += money;
			$('#p2-money').html(this.Player2.money)
		}
	} 
	iteration() {
		for (let i = 0; i < this.height; i++) {
			for (var j = 0; j < this.width; j++) {
				this.checkCell(i, j);
			}
		}
		for (let i = 0; i < this.height; i++) {
			for (var j = 0; j < this.width; j++) {
				if (this.field[i][j].resultHp != 0)
					this.atack(this.field[i][j], i, j);
			}
		}
	}
}
