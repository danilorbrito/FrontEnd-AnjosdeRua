<template lang="pug">
	#app
		router-view

</template>

<script>
	export default {
		name: 'App'
	}
</script>


<style lang="stylus">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300')

	*
		margin 0
		box-sizing border-box 
		font-family 'Open Sans Condensed', sans-serif

	body 
		background #000 url(./assets/bg.jpg) center center no-repeat 
		background-attachment fixed
		background-size cover

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
