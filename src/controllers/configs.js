angular.module('app').controller('configs', ['$scope', 'data', function($scope, data){


	$scope.clear = function(){
		delete data.atual.valor;
		delete data.atual.iptu;
		delete data.atual.condominio;
		delete data.atual.incendio;

		delete data.desejado.valor;
		delete data.desejado.iptu;
		delete data.desejado.condominio;
		delete data.desejado.incendio;

		delete data.add.mudanca;
		delete data.add.pintura;
		delete data.add.tempo;
		delete data.add.prestacoes.mudanca;
		delete data.add.prestacoes.pintura;
		delete data.add.prestacoes.iptu;
		delete data.add.prestacoes.incendio;
	};

	$scope.fill = function(){
		data.atual.valor = 2100;
		data.atual.iptu = 600;
		data.atual.condominio = 70;
		data.atual.incendio = 700;

		data.desejado.valor = 1400;
		data.desejado.iptu = 600;
		data.desejado.condominio = 120;
		data.desejado.incendio = 600;

		data.add.mudanca = 1200;
		data.add.pintura = 1000;
		data.add.tempo = 30;
		data.add.prestacoes.mudanca = 10;
		data.add.prestacoes.pintura = 10;
		data.add.prestacoes.iptu = 10;
		data.add.prestacoes.incendio = 10;
	};

	data.atual = {};
	data.desejado = {};
	data.add = {};
	data.add.prestacoes = {};
	$scope.atual = data.atual;
	$scope.desejado = data.desejado;
	$scope.add = data.add;
}]);
