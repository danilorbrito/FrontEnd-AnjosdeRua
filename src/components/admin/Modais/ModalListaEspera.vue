<template lang="pug">
    #ModalListaEspera
        h3 Lista de espera para adoção
        div.d-flex
            input.m-right(placeholder="Nome", v-model="item.nome")
            input(placeholder="E-mail", v-model="item.email")

        input(placeholder="Telefone", v-model="item.telefone")
        p {{item.descricao_animal}}

</template>

<script>
	export default {
        name: 'ModalListaEspera',
        props:{
            item:{
                type:Object
            }
        }
	}
</script>


<style lang="stylus">
    .ModalListaEspera
        min-width 300px

    .d-flex
        display flex

    .m-right
        margin-right 10px
</style>
