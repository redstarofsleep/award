var options = [
	{name: '幸运奖', total: 80, count: 10, distribute: [
		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 5, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 5, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 5, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},

		//----------------------------------

		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 5, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 2, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},

		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: false},
		{dep: 'other1', size: 1, already: 0, fileCheck: false}
	]},
	{name: '三等奖', total: 6, count: 2, distribute: [
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true}
	]},
	{name: '二等奖', total: 3, count: 1, distribute: [
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'other2', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true}
	]},
	{name: '一等奖', total: 1, count: 1, distribute: [
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true}
	]},
	{name: '特等奖', total: 1, count: 1, distribute: [
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true}
	]}
];

exports.getOptions = function() {
	return options;
};
