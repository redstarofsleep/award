var awardModule = angular.module('awardModule', []);
awardModule.controller('AwardController', function($scope, $http, $interval) {

	// 显示所有中奖号码
	$scope.showAll = false;

	$scope.lucks = [
		// cols:一个号码的宽度，按照bootstrap的12列宽度分，如果cols=12则一行一个号码，如果cols=6则一行2个号码
		// width：号码区域的宽度，按照bootstrap的12列宽度分，width=2则号码区域占两列，左右两个图各占（12-2）/2=5列。如果width=4则号码区域占4列，左右两个图各占（12-4）/2=4列
		// center: 一页上显示的号码个数，这个参数只用来控制数字的垂直居中，center=5不空行，center=2空一行，center=1空两行
		{'id':0, 'name':'三等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':0, 'cols':12, 'width':2},
		{'id':1, 'name':'三等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':5, 'cols':12, 'width':2},
		{'id':2, 'name':'三等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':10, 'cols':12, 'width':2},
		{'id':3, 'name':'三等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':15, 'cols':12, 'width':2},
		{'id':4, 'name':'三等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':20, 'cols':12, 'width':2},
		{'id':5, 'name':'三等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':25, 'cols':12, 'width':2},
		// {'id':6, 'name':'幸运奖', 'contents':[{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},
		// 	{'title':'000000'},{'title':'000000'},{'title':'000000'}], 'center':5, 'btn':0, 'start':60, 'cols':6, 'width':4},
		// {'id':7, 'name':'幸运奖', 'contents':[{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},{'title':'000000'},
		// 	{'title':'000000'},{'title':'000000'},{'title':'000000'}], 'center':5, 'btn':0, 'start':70, 'cols':6, 'width':4},


		{'id':6, 'name':'二等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':30, 'cols':12, 'width':2},
		{'id':7, 'name':'二等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':35, 'cols':12, 'width':2},
		// {'id':12, 'name':'二等奖', 'contents':[{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'},{'title':'00000'}], 'center':5, 'btn':0, 'start':84, 'cols':12, 'width':2},

		// {'id':13, 'name':'二等奖', 'contents':[{'title':'000000'}], 'center':1, 'btn':0, 'start':86, 'cols':12, 'width':2},
		// {'id':14, 'name':'二等奖', 'contents':[{'title':'000000'}], 'center':1, 'btn':0, 'start':87, 'cols':12, 'width':2},
		// {'id':15, 'name':'二等奖', 'contents':[{'title':'000000'}], 'center':1, 'btn':0, 'start':88, 'cols':12, 'width':2},

		{'id':8, 'name':'一等奖', 'contents':[{'title':'00000'}], 'center':1, 'btn':0, 'start':40, 'cols':12, 'width':2},

		{'id':9, 'name':'特等奖', 'contents':[{'title':'00000'}], 'center':1, 'btn':0, 'start':41, 'cols':12, 'width':2}
	];

	$scope.awardCount = 0;

	var phones = null;
	var goodLuckPhones = null;

	$http({'url':'/award/start', 'method':'get'}).success(function(data, status) {
		$http({'url':'/award/phones', 'method':'get'}).success(function(data, status) {
			phones = data;
		});

		$http({'url':'/award/lucks', 'method':'get'}).success(function(data, status) {
			goodLuckPhones = data;
		});
	});

	var timer = null;

	// $scope.startLuck = function(num) {
	$scope.startLuck = function() {
		$scope.lucks[$scope.awardCount].btn++;
		timer = $interval(function() {
			var selNums = radamNum($scope.lucks[$scope.awardCount].contents.length, phones);
			for (var i = 0; i < selNums.length; i++) {
				$scope.lucks[$scope.awardCount].contents[i].title = selNums[i];
			}
		}, 40);
	};
	// $scope.endLuck = function(num, start, count) {
	$scope.endLuck = function() {
		$interval.cancel(timer);
		$scope.lucks[$scope.awardCount].btn++;
		for (var j = 0; j < $scope.lucks[$scope.awardCount].contents.length; j++) {
			$scope.lucks[$scope.awardCount].contents[j].title = goodLuckPhones[$scope.lucks[$scope.awardCount].start+j];
		}
	};

	$scope.retryIndex = {};
	$scope.retry = function(num, index) {
		if (!confirm('确定要重抽吗?')) return;

		$scope.lucks[num].contents[index].title = '000000';
		$scope.lucks[num].btn = 3;

		$scope.retryIndex.num = num;
		$scope.retryIndex.index = index;
	};
	$scope.startRetry = function() {
		$scope.lucks[$scope.retryIndex.num].btn++;
		timer = $interval(function() {
			var selNums = radamNum(1, phones);
			$scope.lucks[$scope.retryIndex.num].contents[$scope.retryIndex.index].title = selNums[0];
		}, 40);
	};
	$scope.endRetry = function() {
		$interval.cancel(timer);
		$scope.lucks[$scope.retryIndex.num].btn++;
		var current = new Date().getTime();
		$http({'url':'/award/retry?time='+current, 'method':'get'}).success(function(data, status) {
			$scope.lucks[$scope.retryIndex.num].contents[$scope.retryIndex.index].title = data;
		});
	};

	$scope.next = function() {
		$scope.awardCount++;
	};
	$scope.last = function() {
		$scope.awardCount--;
	};

	$scope.showAllFun = function() {
		if ($scope.showAll == false)
			$scope.showAll = true;
		else
			$scope.showAll = false;
	};

	$scope.$on('$destroy',function(event) {
		alert(0);
		$interval.cancel(timer);
	});

  $scope.keypressNum = 0;
	$scope.pressspace = function($event) {
		// alert($event.keyCode);
		if ($event.keyCode==32) {
			if ($scope.keypressNum == 0) {
				$scope.keypressNum =1;
				$scope.startLuck();
			} else {
				$scope.keypressNum =0;
				$scope.endLuck();
			}
		}
	};
});
