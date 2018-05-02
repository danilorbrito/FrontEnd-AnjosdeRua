<template lang="pug">
    .circulo
        p {{ title }}
        .btnAcoes Detalhes

</template>

<script>
	export default {
        props:{
            title:{
                type: String,
                required: true
            }
        },
		name:'circulo'
	}
</script>

<style lang="stylus">
    .circulo 
        margin 5px
        transition 0.3s
        width 200px
        height 200px
        border-radius 50%
        display flex
        align-items center
        justify-content center
        flex-direction column
        text-align center
        padding 16px
        background-color rgba(0,0,0,0.400)
        & p
            color #fff
            text-shadow 9px 9px 9px #000

    .btnAcoes
        background-color #C6480A
        color #fff
        border-radius 3px
        cursor pointer 
        display inline-block
        padding 6px
        margin-top 20px

</style>
