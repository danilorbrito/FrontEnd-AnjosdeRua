import axios from 'axios'

export default { 
	loadAcoesPromovidas (context) {
		return new Promise( (resolve, reject) => {
			axios.get(`${context.getters.getApi}acoespromovidas` ).then( resp => {
				context.commit('SET_ACOES_PROMOVIDAS', resp.data.data)
				resolve(context.getters.getAcoesPromovidas)
			})
		})
	},

	saveAcoesPromovidas (context, AcoesPromovidas) {
		axios.post(`${context.getters.getApi}acoespromovidas`, AcoesPromovidas, context.getters.getToken ).then( resp => {
			context.dispatch('loadAcoesPromovidas')
		})
	},

	updateAcoesPromovidas (context, AcoesPromovidas) {
		axios.put(`${context.getters.getApi}acoespromovidas`, AcoesPromovidas, context.getters.getToken ).then( resp => {
			context.dispatch('loadAcoesPromovidas')
		})
	},

	deleteAcoesPromovidas (context, id) {
		axios.delete(`${context.getters.getApi}acoespromovidas/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadAcoesPromovidas')
		})
	}
}
