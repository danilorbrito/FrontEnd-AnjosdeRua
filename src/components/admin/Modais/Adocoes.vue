<template lang="pug">
    #formAdocoes
        .d-flex-between(v-if="getAssociado.id")
            div
                h3 Responsável
                span.spanlink(@click="$emit('showAssociado', getAssociado )")  {{getAssociado.nome}}

            div(v-if="getAssociado.id")
                h3 Animal
                span.spanlink(@click="$emit('showAnimal', getAnimal )")  {{getAnimal.nome}}


        div(v-if="!getAssociado.id")
            input(placeholder="Buscar Associado por nome")

        div(v-if="!getAnimal.id")
            input(placeholder="Buscar Animal por nome")
            

        #conversa(v-if="getAssociado.id")
            .msg.left Texto da mensagem bem aqui
            .msg.left Texto da mensagem bem aqui Texto da mensagem bem aqui Texto da mensagem bem aqui
            .msg.left Texto da mensagem bem aqui Texto da mensagem bem aqui Texto da mensagem bem aqui
            .msg.right Texto da mensagem bem aqui
            .msg.right Texto da mensagem bem aqui Texto da mensagem bem aqui Texto da mensagem bem aqui
            .msg.right Texto da mensagem bem aqui
            .msg.right Texto da mensagem
            .msg.right Texto da mensagem bem aqui

        input(placeholder="Digite aqui sua mensagem",style="border-top:1px solid #ccc", v-if="getAssociado.id")

        .btn.success(v-if="!item.id") Salvar Informações

</template>

<script>
	export default {
        name: 'Adocoes',
        props:{
            item:{
                type:Object
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
</style>
