<template lang="pug">
    form#formAssociado
        h3 Associados
        input(placeholder="Id", v-show="false", v-model="item.id")

        div.d-flex
            input.m-right(type="text", placeholder="Nome", v-model="item.nome", required)
            input(type="email",placeholder="E-mail", v-model="item.email", required)

        input(type="text", placeholder="Pass", v-model="item.pass", :required="!item.id" )

        p.d-flex
            span Masculino
            input(type="radio", name="sexo", value="m", :checked=" item.sexo == 'm' ", v-model="item.sexo", required)

            span Feminino   
            input(type="radio", name="sexo", value="f", :checked=" item.sexo == 'f' ", v-model="item.sexo", required)

        div.d-flex
            input.m-right(type="text",placeholder="Rua", v-model="getEndereco.logradouro", required)
            input.m-right(type="text",placeholder="Número", v-model="getEndereco.numero", required)
            input(type="text",placeholder="Bairro", v-model="getEndereco.bairro", required)

        div.d-flex
            input.m-right(type="text",placeholder="Cidade", v-model="getEndereco.cidade", required)
            input.m-right(type="text",placeholder="Estado", v-model="getEndereco.estado", required)
            input(type="text",placeholder="Cep", v-model="getEndereco.cep")

        p Telefones
        input(type="text",placeholder="Informe o telefone e pressione enter", @keyup.enter="addFone" )

        <div class="chip" v-for="(f, index) in getTelefones" >
            i.material-icons.fones phone_in_talk
            span {{ f.numero }} 
            <span class="closebtn" @click="remove(index)">&times;</span>
        </div>

        br
        br
        .btn.success(v-if="!item.id", @click="save") Salvar Informações
        .btn.warning(v-if="item.id", @click="update") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'
    import { EventBus } from '../../../helpers/eventBus.js'
    
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
                let f = {id:null, numero:e.target.value, tipo:"fixo"}

                this.item.telefones ? this.item.telefones.push(f) : this.telefones.push(f)
                e.target.value=""
            },
            remove(i){
                this.item.telefones ? this.item.telefones.splice(i, 1) : this.telefones.splice(i, 1)
            },
            save()
            {
                if( this.willvalidate(document.querySelector("#formAssociado")) )
                {
                    this.item.endereco = this.getEndereco
                    this.item.telefones= this.telefones
                    this.telefones=[]

                    this.saveAssociado(this.item).then(e=> {
                        this.toast('Cadastrado com sucesso!')
                        document.querySelector("#formAssociado").reset()
                        EventBus.$emit('setService','Associados')
                    })
                }
                else this.toast("Informe os dados corretamente!")
            },
            update()
            {
                if( this.willvalidate(document.querySelector("#formAssociado")) )
                {
                    this.item.endereco = this.getEndereco
                    if(!this.item.telefones) this.item.telefones = this.telefones
                    
                    this.updateAssociado(this.item).then(e=> {
                        this.toast('Alterado com sucesso!')
                        document.querySelector("#formAssociado").reset()
                        this.telefones=[]
                        EventBus.$emit('setService','Associados') 
                    })
                }
                else this.toast("Informe os dados corretamente!")
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


<style lang="stylus">
    .d-flex
        display flex
        margin-bottom 1%

    .m-right
        margin-right 10px

    .fones
        font-size 1.6em
        color #3d3d3d
        float left
        margin 3px 15px 0 -25px
        height 30px
        width 30px
        border-radius 50%

    .chip 
        display inline-block
        padding 0 25px
        height 30px
        font-size 18px
        line-height 30px
        border-radius 25px
        background-color #f1f1f1

    .closebtn 
        padding-left 8px
        color #888
        font-weight bold
        float right
        font-size 30px
        cursor pointer

    .closebtn:hover 
        color #000

</style>
