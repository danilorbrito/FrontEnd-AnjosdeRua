<template lang="pug">
    #ModalListaEspera
        h3 Lista de espera para adoção
        div.d-flex
            input.m-right(type="text",placeholder="Nome", v-model="item.nome" readonly)
            input(type="email",placeholder="E-mail", v-model="item.email" readonly)

        input(type="text",placeholder="Telefone", v-model="item.telefone" readonly)
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
