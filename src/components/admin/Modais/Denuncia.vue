<template lang="pug">
    #formDenuncia
        h3 Denúncia
        p {{item.descricao}}
        input(placeholder="Delator", v-model="item.delator")
        input(placeholder="Descrição do local", v-model="item.descricaoLocal")
        input(placeholder="Data da denúncia", v-model="item.datahora")

</template>

<script>
	export default {
        name: 'Denuncia',
        props:["item"]
	}
</script>


<style lang="stylus">
    .formDenuncia
        width 400px

</style>
