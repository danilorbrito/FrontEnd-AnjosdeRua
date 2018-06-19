<template lang="pug">
	#app
		router-view
		#snackbar

</template>

<script>
	export default {
		name: 'App',
	}
</script>


<style lang="stylus">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300')
	@import url('./styl/Toast.styl')

	*
		margin 0
		box-sizing border-box 
		font-family 'Open Sans Condensed', sans-serif

	body 
		background #000 url(./assets/bg.jpg) center center no-repeat 
		background-attachment fixed
		background-size cover

	.has-danger small
		color #C6480A
		display block
		font-size .7em
		font-weight normal
		display none

	a
		text-decoration none

	.main
		width 90%
		margin auto	

	.flex
		display flex
		justify-content space-between
		align-items center
		
	@media screen and (min-width: 992px)
		.main
			width 80%

</style>
