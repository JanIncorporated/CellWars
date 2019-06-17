function _initDialog(Game) {
	$('#app').append('<div id="dialog"></div>');
	$('#dialog').append('\
		<h3>Добро пожаловать в Cell Wars</h3>\
		<div class="button" id="two-players">2 игрока</div>\
		');
	$('#two-players').click(() => {
		Game.twoPlayers();
	});
}
function _destructDialog() {
	$('#app').empty();
}
function _initTwoPlayers(Game) {
	let p1 = __getDOMPlayer(Game.playerOne, "right");
	let p2 = __getDOMPlayer(Game.playerTwo, "left");
	$('#app').append('\
		<div class="container">\
			<div class="row">\
				<div class="player right" id="p1">' + p1 +'</div>\
				<div id="field"></div>\
				<div class="player  left" id="p2">' + p2 +'</div>\
			</div>\
			<div class="button" id="iteration">Атака!</div>\
		</div>\
		');
	$('#iteration').click(() => {
		Game.iteration();
	});
}
function __getDOMPlayer(player, type) {
	let result = "";
	switch(type){
		case "right":
			result += '<h2 style="color: ' + player.color + '">' + player.name + '</h2>';
			result += '<div class="row">\
					       <div class="stat-name">Минимальный урон</div>\
						   <div class="stat-value">'+ player.minAtack +'</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
					       <div class="stat-name">Максимальный урон</div>\
						   <div class="stat-value">'+ player.maxAtack +'</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
					       <div class="stat-name">Защита</div>\
						   <div class="stat-value">'+ player.defence +'</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
					       <div class="stat-name">Максимальное здоровье</div>\
						   <div class="stat-value">'+ player.hp +'</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
					       <div class="stat-name">Деньги</div>\
						   <div class="stat-value" id="p1-money">'+ player.money +'</div>\
					   </div>';
			break;
		case "left":
			result += '<h2 style="color: ' + player.color + '">' + player.name + '</h2>';
			result += '<div class="row">\
						   <div class="stat-value">'+ player.minAtack +'</div>\
					       <div class="stat-name">Минимальный урон</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
						   <div class="stat-value">'+ player.maxAtack +'</div>\
					       <div class="stat-name">Максимальный урон</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
						   <div class="stat-value">'+ player.defence +'</div>\
					       <div class="stat-name">Защита</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
						   <div class="stat-value">'+ player.hp +'</div>\
					       <div class="stat-name">Максимальное здоровье</div>\
					   </div>\
					   <div class="hr"></div>';
			result += '<div class="row">\
						   <div class="stat-value" id="p2-money">'+ player.money +'</div>\
					       <div class="stat-name">Деньги</div>\
					   </div>';
			break;
	}
	
	return result;
}