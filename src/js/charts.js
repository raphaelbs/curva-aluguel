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
			dataAtual.push(parseInt(data.atual.valor) + parseInt(data.atual.condominio));
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
			dataNovo.push(parseInt(data.desejado.valor) + parseInt(data.desejado.condominio));
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
