var fs = require('fs');
var users = require('./users');
var awoptions = require('./options');

// 需要排除的黑名单
var blacks = ['0000'];
// 所有的号码
var phones = [];
var optionNum = 0;
// 中奖号码
var awards = [];
// 重抽中奖号码
var rewards = [];

exports.getPhones = function() {
	return phones;
};
exports.getAwards = function() {
	return awards;
}

var preparePhones = function() {
	var datas = users.getUsers();
	var options = awoptions.getOptions();

	blacks = [];
	awards = [];

	// 如果程序重启,把上一次已经中奖的人放入黑名单,这些人就不会再这轮中重复出现了.
	try {
		var allreadyAwards = fs.readFileSync('awards.txt', 'utf8');
		blacks = allreadyAwards.split(',');
	} catch(e) {
		console.log('no file');
	}
	
	console.log(blacks);

	var num = 0;
	// 把所有号码读入到phones数组中
	for (var i = 0; i < datas.length; i++) {
		people = datas[i]['people'];
		for (var j = 0; j < people.length; j++) {
			// 判断是否在黑名单中
			var blackFlag = false;
			for (var bk in blacks) {
				if (blacks[bk] == people[j]['phone']) {
					blackFlag = true;
					break;
				}
			}
			// 不在黑名单中添加进号码列表
			if (blackFlag == false) {
				phones[num] = people[j]['phone'];
				num++;
			}
		}
	}
}

/**
 * 启动时加载
 */
exports.start = function() {
	var datas = users.getUsers();
	var options = awoptions.getOptions();
	preparePhones();
	
	// 抽奖
	for (var opt in options) {

		for (dis in options[opt].distribute) {
		
			// 读取配置
			var dep = options[opt].distribute[dis].dep;
			var size = options[opt].distribute[dis].size;

			var data;
			// 找到分组
			for (data in datas) {
				if (datas[data].part == dep) break;
			}
			// 抽取中奖号码
			for (var i = 0; i < size; i++) {
				var flag = true;
				while (flag) {
					flag = false;
					var index = 0;
					var awardPhone = '';
					if (datas[data].people.length == 1) {
						awardPhone = datas[data].people[index].phone;
					} else {
						index = Math.floor(Math.random()*datas[data].people.length);
						awardPhone = datas[data].people[index].phone;

						// 已经中奖者不算
						for (var awph in awards) {
							if (awards[awph] == awardPhone) flag = true;
						}
						// 黑名单中人员不算
						for (var bk in blacks) {
							if (blacks[bk] == awardPhone) flag = true;
						}
					}
					
					
					// 放入中奖列表
					if (flag == false) {
						var length = awards.length;
						awards[length] = awardPhone;
						console.log(awardPhone);
					}
				}
			}
		}
		console.log('==========================');
	}
	fs.writeFile('awards.txt', awards, function (err) {
		if (err) throw err;
		console.log('It\'s saved!'); //文件被保存
	});
	return awards;
}

exports.retry = function() {
	var redatas = users.getUsers();
	for (var data in redatas) {
		if (redatas[data].part == 'gmsz1') {
			break;
		}
	}
	var flag = true;
	var awardPhone = '0000';
	while (flag) {
		flag = false;
		var index = Math.floor(Math.random()*redatas[data].people.length);
		awardPhone = redatas[data].people[index].phone;
		// 已经中奖者不算
		for (var awph in awards) {
			if (awards[awph] == awardPhone) flag = true;
		}
		// 黑名单中人员不算
		for (var bk in blacks) {
			if (blacks[bk] == awardPhone) flag = true;
		}
		// 重抽中奖者不算
		for (re in rewards) {
			if (rewards[re] == awardPhone) flag = true;
		}
	}
	return awardPhone;
};