(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:ClassesDeEquivalenciaService
	 * @description
	 * # ClassesDeEquivalenciaService
	 * Service of the module sala-testadores
	 */

  	angular
		.module('sala-testadores')
		.factory('ClassesDeEquivalenciaService', ClassesDeEquivalenciaService);

    	ClassesDeEquivalenciaService.$inject = ['ServiceAPI'];

		function ClassesDeEquivalenciaService (ServiceAPI) {
			return {
                getDesafios: _getDesafios,
				getValoresAluno: _getValoresAluno,
				validate: _validate,
                getClassesAluno: _getClassesAluno,
				finalizaDesafio: _finalizaDesafio
			};

            function _getDesafios(idDesafio){
                var config = { params: {login: localStorage.getItem("login"), idDesafio: idDesafio,
                    desafioId: idDesafio}};
                return ServiceAPI.get('/desafio/getDesafiosAluno', config);
            }

            function _getValoresAluno(){
            	var config = {params: {login: localStorage.getItem("login")}};
            	return ServiceAPI.get('/salaTestadores/getValoresAluno', config);
			}

			function _validate(dto){
                var requestData = { testClasse: dto};
            	return ServiceAPI.post(requestData, '/salaTestadores/testClasseEquivalencia');
			}

			function _getClassesAluno(){
				var config = {params: {login: localStorage.getItem("login")}};
				return ServiceAPI.get('/salaTestadores/getClassesAluno', config);
			}

			function _finalizaDesafio(idDesafio){
				var requestData = {login: localStorage.getItem("login"), idDesafio: idDesafio};
				return ServiceAPI.post(requestData, '/salaTestadores/finalizaDesafio');
			}
        }

})();
