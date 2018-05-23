import axios from 'axios'

export default { 
	loadAnimais (context) {
		return new Promise( (resolve, reject) => {
			axios.get(`${context.getters.getApi}animais`, context.getters.getToken ).then( resp => {
				context.commit('SET_ANIMAIS', resp.data.data)
				resolve(context.getters.getAnimais)
			})
		})
	},

	saveAnimal (context, animal) {
		animal.adotado=0
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}animais`, animal, context.getters.getToken ).then( resp => {
				context.dispatch('loadAnimais')
				resolve(resp.data.data.id)
			})
		})
	},

	updateAnimal (context, animal) {
		axios.put(`${context.getters.getApi}animais`, animal, context.getters.getToken ).then( resp => {
			console.log( resp )
			context.dispatch('loadAnimais')
		})
	},

	deleteAnimal (context, id) {
		axios.delete(`${context.getters.getApi}animais/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadAnimais')
		})
	},


	loadImages (context, idAnimal ) {
		return axios.get(`${context.getters.getApi}imagens/animais/${idAnimal}`, context.getters.getToken )
	},

	//form data
	saveImage (context, formdata ) {
		return axios.post(`${context.getters.getApi}imagens/animais`, formdata, context.getters.getToken )
	},

	removeImage (context, id) {
		return axios.delete(`${context.getters.getApi}imagens/${id}`, context.getters.getToken )
	}

}
