import axios from 'axios'

export default { 
	setApi (context, url) {
		context.commit('SET_API', url)
	},

	setUser (context, user) {
		context.commit('SET_USER', user)
	},

	loginUser(context, user){
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}authentication`, user ).then( resp => {
				let { token } = resp.data.response
				context.commit('SET_TOKEN', JSON.parse(token) )
			})
			.catch(err => reject(err))
		})
	}
}
