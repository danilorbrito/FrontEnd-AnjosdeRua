import axios from 'axios'

export default { 
	loadEsperas (context) {
		return new Promise( (resolve, reject) => {
			axios.get(`${context.getters.getApi}listadeespera`, context.getters.getToken ).then( resp => {
				context.commit('SET_ESPERA', resp.data.data)
				resolve(context.getters.getEsperas)
			})
		})
	},

	loadFiltro (context, filtro) {
		return axios.get(`${context.getters.getApi}filtro/${filtro.sexo}/${filtro.idademin}/${filtro.idademax}}/${filtro.raca}/${filtro.cor}`, context.getters.getToken )
	},

	saveEspera (context, espera) {
		espera.id_animal=espera.animal.id
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}listadeespera`, espera ).then( resp => {
				console.log(resp)
				context.dispatch('loadEsperas')
				resolve(resp.data.data.id)
			})
		})
	},

	deleteEspera (context, id) {
		return new Promise( (resolve, reject) => {
			axios.delete(`${context.getters.getApi}listadeespera/${id}`, context.getters.getToken ).then( resp => {
				context.dispatch('loadEsperas')
				resolve(resp)
			})
		})
	}

}