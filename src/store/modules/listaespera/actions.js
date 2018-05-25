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

	saveEspera (context, animal) {
		animal.adotado=0
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}listadeespera`, animal ).then( resp => {
				context.dispatch('loadEsperas')
				resolve(resp.data.data.id)
			})
		})
	},

	deleteEspera (context, id) {
		axios.delete(`${context.getters.getApi}listadeespera/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadEsperas')
		})
	}

}