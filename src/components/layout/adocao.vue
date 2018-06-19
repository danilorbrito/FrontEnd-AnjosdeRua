<template lang="pug">
    #adocao
        h1  Adoção
        p Adote um amigo!
        p É Rápido, fácil sem complicação

        section#busca
            label Raça
                input(type="text", v-model="filtro.raca", placeholder="Não Obrigatório")

            label Cor
                input(type="text", v-model="filtro.cor", placeholder="Não Obrigatório")

            label Idade Máxima {{filtro.idademax}}
                <input type="range" :min="filtro.idademin" max="20" class="slider" v-model="filtro.idademax">

            label Idade mínima {{filtro.idademin}}
                <input type="range" min="1" :max="filtro.idademax" class="slider" v-model="filtro.idademin" >

            label Sexo
            select(v-model="filtro.sexo")   
                option(value="") Ambos
                option(value="m") Macho
                option(value="f") Fêmea

            button.enviar(type="button", @click="callModal") Procurar   

</template>

<script>
    import {mapActions} from 'vuex'
    import { EventBus } from '../../helpers/eventBus.js'

	export default {
        name: 'doacao',
        data()
        {
            return{
                filtro:{
                    raca:'',
                    cor:'',
                    sexo:'',
                    idademin:1,
                    idademax:20
                }
            }
        },
        methods:{
            callModal(){
                EventBus.$emit('openModalFiltro', this.filtro)
            }
        }
	}
</script>


<style lang="stylus">
    #adocao
        padding 5%
        background-color rgba(255,255,255,1)

        & h1
            font-size 2.6em
            text-align center
            color #C6480A
            text-transform uppercase
            letter-spacing 3px
        & p
            font-size 2.0em
            text-align center
            letter-spacing 2px

    #busca
        width 60%
        padding-top 20px
        margin auto
        color gray

        label
            font-size 1.3rem
            font-weight bold
            margin .3rem 0

        input[type="text"]
            width 100%
            padding .3rem
            margin .5rem 0
            background-color #fff
            border solid 1px transparent
            border-bottom 1px solid #bcbcbc

        select  
            border 1px solid #cccccc
            border-radius 3px
            padding 6px
            margin-left 20px

        button 
            padding .5rem
            border solid 1px transparent
            margin 1rem auto 0
            width 100%
            border-radius 5px
            color #3d3d3d
            font-weight bold
            font-size 1.2rem
            text-align center
            box-shadow 3px 3px 3px #ccc
            cursor pointer


    .slider 
        -webkit-appearance none
        width 100%
        height 5px
        background-color gray
        outline none
        opacity 0.7
        -webkit-transition .2s
        transition opacity .2s

    .slider:hover 
        opacity 1

    .slider::-webkit-slider-thumb 
        -webkit-appearance none
        appearance none
        width 18px
        height 18px
        background #3d3d3d
        cursor pointer
        border-radius:30px

    .slider::-moz-range-thumb 
        width 18px
        height 18px
        background #3d3d3d
        cursor pointer
        border-radius 30px

</style>
