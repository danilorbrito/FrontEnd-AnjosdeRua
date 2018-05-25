<template lang="pug">
    #formAssociado
        h3 Associados
        input(placeholder="Id", v-show="false", v-model="item.id")

        div.d-flex
            input.m-right(placeholder="Nome", v-model="item.nome")
            input(placeholder="E-mail", v-model="item.email")

        input(placeholder="Pass", v-model="item.pass")

        p.d-flex
            span Masculino
            input(type="radio", name="sexo", value="m", :checked=" item.sexo == 'm' ", v-model="item.sexo" )

            span Feminino   
            input(type="radio", name="sexo", value="f", :checked=" item.sexo == 'f' ", v-model="item.sexo"  )

        div.d-flex
            input.m-right(placeholder="Rua", v-model="getEndereco.logradouro")
            input.m-right(placeholder="Número", v-model="getEndereco.numero")
            input(placeholder="Bairro", v-model="getEndereco.bairro")

        div.d-flex
            input.m-right(placeholder="Cidade", v-model="getEndereco.cidade")
            input.m-right(placeholder="Estado", v-model="getEndereco.estado")
            input(placeholder="Cep", v-model="getEndereco.cep")

        span Telefones
        input(placeholder="Informe o telefone e pressione enter", @keyup.enter="addFone" )

        .fones(v-for="(f, index) in getTelefones") {{ f.numero }} 
            span(@click="remove(index)") X

        br
        .btn.success(v-if="!item.id", @click="save") Salvar Informações
        .btn.warning(v-if="item.id", @click="updateAssociado(item)") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'

	export default {
        name: 'ModalAssociado',
        props:{
            item:{
                type:Object
            }
        },
        data(){
            return{
                telefones:[]
            }
        },  
        computed:{
            getEndereco(){
                return this.item.endereco || {}
            },
            getTelefones(){
                return this.item.telefones || this.telefones
            }
        },
		methods:{
            ...mapActions([
                'saveAssociado',
                'updateAssociado'
            ]),
            addFone( e ){
                let f = {id:null, numero:e.target.value, tipo:""}

                this.item.telefones ? this.item.telefones.push(f) : this.telefones.push(f)
                e.target.value=""
            },
            remove(i){
                this.item.telefones ? this.item.telefones.splice(i, 1) : this.telefones.splice(i, 1)
            },
            save()
            {
                this.item.endereco = this.getEndereco
                this.item.telefones= this.telefones
                this.telefones=[]
                this.saveAssociado(this.item)
            }
		}
	}
</script>


<style lang="stylus">
    .d-flex
        display flex
        margin-bottom 3%

    .m-right
        margin-right 10px

    .fones
        padding 4px
        min-width 60px
        background-color #3d3d3d
        color #ffffff
        border-radius 3px
        display inline-block
        margin 5px

        & span
            cursor pointer 
            color red

</style>
