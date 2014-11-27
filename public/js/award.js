/**
 * param num: 产生的随机数的个数
 * param allPhones: 产生随机数的数组
 */
function radamNum(num, allPhones) {
	var nums = [];

	for (var i = 0; i < num; i++) {
		// 从所有号码中随机抽取号码
		var index = Math.floor(Math.random()*allPhones.length);
		var selPhone = allPhones[index];
		nums[i] = selPhone;
	}

	return nums;
}