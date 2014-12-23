var awardModule = angular.module('awardModule', []);
awardModule.controller('AwardController', function($scope, $http, $interval) {
			
	$scope.lucks = [
		{'id':0, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':0}, 
		{'id':1, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':5}, 
		{'id':2, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':10}, 
		{'id':3, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':15}, 
		{'id':4, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':20}, 
		{'id':5, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':25}, 
		{'id':6, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':30}, 
		{'id':7, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':35}, 
		{'id':8, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':40}, 
		{'id':9, 'name':'幸运奖', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':5, 'btn':0, 'start':45}, 
				
		{'id':10, 'name':'三等奖', 'contents':[{'title':'8888'},{'title':'8888'}], 'center':2, 'btn':0, 'start':50}, 
		{'id':11, 'name':'三等奖', 'contents':[{'title':'8888'},{'title':'8888'}], 'center':2, 'btn':0, 'start':52},
		{'id':12, 'name':'三等奖', 'contents':[{'title':'8888'},{'title':'8888'}], 'center':2, 'btn':0, 'start':54}, 
				
		{'id':13, 'name':'二等奖', 'contents':[{'title':'8888'}], 'center':1, 'btn':0, 'start':56},
		{'id':14, 'name':'二等奖', 'contents':[{'title':'8888'}], 'center':1, 'btn':0, 'start':57},
		{'id':15, 'name':'二等奖', 'contents':[{'title':'8888'}], 'center':1, 'btn':0, 'start':58},
				
		{'id':16, 'name':'一等奖候选', 'contents':[{'title':'8888'},{'title':'8888'},{'title':'8888'}], 'center':3, 'btn':0, 'start':59},

		{'id':17, 'name':'特等奖', 'contents':[{'title':'8888'}], 'center':1, 'btn':0, 'start':62}
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

	$scope.startLuck = function(num) {
		$scope.lucks[num].btn++;
		timer = $interval(function() {
			var selNums = radamNum($scope.lucks[num].contents.length, phones);
			for (var i = 0; i < selNums.length; i++) {
				$scope.lucks[num].contents[i].title = selNums[i];
			}
		}, 40);
	};
	$scope.endLuck = function(num, start, count) {
		$interval.cancel(timer);
		$scope.lucks[num].btn++;
		for (var j = 0; j < count; j++) {
			$scope.lucks[num].contents[j].title = goodLuckPhones[start+j];
		}
	};

	$scope.retryIndex = {};
	$scope.retry = function(num, index) {
		if (!confirm('确定要重抽吗?')) return;

		$scope.lucks[num].contents[index].title = '8888';
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

	$scope.$on('$destroy',function(event) {
		$interval.cancel(timer);
	});
});