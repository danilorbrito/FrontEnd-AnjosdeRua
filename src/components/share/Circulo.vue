<template lang="pug">
    .circulo
        p {{ acao.title }}
        .btnAcoes(@click="callModal(acao)") Detalhes

</template>

<script>
    import { EventBus } from '../../helpers/eventBus.js'

	export default {
        props:{
            acao:{
                type: Object,
                required: true
            }
        },
        name:'circulo',
        methods:{
            callModal(){
                EventBus.$emit('showAction', this.acao)
            }
        }
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
        box-shadow 3px 3px 3px #ccc
        background-color rgba(255,255,255,0.400)
        & p
            color #3d3d3d
            text-shadow 9px 9px 9px #000
            font-size 1.5em

    .btnAcoes
        background-color #C6480A
        color #fff
        border-radius 3px
        cursor pointer 
        display inline-block
        padding 6px
        margin-top 20px

</style>
