angular.module('app', ['ngMaterial', 'chart.js']);

angular.module('app').controller('configs', ['$scope', function($scope){
	$scope.clear = function(){
		$scope.atual = {};
		$scope.desejado = {};
		$scope.add = {};
	};

	$scope.fill = function(){
		$scope.atual = {
			valor: 2100,
			iptu: 600,
			condominio: 70,
			incendio: 700
		};
		$scope.desejado = {
			valor: 1400,
			iptu: 600,
			condominio: 120,
			incendio: 600
		};
		$scope.add = {
			mudanca: 1200,
			pintura: 1000,
			tempo: 30,
			prestacoes: 2
		};
	};
}]);


angular.module('app').controller('charts', ['$scope', function($scope){
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	  $scope.series = ['Series A', 'Series B'];
	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };
	  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	  $scope.options = {
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'
	        },
	        {
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }
	      ]
	    }
	  };
}]);
