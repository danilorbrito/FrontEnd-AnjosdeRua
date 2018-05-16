import axios from 'axios'

export default { 
	loadAdocoes (context) {
		return new Promise( (resolve, reject) => {
			//axios.get(`${context.getters.getApi}adocoes`, context.getters.getToken ).then( resp => {
				//context.commit('SET_ADOCOES', resp.data.data)
				resolve(context.getters.getAdocoes)
			//})
		})
	},

	saveAdocao(context, adocao) {
		axios.post(`${context.getters.getApi}adocoes`, adocao, context.getters.getToken ).then( resp => {
			context.dispatch('loadAdocoes')
		})
	},

	updateAdocao(context, adocao) {
		axios.put(`${context.getters.getApi}adocoes/${adocao.id}`, adocao, context.getters.getToken ).then( resp => {
			context.dispatch('loadAdocoes')
		})
	},

	deleteAdocao (context, id) {
		axios.delete(`${context.getters.getApi}adocoes/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadAdocoes')
		})
	}

}
