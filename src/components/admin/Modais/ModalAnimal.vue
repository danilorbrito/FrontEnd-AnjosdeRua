<template lang="pug">
    form#formanimal
        h3 Animais
        input(v-show="false", v-model="item.id")

        div.d-flex
            input.m-right(type="text",placeholder="Nome", v-model="item.nome", required)
            input(type="text",placeholder="Raça", v-model="item.raca", required)

        input(type="text",placeholder="Descrição", v-model="item.descricao", required)

        div.d-flex
            input.m-right(type="text",placeholder="Cor", v-model="item.cor", required)
            input(type="number", min="0", placeholder="Idade", v-model="item.idade")

        p.d-flex
            span Macho
            input(type="radio", name="sexo", value="m", :checked=" item.sexo == 'm' ", v-model="item.sexo" )

            span Fêmea   
            input(type="radio", name="sexo", value="f", :checked=" item.sexo == 'f' ", v-model="item.sexo"  )

        .uploads(v-if="item.id && imagens.length > 0")
            div(v-for="(i,index) in getImagens")
                img(:src="'http://soriano.esy.es/app/client/assets/imagens/animais/'+i.nome_imagem", width="110", height="86")
                i.material-icons.trash(@click="removeImage(i.id),imagens.splice(index, 1)") close

        form#imagens(enctype="multipart/form-data")
            input(name="id_animal", v-show="false", v-model="item.id")
            input#file(type="file" name="arquivo", v-show="false", @change="uploading")

        label(for="file", v-if="item.id && item.adotado!=1")
            i.material-icons.linkAddImage add_to_photos 

        label(v-if="item.id && item.adotado==1", @click="showImages(item.id)")
            i.material-icons.linkAddImage cached 

        br
        .btn.success(v-if="!item.id", @click="save") Salvar Informações
        .btn.warning(v-if="item.id", @click="update") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'
    import { EventBus } from '../../../helpers/eventBus.js'

	export default {
        name: 'ModalAnimal',
        props:{
            item:{
                type:Object
            }
        },
		data(){
			return{
                imagens:[]
			}
        },
        mounted(){
            EventBus.$on('openAnimal', id => this.showImages(id))
            EventBus.$on('closeAnimal', () => this.imagens = [])
        },
		methods:{
            ...mapActions(['loadImages','saveImage','removeImage','saveAnimal','updateAnimal']),
            showImages(id)
            {
                this.loadImages(id).then(r => this.imagens = r.data.data)
            },
            uploading(e)
            {
                let form = e.currentTarget.parentNode
                let dados= new FormData(form)
        
                this.saveImage(dados).then(r => {
                    this.showImages(this.item.id)
                    form.reset()
                })
            },
            save()
            {
                if( this.willvalidate(document.querySelector("#formanimal")) )
                {
                    this.saveAnimal(this.item).then(e=> {
                        this.toast('Cadastrado com sucesso!')
                        document.querySelector("#formanimal").reset()
                        EventBus.$emit('setService','Animais')
                    })
                }
                else this.toast("Informe os campos do formulário")
            },
            update()
            {
                if( this.willvalidate(document.querySelector("#formanimal")) )
                {
                    this.updateAnimal(this.item).then(e=> {
                        this.toast('Alterado com sucesso!')
                        document.querySelector("#formanimal").reset()
                        EventBus.$emit('setService','Animais')
                    })
                }
                else this.toast("Informe os campos do formulário")
            },
            toast(message)
            {
                let toast = document.getElementById("snackbar")
                toast.innerText=message
                toast.classList.add("show")
                setTimeout( () => toast.classList.remove("show"), 3000)
            }
        },
        computed:{
            getImagens(){
                return this.imagens
            }
        }
	}
</script>


<style lang="stylus">
    .uploads
        width 300px
        overflow-x auto
        overflow-y hidden
        height 90px
        display flex
        margin auto
        background-color #ededed

        & .trash 
            position relative
            cursor pointer
            color red
            top -60px
            right 25px
            outline 1px solid red
            font-weight bold
            text-shadow 1px 3px 1px #fff
            z-index 2500

    .linkAddImage
        color #ccc
        cursor pointer
        font-size 2em
        margin-bottom 10px
        
        &:hover
            color gray

    .d-flex
        display flex
        margin-bottom 3%

    .m-right
        margin-right 10px
</style>
