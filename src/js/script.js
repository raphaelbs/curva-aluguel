angular.module('app', ['ngMaterial', 'chart.js']);

angular.module('app').value('data', {});

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


angular.module('app').controller('charts', ['$scope', 'data', function($scope, data){
	$scope.refresh = function(){
		console.log(data);
	};

	$scope.run = function(){
		$scope.labels = [];
		for(var i=1; i<data.add.tempo; i++)
			$scope.labels.push(i);

		$scope.series = ['Atual', 'Desejado'];
		$scope.edata = [];
		// Apto atual
		var dataAtual = [];
		for(var i=1; i<data.add.tempo; i++)
			dataAtual.push(data.atual.valor + data.atual.condominio);
		// Adiciona valor do IPTU
		var iptuPrest = data.atual.iptu/data.add.prestacoes.iptu;
		for(var i=0; i<data.add.prestacoes.iptu; i++)
			dataAtual[i] += iptuPrest;
		// Adiciona valor da taxa de incêndio
		var incendioPrest = data.atual.incendio/data.add.prestacoes.incendio;
		for(var i=0; i<data.add.prestacoes.incendio; i++)
			dataAtual[i] += incendioPrest;
		$scope.edata.push(dataAtual);


		// Novo apto
		var dataNovo = [];
		for(var i=1; i<=data.add.tempo; i++)
			dataNovo.push(data.desejado.valor + data.desejado.condominio);
		// Adiciona valor da mudança
		var mudancaPrest = data.add.mudanca/data.add.prestacoes.mudanca;
		for(var i=0; i<data.add.prestacoes.mudanca; i++)
			dataNovo[i] += mudancaPrest;
		// Adiciona valor da pintura
		var pinturaPrest = data.add.pintura/data.add.prestacoes.pintura;
		for(var i=0; i<data.add.prestacoes.pintura; i++)
			dataNovo[i] += pinturaPrest;
		// Adiciona valor do IPTU
		var iptuPrest = data.desejado.iptu/data.add.prestacoes.iptu;
		for(var i=0; i<data.add.prestacoes.iptu; i++)
			dataNovo[i] += iptuPrest;
		// Adiciona valor da taxa de incêndio
		var incendioPrest = data.desejado.incendio/data.add.prestacoes.incendio;
		for(var i=0; i<data.add.prestacoes.incendio; i++)
			dataNovo[i] += incendioPrest;
		$scope.edata.push(dataNovo);

		$scope.dataAtualSoma = 0;
		dataAtual.forEach(function(n){
			$scope.dataAtualSoma += n;
		});

		$scope.dataNovoSoma = 0;
		dataNovo.forEach(function(n){
			$scope.dataNovoSoma += n;
		});

		console.log($scope.edata);

		$scope.options = {
			scales: {
			  yAxes: [
			    {
			      id: 'y-axis-1',
			      type: 'linear',
			      display: true,
			      position: 'left'
			    }
			  ]
			}
		};
	};
}]);
