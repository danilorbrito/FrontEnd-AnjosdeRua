import axios from 'axios'

export default { 
	loadDenuncias (context) {
		return new Promise( (resolve, reject) => {
			//axios.get(`${context.getters.getApi}denuncias`, context.getters.getToken ).then( resp => {
				//context.commit('SET_DENUNCIAS', resp.data.data)
				resolve(context.getters.getDenuncias)
			//})
		})
	},

	deleteDenuncia (context, id) {
		axios.delete(`${context.getters.getApi}denuncias/${id}`, context.getters.getToken ).then( resp => {
			context.dispatch('loadDenuncias')
		})
	}

}
