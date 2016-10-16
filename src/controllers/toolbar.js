angular.module('app').controller('toolbar', ['$scope', '$mdDialog', function($scope, $mdDialog){
	$scope.about = function(ev){
		$mdDialog.show(
			 $mdDialog.alert()
			   //.parent(angular.element(document.querySelector('#popupContainer')))
			   .clickOutsideToClose(true)
			   .title('Sobre')
			   .textContent('Este guia foi desenvolvido com intuito de facilitar a projeção de custos entre permanecer no mesmo aluguel ou mudar para outro teoricamente mais em conta. Desenvolvido e compilado por Raphael Brandão.')
			   .ariaLabel('Sobre')
			   .ok('Ok')
			   .targetEvent(ev)
		);
	};
}]);
