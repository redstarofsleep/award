var users = require('./users');
var awoptions = require('./options');

// 需要排除的黑名单
var blacks = ['0000'];
// 所有的号码
var phones = [];
var optionNum = 0;
// 中奖号码
var awards = [];

exports.getPhones = function() {
	return phones;
};
exports.getAwards = function() {
	return awards;
}

var preparePhones = function() {
	var datas = users.getUsers();
	var options = awoptions.getOptions();

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
					var index = Math.floor(Math.random()*datas[data].people.length);
					var awardPhone = datas[data].people[index].phone;
					// 已经中奖者不算
					for (var awph in awards) {
						if (awards[awph] == awardPhone) flag = true;
					}
					// 黑名单中人员不算
					for (var bk in blacks) {
						if (blacks[bk] == awardPhone) flag = true;
					}
					// 放入中奖列表
					if (flag == false) {
						var length = awards.length;
						awards[length] = awardPhone;
					}
				}
			}
		}
	}
	return awards;
}