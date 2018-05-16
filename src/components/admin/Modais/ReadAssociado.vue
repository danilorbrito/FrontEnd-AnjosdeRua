<template lang="pug">
    #formAssociado
        h3 Associados
        input(placeholder="Id", v-if="item.id", v-model="item.id")

        div.d-flex
            input.m-right(placeholder="Nome", v-model="item.nome")
            input(placeholder="E-mail", v-model="item.email")

        p.d-flex
            span Masculino
            input(type="radio", name="sexo", value="m", :checked=" item.sexo == 'm' ", v-model="item.sexo" )

            span Feminino   
            input(type="radio", name="sexo", value="f", :checked=" item.sexo == 'f' ", v-model="item.sexo"  )

        div.d-flex
            input.m-right(placeholder="Rua", v-model="getEndereco.rua")
            input(placeholder="Número", v-model="getEndereco.numero")

        div.d-flex
            input.m-right(placeholder="Bairro", v-model="getEndereco.bairro")
            input(placeholder="Cidade", v-model="getEndereco.cidade")

        div.d-flex
            input.m-right(placeholder="Cep", v-model="getEndereco.cep")

        .btn.success(v-if="!item.id", @click="saveAssociado(item)") Salvar Informações
        .btn.warning(v-if="item.id", @click="updateAssociado(item)") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'

	export default {
        name: 'ReadAssociado',
        props:{
            item:{
                type:Object
            }
        },
        computed:{
            getEndereco(){
                return this.item.endereco || {}
            }
        },
		methods:{
            ...mapActions([
                'saveAssociado',
                'updateAssociado'
            ])
		}
	}
</script>


<style lang="stylus">
    .d-flex
        display flex
        margin-bottom 3%

    .m-right
        margin-right 10px

</style>
