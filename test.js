var users = require('./utils/users');

var datas = users.getUsers();

for (data in datas) {
	console.log(datas[data].part);
	var peoples = datas[data].people;
	
	var peoNum = '';
	var count = 0;
	for (people in peoples) {
		peoNum = peoNum + peoples[people].phone + ',';
		count++;
		if (count % 15 == 0) peoNum += '\r\n';
	}
	console.log(peoNum);
	console.log( );
}