var fs = require('fs');
var users = require('./users');
var awoptions = require('./options');

// 需要排除的黑名单
var blacks = ['000000'];
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
	var datas = eval(users.getUsers());
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

	console.log('blacks:'+blacks);

	var num = 0;
	// 把所有号码读入到phones数组中
	for (var i = 0; i < datas.length; i++) {
		people = datas[i]['people'];
		for (var j = 0; j < people.length; j++) {
			// 判断是否在黑名单中
			var blackFlag = false;
			// for (var bk in blacks) {
			// 	if (blacks[bk] == people[j]['phone']) {
			// 		blackFlag = true;
			// 		break;
			// 	}
			// }
			// 不在黑名单中添加进号码列表
			if (blackFlag == false) {
				phones[num] = people[j]['phone'];
				num++;
			}
		}
	}
}

var prepare = function() {
	var temp = users.getUsers();
	// console.log(temp);
	var datas = eval(temp);
	// console.log('s===========>');
	console.log(datas);
	// 如果程序重启,把上一次已经中奖的人放入黑名单,这些人就不会再这轮中重复出现了.
	try {
		var allreadyAwards = fs.readFileSync('awards.txt', 'utf8');
		blacks = allreadyAwards.split(',');
	} catch(e) {
		console.log('no black file');
	}
	console.log('blacks:'+blacks);
	for (var i = 0; i < datas.length; i++) {
		var people = datas[i]['people'];
		for (var j = 0; j < people.length; j++) {
			for (var bk in blacks) {
				if (blacks[bk] == people[j]['phone']) {
					datas[i].people.splice(j, 1);
					break;
				}
			}
		}
	}
	// console.log('e==========>');
	// console.log(datas);
	return datas;
}

/**
 * 启动时加载
 */
exports.start = function() {
	// 返回所有号码，页面随机跳动时用
	preparePhones();
	// var datas = users.getUsers();
	var datas = prepare();
	var options = awoptions.getOptions();

	var lastAward = '666666';
	// 抽奖
	for (var opt in options) {

		for (dis in options[opt].distribute) {

			// 读取配置
			var dep = options[opt].distribute[dis].dep;
			var size = options[opt].distribute[dis].size;
			var fileCheck = options[opt].distribute[dis].fileCheck;

			var data;
			// 找到分组
			for (data in datas) {
				if (datas[data].part == dep) break;
			}
			// 抽取中奖号码
			for (var i = 0; i < size; i++) {
				var flag = true;

				// while (flag) {
				// 	flag = false;
					var index = 0;
					var awardPhone = '';
					if (datas[data].people.length == 1) {
						awardPhone = datas[data].people[index].phone;
					} else {
						index = Math.floor(Math.random()*datas[data].people.length);
						awardPhone = datas[data].people[index].phone;
						// console.log('pre remove' + datas[data].people.length);
						datas[data].people.splice(index, 1);
						// console.log('aft remove' + datas[data].people.length);

						// // 两次抽出的结果太近不算(为了使结果尽可能平均分布)
						// if (Math.abs(awardPhone-lastAward) < 15) {
						// 	flag = true;
						// 	//console.log(Math.abs(awardPhone-lastAward)+'---'+awardPhone+'---------'+lastAward);
						// } else {
						// 	// flag = false;
						// 	// lastAward = awardPhone;
						// }
						//
						// // 已经中奖者不算
						// for (var awph in awards) {
						// 	if (awards[awph] == awardPhone) flag = true;
						// }
						// // 黑名单中人员不算
						// // for (var bk in blacks) {
						// // 	if (blacks[bk] == awardPhone && fileCheck == true) {
						// // 		console.log('black==>' + awardPhone);
						// // 		flag = true;
						// // 	}
						// // }
						//
						// for (var ii = 80; ii < blacks.length; ii++) {
						// 	// console.log(ii + '===' + blacks[ii]);
						// 	if (blacks[ii] == awardPhone && fileCheck == true) {
						// 			console.log('black==>' + awardPhone);
						// 			flag = true;
						// 	}
						// }


					// }


					// 放入中奖列表
					// if (flag == false) {
						var length = awards.length;
						awards[length] = awardPhone;
						lastAward = awardPhone;
						console.log(awardPhone);
					// }
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
	var awardPhone = '000000';
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
