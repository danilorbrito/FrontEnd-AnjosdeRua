import axios from 'axios'

export default { 
	loadAssociados(context) {
		return new Promise( (resolve, reject) => {
			axios.get(`${context.getters.getApi}associados`, context.getters.getToken ).then( resp => {
				context.commit('SET_ASSOCIADOS', resp.data.data)
				resolve(context.getters.getAssociados)
			})
		})
	},

	saveAssociado(context, associado) {
		axios.post(`${context.getters.getApi}associados`, associado, context.getters.getToken ).then( resp => {
			context.dispatch('loadAssociados')
		})
	},

	updateAssociado(context, associado) {
		axios.put(`${context.getters.getApi}associados`, associado, context.getters.getToken ).then( resp => {
			context.dispatch('loadAssociados')
		})
	},

	deleteAssociado(context, id) {
		axios.delete(`${context.getters.getApi}associados/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadAssociados')
		})
	}

}
