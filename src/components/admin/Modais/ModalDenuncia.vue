<template lang="pug">
    #formDenuncia
        h3 Denúncia
        p {{item.descricao}}
        input(type="text",placeholder="Delator", v-model="item.delator" readonly)
        input(type="text",placeholder="Descrição do local", v-model="item.descricao_local" readonly)
        input(type="text",placeholder="Data da denúncia", v-model="item.dt_denuncia" readonly)

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
