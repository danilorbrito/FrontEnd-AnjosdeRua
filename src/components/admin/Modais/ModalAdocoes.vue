<template lang="pug">
    #formAdocoes
        .d-flex-between(v-if="getAssociado.id")
            div
                h3 Responsável
                span.spanlink(@click="$emit('showAssociado', getAssociado )")  {{getAssociado.nome}}

            div(v-if="getAssociado.id")
                h3 Animal
                span.spanlink(@click="$emit('showAnimal', getAnimal )")  {{getAnimal.nome}}

        div(v-if="!getAssociado.id", style="margin-top:30px")
            .box-search
                input#selectAssociado(type="text", placeholder="Buscar Associado por nome", @keyup="findAssociado", v-show="!adocao.associado.nome")
                p(v-show="adocao.associado.nome")
                    strong Associado: 
                    span {{adocao.associado.nome}}
                ul#loadAssociado(v-show="filtros.associado.length > 0")
                    li(v-for="a in filtros.associado", @click="adocao.associado=a,filtros.associado=[]") {{a.nome}}

            .box-search
                input#selectAnimal(type="text", placeholder="Buscar Animal por nome", @keyup="findAnimal", v-show="!adocao.animal.nome")
                p(v-show="adocao.animal.nome") 
                    strong Animal: 
                    span {{adocao.animal.nome}}
                ul#loadAnimal(v-show="filtros.animal.length > 0")
                    li(v-for="a in filtros.animal", @click="adocao.animal=a,filtros.animal=[]") {{a.nome}}

        #conversa(v-if="getAssociado.id")
            .msg(v-for="m in mensagens", :class="{left:m.remetente!='admin', right:m.remetente=='admin'}" ) {{m.mensagem}}

        input(type="text",placeholder="Digite aqui sua mensagem", style="border-top:1px solid #ccc", v-if="getAssociado.id", @keyup.enter="sendMessage")

        .btn.success(v-if="!item.id && adocao.associado.nome && adocao.animal.nome", @click="save") Salvar Informações

</template>

<script>
    import {mapActions} from 'vuex'
    import { EventBus } from '../../../helpers/eventBus.js'

	export default {
        name: 'Adocoes',
        props:{
            item:{
                type:Object
            }
        },
        data(){
            return{
                mensagens: [],
                interval:null,
                adocao:{
                    animal:{},
                    associado:{}
                },
                filtros:{
                    associado:[],
                    animal:[]
                }
            }
        },
        mounted()
        {
            EventBus.$on('initInterval', () => {this.mensagens=[];this.initInterval()} )
            EventBus.$on('stopInterval', () => {
                this.stopInterval()
                this.adocao={animal:{},associado:{}}
            })
            let timerAssociado, timerAnimal
        },
        methods:{
            ...mapActions(['loadMessages','saveMessage','checkMessage','findByAssociado','findByAnimal','saveAdocao']),
            initInterval()
            {
                this.interval = setInterval( () => this.getMessages(), 1000)
            },
            stopInterval()
            {
                clearInterval(this.interval)
            },
            getMessages(){
                this.loadMessages(this.item.id).then(r => {
                    this.mensagens = r.data.data
                })
            },
            sendMessage(e)
            {
                this.saveMessage({remetente:'admin',mensagem:e.target.value,datahora:'',id_adocao:this.item.id}).then(r=>{
                    this.checkMessage({"id_adocao":this.item.id})
                    e.target.value=''
                })
            },
            findAssociado(a)
            {   
                clearTimeout(this.timerAssociado)
                let busca = a.target.value
                this.timerAssociado = setTimeout( () => {
                    if(busca)
                        this.findByAssociado(busca).then( r => this.filtros.associado = r.data.data )
                    else this.filtros.associado=[]
                }, 500)
            },
            findAnimal(a)
            {
                clearTimeout(this.timerAnimal)
                let busca = a.target.value
                this.timerAnimal = setTimeout( () => {
                    if(busca)
                        this.findByAnimal(busca).then( r => this.filtros.animal = r.data.data )
                    else this.filtros.animal=[]
                }, 500)
            },
            save()
            {
                this.saveAdocao(this.adocao).then(r => {
                    this.toast('Cadastrado com sucesso!')
                    this.adocao={animal:{},associado:{}}
                    EventBus.$emit('setService','Adoções')
                })
            },
            toast(message)
            {
                let toast = document.getElementById("snackbar")
                toast.innerText=message
                toast.classList.add("show")
                setTimeout( () => toast.classList.remove("show"), 3000)
            }
        },
        computed:{
            getAssociado(){
                return this.item.associado || {}
            },
            getAnimal(){
                return this.item.animal || {}
            },
            getEndereco(){
                return this.getAssociado.endereco || {}
            }
        },
	}
</script>


<style lang="stylus">
    .formAdocoes
        min-width 300px

    .spanlink
        color blue
        cursor pointer
        letter-spacing 2px
        font-size 12px
        text-transform capitalize

    #conversa
        background-color #ededed
        overflow-y auto 
        width 400px
        height 200px
        padding 5%
        margin auto

    .msg
        color #ffffff
        padding 10px
        border-radius 3px 
        text-align left
        min-width 50%
        min-height 50px
        margin-top 10px

    .left
        clear both
        float left
        background-color #F2594B

    .right
        clear both
        float right
        background-color #0092CE

    .d-flex-between
        display flex
        justify-content space-between

    .m-right
        margin-right 10px

    .box-search
        width 300px
        display flex
        flex-direction column

    #loadAssociado, #loadAnimal
        width 100%
        max-height 100px
        overflow-y auto
        list-style none
        padding 0
        outline 1px solid silver
        padding 10px
        position absolute
        z-index 200
        background-color #fff
        margin-top 40px

        & li:hover
            color gray
            font-weight bold
            cursor pointer

</style>
