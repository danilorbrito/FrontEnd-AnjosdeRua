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

	findByAssociado(context, nome){
		return new Promise( (resolve, reject) => {
			axios.get(`${context.getters.getApi}associados/${nome}`, context.getters.getToken ).then( r => resolve(r) )
		})	
	},

	saveAssociado(context, associado) {
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}associados`, associado, context.getters.getToken ).then( resp => {
				context.dispatch('loadAssociados')
				resolve(resp)
			})
		})
	},

	updateAssociado(context, associado) {
		return new Promise( (resolve, reject) => {
			axios.put(`${context.getters.getApi}associados`, associado, context.getters.getToken ).then( resp => {
				context.dispatch('loadAssociados')
				resolve(resp)
			})
		})
	},

	deleteAssociado(context, id) {
		return new Promise( (resolve, reject) => {
			axios.delete(`${context.getters.getApi}associados/${id}`, context.getters.getToken ).then( resp => {
				context.dispatch('loadAssociados')
				resolve(resp)
			})
		})
	}

}
