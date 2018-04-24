export default { 
	'SET_USER' (state, payload) {
		state.user = payload
	},
	'SET_TOKEN' (state, token) {
		state.token = {headers:{ Authorization: token }}
	},
	'SET_API' (state, url) {
		state.api = url
	}
}