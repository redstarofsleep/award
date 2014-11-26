var options = [
	{name: '幸运奖', total: 50, count: 10, distribute: [
		{dep: 'gmsz1', size: 2, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 2, already: 0},

		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},

		{dep: 'gmsz1', size: 5, already: 0},

		{dep: 'gmsz1', size: 2, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 2, already: 0},

		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},

		{dep: 'gmsz1', size: 5, already: 0},
		
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},

		{dep: 'gmsz1', size: 5, already: 0},

		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},

		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0}
	]},
	{name: '三等奖', total: 6, count: 2, distribute: [
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other1', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0}
	]},
	{name: '二等奖', total: 3, count: 1, distribute: [
		{dep: 'gmsz1', size: 1, already: 0},
		{dep: 'other2', size: 1, already: 0},
		{dep: 'gmsz1', size: 1, already: 0}
	]},
	{name: '一等奖', total: 1, count: 1, distribute: [
		{dep: 'gmsz1', size: 1, already: 0}
	]},
	{name: '特等奖', total: 1, count: 1, distribute: [
		{dep: 'gmsz1', size: 1, already: 0}
	]}
];

exports.getOptions = function() {
	return options;
};