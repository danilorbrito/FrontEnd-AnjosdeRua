<template lang="pug">
    #acoespromovidas
        h1 Ações Promovidas pela Ong
        
        section(style="display:flex;flex-wrap:wrap;justify-content:space-around")
            Circulo(:acao="teste")
            Circulo(:acao="teste")
            Circulo(:acao="teste")
            Circulo(:acao="teste")
            Circulo(:acao="teste")
            Circulo(:acao="teste")


</template>

<script>
    import Circulo from '../share/Circulo.vue'

	export default {
        name: 'AcoesPromovidas',
        data(){
            return{
                teste:{
                    id:'4322',
                    title:'Projeto adote um amigo'
                }
            }
        },
        components:{
            Circulo
        },
        mounted(){
            //buscar todas ações promovidas, no banco
        }
	}
</script>


<style lang="stylus">
    #acoespromovidas
        padding 5%
        background-color rgba(255,255,255,1)
        background url(../../assets/computer.png) center center no-repeat 
        background-attachment fixed
        background-size cover

        & > h1
            font-size 2.5em
            text-align center
            color #fff
            text-transform uppercase
            text-shadow 1px 1px 1px #000
            margin-bottom 50px

        & section
            width 90%
            padding-top 20px
            margin auto

    @media screen and (min-width: 768px)
        #acoespromovidas section
            width 80%

</style>
