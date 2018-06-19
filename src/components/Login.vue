<template lang="pug">
	#login
		div#formlogin
			input(type="text", placeholder="Login", v-model="user.login")
			input(type="password", placeholder="Senha", v-model="user.password")
			button(@click="logar") Fazer Login

</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		name: 'login',
		data(){
			return{
				user :{
					login:"chefao01",
					password:"chefao01"
				}
			}
		},
		methods:{
			...mapActions(['loginUser']),
			logar()
			{
				if(this.user.login && this.user.password)
				{
					this.loginUser(this.user).then(r=> {
						this.$router.push("admin")
					})
				}
				else this.toast('Por favor, Preencha os campos!')
			},
            toast(message)
            {
                let toast = document.getElementById("snackbar")
                toast.innerText=message
                toast.classList.add("show")
                setTimeout( () => toast.classList.remove("show"), 3000)
            }
		}
	}
</script>


<style lang="stylus">
	#login
		position fixed
		top 0
		right 0
		bottom 0
		left 0
		background-color #F5F8FA
		overflow-y auto
		overflow-x hidden

	#formlogin
		width 50%
		min-width 300px
		max-width 550px
		margin 10% auto

		& input[type="text"], input[type="email"],input[type="password"]
			padding 8px
			border-radius 3px
			border none 
			outline none
			width 100%
			margin-bottom 10px
			background-color #3d3d3d
			color #fff

		& button 
			background-color #0092CE
			color #fff
			border none 
			outline none 
			border-radius 3px
			padding 10px
			cursor pointer
			width 100%

</style>
