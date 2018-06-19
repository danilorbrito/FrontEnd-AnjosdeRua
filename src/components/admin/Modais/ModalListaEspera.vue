<template lang="pug">
    #ModalListaEspera
        h3 Lista de espera para adoção
        div.d-flex
            input.m-right(type="text",placeholder="Nome", v-model="item.nome" readonly)
            input(type="email",placeholder="E-mail", v-model="item.email" readonly)

        input(type="text",placeholder="Telefone", v-model="item.telefone" readonly)
        p
            strong Animal: 
            span(style="cursor:pointer",@click="$emit('showAnimal2', getAnimal )") {{getAnimal.nome}}

</template>

<script>
	export default {
        name: 'ModalListaEspera',
        props:{
            item:{
                type:Object
            }
        },
        computed:{
            getAnimal()
            {
                return this.item.animal || {}
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
