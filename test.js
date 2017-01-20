var users = require('./utils/users');

var datas = users.getUsers();

// for (data in datas) {
// 	console.log(datas[data].part);
// 	var peoples = datas[data].people;

// 	var peoNum = '';
// 	var count = 0;
// 	for (people in peoples) {
// 		peoNum = peoNum + peoples[people].phone + ',';
// 		count++;
// 		if (count % 15 == 0) peoNum += '\r\n';
// 	}
// 	console.log(peoNum);
// 	console.log( );
// }


// var award = 100;
// var num = 0;
// while (num<50) {
// 	var newAward = Math.floor(Math.random()*100);
// 	if (Math.abs(award-newAward) > 20) {
// 		num++;
// 		console.log(newAward);
// 		award = newAward;
// 	}
// }
// console.log('8001'-'8010'+'============');

var arrys = [1,2,3,4,5,6,7,8,9,0];
console.log('arrayLength:'+arrys.length);
var sp = arrys.splice(2,1);
console.log(sp[0]);
console.log('arrayLength:'+arrys.length);
for (array in arrys) {
	console.log(arrys[array]);
}
