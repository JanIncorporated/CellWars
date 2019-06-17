class Cell {
	constructor(cell, owner) {
		this.width = cell.width;
		this.height = cell.height;
		this.owner = owner;
		this.hp = owner.hp;
		this.isSleep = false;
	}
	GetCell(x, y) {
		return '<div class="cell" id="cell-' + x + y + '" style="' +
		'height: ' + this.height + 'px;' +
		'width:  ' + this.width +'px;' +
		'background: ' + this.owner.color + ';">' +
			this.owner.hp
		+'</div>';
	}
	GetDamage() {
		return Math.floor(Math.random() * (this.owner.maxAtack - this.owner.minAtack + 1)) + this.owner.minAtack;
	}
}