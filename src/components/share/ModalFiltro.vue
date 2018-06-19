<template lang="pug">
    div
        div(:class="{'modal-frame':true, 'state-appear':status}")
            .modal
                .modal-inset
                    i.material-icons.button.close(@click="status=false") close

                    h1(v-if="!form") Resultado da busca
                    h1(v-if="form") Formulário de Adoção
                    .modal-body(style="overflow:auto;max-height:300px;padding-top:20px;")
                        div(v-if="!form")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true") 
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")
                            div(style="width:200px;height:100px;outline:1px solid red;display:inline-block;", @click="form=true")

                        div(v-if="form")
                            form#formEspera
                                p Animal: ...
                                label Nome
                                    input(type="text", name="nome" , v-model="espera.nome", required)

                                label E-mail
                                    input(type="email", v-model="espera.email", required)

                                label Telefone
                                    input(type="text", v-model="espera.telefone", required)
                                    
                                button.enviar(@click="sendForm") Enviar dados

        div(:class="{'modal-overlay':true, 'state-show':status}")
            
</template>

<script>
    import {mapActions} from 'vuex'
    import { EventBus } from '../../helpers/eventBus.js'

	export default {
        data()
        {
            return{
                status:false,
                form:false,
                espera:	{
                    nome: '',
                    email: '',
                    telefone: '',
                    animal: {}
                }
            }
        },
        name: 'ModalFiltro',
        mounted(){
            EventBus.$on('openModalFiltro', filtro => {
                this.form=false
                this.status=true
                //manda o filtro para o backend e listar o resultado
            })
        },
        methods:{
            ...mapActions(['saveEspera','loadFiltro']),
            sendForm()
            {
                if( this.willvalidate( document.querySelector("#formEspera") ) )
                {
                    this.saveEspera(this.espera).then(e=> {
                        this.toast('Obrigado ! Aguarde nosso contato')
                        this.form=false
                        this.status=false
                    })
                }
                else this.toast("Informe os dados corretamente")
            },
            toast(message)
            {
                let toast = document.getElementById("snackbar")
                toast.innerText=message
                toast.classList.add("show")
                setTimeout( () => toast.classList.remove("show"), 3000)
            }
        }
	}
</script>

<style lang="stylus" >
@import '../../styl/Modal.styl'

#formEspera
    width 100%
    margin auto

    & input[type="text"],input[type="email"]
        border none
        outline none
        border-bottom 1px solid #ccc
        width 100%
        margin-bottom 10px

    & label
        display block
        text-align left

    & button 
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

</style>
