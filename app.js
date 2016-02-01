(function() {
	var app = angular.module('app', []);
	app.controller('MainCtrl', ['$scope', function($scope){
		$scope.tasks = [
			{
				name: "To mark the task as 'done' click the text",
				done: false,
				editable: false
			},
			{
				name: "If you want to uncheck the task — press the text again",
				done: true,
				editable: false
			},
			{
				name: "If the task marked as 'done', you can delete it by clicking checkmark",
				done: true,
				editable: false
			},
			{
				name: "Press the button on the right to open the editing mode",
				done: false,
				editable: false
			},
			{
				name: "After editing press the checkmark to finish",
				done: false,
				editable: true
			}
		];
		$scope.eEditable= -1; //-1 by default. It doesn't match any $index from ng-repeat
		$scope.tagStart = "<div>Wow1</div>";
		$scope.add = function(newtask) {
			if (newtask.name != ""){
				var task = {};
				task.name = newtask.name;
				task.done = false;
				task.editable = false;
				$scope.tasks.push(task);
				newtask.name = "";
			}

		};

		$scope.delete = function(task) {
			for (var i=0; i < $scope.tasks.length; i++) {
				if($scope.tasks[i].name === task.name) {
					$scope.tasks.splice(i,1);
					break;
				}
			}
		};
		$scope.toggle = function(task) {
			for (var i=0; i<$scope.tasks.length;i++) {
				if($scope.tasks[i].name === task.name) {
					$scope.tasks[i].done = !$scope.tasks[i].done;
				}
			}
		}
		$scope.write = function(task) {
			for (var i=0; i < $scope.tasks.length; i++) {
				if($scope.tasks[i].name === task.name) {
					if($scope.tasks[i].done == false) {
						$scope.tasks[i].editable = !$scope.tasks[i].editable;
						break;
					} else {
						$scope.tasks.splice(i,1);
						break;
					}
					
				}
			}
		};
		$scope.allCkecked = false;
		$scope.ckeckAll = function(){
			if($scope.allCkecked === false){
				for(var i=0; i<$scope.tasks.length; i++){
					if($scope.tasks[i].done === false)
					{
						$scope.tasks[i].done = true;
					}
				}
				$scope.allCkecked = true;
			} else {
				for(var i=0; i<$scope.tasks.length; i++){
					$scope.tasks[i].done = false;
				}
				$scope.allCkecked = false;
			}
		};
		$scope.deleteAll = function(){
			$scope.tasks.splice(0,$scope.tasks.length);
		};
		$scope.deleteCkecked = function(){

			for(var i = $scope.tasks.length-1; i>-1; i--){
				if ($scope.tasks[i].done === true) $scope.tasks.splice(i, 1);
			}
		};

	}]);
	

})();