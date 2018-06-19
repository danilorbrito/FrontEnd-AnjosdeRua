import axios from 'axios'

export default { 
	loadAdocoes (context) {
		return new Promise( (resolve, reject) => {
			axios.get(`${context.getters.getApi}adocoes`, context.getters.getToken ).then( resp => {
				context.commit('SET_ADOCOES', resp.data.data)
				resolve(context.getters.getAdocoes)
			})
		})
	},

	saveAdocao(context, adocao) {
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}adocoes`, adocao, context.getters.getToken ).then( resp => {
				context.dispatch('loadAdocoes')
				resolve(resp)
			})
		})
	},

	updateAdocao(context, adocao) {
		axios.put(`${context.getters.getApi}adocoes/${adocao.id}`, adocao, context.getters.getToken ).then( resp => {
			context.dispatch('loadAdocoes')
		})
	},

	deleteAdocao (context, id) {
		return new Promise( (resolve, reject) => {
			axios.delete(`${context.getters.getApi}adocoes/${id}`, context.getters.getToken ).then( resp => {
				context.dispatch('loadAdocoes')
				resolve(resp)
			})
		})
	},

	loadMessages (context, id) {
		return axios.get(`${context.getters.getApi}mensagens/adocao/${id}`, context.getters.getToken )
	},

	saveMessage (context, message ) {
		return axios.post(`${context.getters.getApi}mensagens`, message,  context.getters.getToken )
	},

	checkMessage (context, id_adocao ) {
		axios.put(`${context.getters.getApi}mensagens/visualizada`, id_adocao,  context.getters.getToken )
	},

	async getNotifications(context, id_adocao)
	{
		let d = await axios.get(`${context.getters.getApi}mensagens/visualizar/admin/${id_adocao}`, context.getters.getToken )
		return d.data.data.total
	}

}
