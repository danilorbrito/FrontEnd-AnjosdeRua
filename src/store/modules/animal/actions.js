import axios from 'axios'

export default { 
	loadAnimais (context) {
		return new Promise( (resolve, reject) => {
			//axios.get(`${context.getters.getApi}animais`, context.getters.getToken ).then( resp => {
				//context.commit('SET_ANIMAIS', resp.data.data)
				resolve(context.getters.getAnimais)
			//})
		})
	},

	saveAnimal (context, animal) {
		/*
		axios.post(`${context.getters.getApi}animais`, animal, context.getters.getToken ).then( resp => {
			context.dispatch('loadAnimais')
		})
		*/
		console.log( JSON.stringify(animal) )
	},

	updateAnimal (context, animal) {
		/*
		axios.put(`${context.getters.getApi}animais/${animal.id}`, animal, context.getters.getToken ).then( resp => {
			context.dispatch('loadAnimais')
		})
		*/
		console.log( JSON.stringify(animal) )
	},

	deleteAnimal (context, id) {
		//axios.delete(`${context.getters.getApi}animais/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadAnimais')
		//})
	},

	loadImages (context, idAnimal ) {
		return axios.post(`${context.getters.getApi}imagens/${id}`, context.getters.getToken )
	},

	//form data
	saveImage (context, formdata ) {
		return axios.post(`${context.getters.getApi}imagens`, formdata, context.getters.getToken )
	},

	removeImage (context, id) {
		//return axios.delete(`${context.getters.getApi}imagens/${id}`, context.getters.getToken )
	}

}
