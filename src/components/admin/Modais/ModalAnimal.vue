<template lang="pug">
    #form
        h3 Animais
        input(v-show="false", v-model="item.id")

        div.d-flex
            input.m-right(placeholder="Nome", v-model="item.nome")
            input(placeholder="Raça", v-model="item.raca")

        input(placeholder="Descrição", v-model="item.descricao")

        div.d-flex
            input.m-right(placeholder="Cor", v-model="item.cor")
            input(type="number", min="0", placeholder="Idade", v-model="item.idade")

        p.d-flex
            span Macho
            input(type="radio", name="sexo", value="m", :checked=" item.sexo == 'm' ", v-model="item.sexo" )

            span Fêmea   
            input(type="radio", name="sexo", value="f", :checked=" item.sexo == 'f' ", v-model="item.sexo"  )

        p(style='text-align:center,cursor:pointer', v-if="item.id && imagens.length == 0", @click="showImages") Carregar Imagens

        .uploads(v-if="item.id && imagens.length > 0")
            div(v-for="i in imagens")
                img(:src="'http://soriano.esy.es/app/client/assets/imagens/animais/'+i.nome_imagem", width="110")
                i.material-icons.trash(@click="removeImage(i.id)") close

        form#imagens(enctype="multipart/form-data")
            input(name="id_animal", v-show="false", v-model="item.id")
            input#file(type="file" name="arquivo", v-show="false", @change="uploading")

        label(for="file", v-if="item.id").linkAddImage Adicionar Imagem

        .btn.success(v-if="!item.id", @click="saveAnimal(item)") Salvar Informações
        .btn.warning(v-if="item.id", @click="updateAnimal(item)") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'

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
            let check = setInterval(()=>{
                if(this.imagens.length > 0)if(this.imagens[0].id_foreign != this.item.id) this.imagens=[]
            },100)
        },
		methods:{
            ...mapActions([
                'loadImages',
                'saveImage',
                'removeImage',
                'saveAnimal',
                'updateAnimal',
            ]),
            showImages(){
                this.loadImages(this.item.id).then(r => this.imagens = r.data.data )
            },
            uploading(e)
            {
                let form = e.currentTarget.parentNode
                let dados= new FormData(form)
        
                this.saveImage(dados).then(r => {
                    this.showImages()
                    form.reset()
                })
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
        
        & img
            cursor pointer

        & .trash 
            cursor pointer
            color red
            margin-right 15px
            margin-left -25px
            font-weight bold
            text-shadow 1px 3px 1px #fff


    .linkAddImage
        color blue
        font-weight bold
        cursor pointer
        font-size 12px
        margin-top 3px
        margin-bottom 10px
        display block

    .d-flex
        display flex
        margin-bottom 3%

    .m-right
        margin-right 10px

</style>
