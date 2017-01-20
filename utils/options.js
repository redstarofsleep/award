var options = [
	// 奖项名称，总共多少个，每次抽几个
	{name: '三等奖', total: 30, count: 5, distribute: [
		// 组，抽几个
		{dep: 'gmsz1', size: 3, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 5, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 3, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 3, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 1, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 5, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 3, already: 0, fileCheck: true}
	]},
	{name: '二等奖', total: 10, count: 5, distribute: [
		{dep: 'gmsz1', size: 5, already: 0, fileCheck: true},
		{dep: 'other1', size: 1, already: 0, fileCheck: true},
		{dep: 'gmsz1', size: 4, already: 0, fileCheck: true}
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
