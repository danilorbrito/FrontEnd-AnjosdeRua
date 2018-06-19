<template lang="pug">
    .circulo
        p {{ acao.titulo }}
        .btnAcoes(@click="callModal(acao)") 
            i.material-icons info
                span Detalhes

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
                EventBus.$emit('openModalAcoes', this.acao)
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
        border-radius 25%
        display flex
        align-items center
        justify-content center
        flex-direction column
        text-align center
        padding 16px
        background-color rgba(255,255,255,.9)

        & p
            color #3d3d3d
            font-size 1.1em
            height 55px

    .btnAcoes
        background-color #ccc
        color #3d3d3d
        border-radius 3px
        cursor pointer 
        display flex
        align-items center
        padding 10px
        margin-top 20px
        font-size 1em
        box-shadow 4px 6px 4px #ccc

</style>
