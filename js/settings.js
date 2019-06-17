var GAME_SETTINGS = {
	// свойства игроков
	players: [
		{
			name:     'RED',
			color:    '#f00',
			minAtack: 5,
			maxAtack: 15,
			defence:  3,
			hp:       100,
			money:    10
		},
		{
			name:     'BLUE',
			color:    '#00f',
			minAtack: 5,
			maxAtack: 15,
			defence:  3,
			hp:       100,
			money:    10
		}
	],

	// Свойства поля
	field: {
		height: 10,
		width:  10
	},
	cell: {
		height: 20,
		width:  20
	},

	// Другие свойства
	moneyForKill: 5
}