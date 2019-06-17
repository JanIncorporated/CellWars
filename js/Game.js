class Game {
	constructor() {
		this.settings = GAME_SETTINGS;
		this._initGame();
	}
	_initGame() {
		_initDialog(this);
	}
	twoPlayers() {
		_destructDialog();
		this.playerOne = new Player(this.settings.players[0]);
		this.playerTwo = new Player(this.settings.players[1]);
		_initTwoPlayers(this);
		this.field = new Field(this.settings.field, this.settings.cell, this.playerOne, this.playerTwo, this.settings.moneyForKill);
	}
	iteration() {
		setInterval(()=>{
			this.field.iteration();
		}, 5)
	}
}