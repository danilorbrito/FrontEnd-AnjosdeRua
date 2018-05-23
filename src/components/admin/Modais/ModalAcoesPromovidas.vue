<template lang="pug">
    #ModalAcoesPromovidas
        Editor(:acao="item")

</template>

<script>
    import Editor from '../../share/Editor'

	export default {
        name: 'ModalAcoesPromovidas',
        components:{
            Editor
        },
        props:["item"]
	}
</script>


<style lang="stylus">
    #ModalAcoesPromovidas
        color #3d3d3d

</style>
