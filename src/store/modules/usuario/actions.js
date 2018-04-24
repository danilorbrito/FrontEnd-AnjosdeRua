import axios from 'axios'

export default { 
	setApi (context, url) {
		context.commit('SET_API', url)
	},

	saveUser (context, user) {
		return new Promise( (resolve, reject) => {

			axios.get(`${context.getters.getApi}user?email=${user.email}`, context.getters.getToken ).then(res=>{
				if(res.data.data[0]._id) reject("Este e-mail está indisponível!")
			})
			.catch(err => {
				axios.post(`${context.getters.getApi}user`, user, context.getters.getToken ).then(r=>{
					resolve("Salvo com sucesso")
				})
				.catch(err => reject("Não foi possivel salvar"))
			})

		})
	},

	setUser (context, user) {
		context.commit('SET_USER', user)
	},

	updateUser (context, user) {
		axios.put(`${context.getters.getApi}user/${user._id}`, user, context.getters.getToken ).then( res => {
			context.dispatch('setUser', user)
			alert("Alterado com sucesso!!")
		})
	},

	loadUsers(context) {
		return axios.get(`${context.getters.getApi}user`, context.getters.getToken )
	},

	loginUser(context, user){
		return new Promise( (resolve, reject) => {
			axios.post(`${context.getters.getApi}authentication`, user ).then( resp => {

				context.commit('SET_TOKEN', resp.data.accessToken)
				context.dispatch("loadFisicas")
	  
				axios.get(`${context.getters.getApi}user?email=${user.email}`, context.getters.getToken).then( r => {
				  context.dispatch("setUser", r.data.data[0])
				  resolve(r.data.data[0])
				})
				.catch(err => reject(err))

			})
			.catch(err => reject(err))
		})
	}
}
