<template lang="pug">
	div
		h1.hello Welcome
		<at-tag color="default">Tag One</at-tag>
		<at-tag color="#ecefce">#ecefce</at-tag>
		
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="stylus">
	h1
		color #ccc

</style>
