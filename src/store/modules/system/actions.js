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
			axios.post(`${context.getters.getApi}adminauthentication`, user ).then( resp => {
				let token  = JSON.parse(resp.data.data.response).token 
				context.commit('SET_TOKEN', token )
				resolve()
			})
			.catch(err => reject(err))
		})
	}
}
