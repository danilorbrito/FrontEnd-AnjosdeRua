<template lang="pug">
    #form
        h3 Animais
        input(placeholder="Id", v-if="item.id", v-model="item.id")

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

        .uploads
            div(v-for="i in imagens")
                img(:src="i.src", width="110")
                i.material-icons.trash(@click="removeImage(i.id)") close

        form#imagens(enctype="multipart/form-data")
            input#file(type="file" name="arquivo", v-show="false", @change="uploading")

        label(for="file").link Adicionar Imagem

        .btn.success(v-if="!item.id", @click="saveAnimal(item)") Salvar Informações
        .btn.warning(v-if="item.id", @click="updateAnimal(item)") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'

	export default {
        name: 'ReadAnimal',
        props:["item"],
		data(){
			return{
                imagens:[]
			}
        },
        mounted()
        {
            //buscar as imagens do animal
            //loadImages(item.id).then(r => {
                this.imagens.push({id:1, src:require("../../../assets/bg.jpg")},{id:2, src:require("../../../assets/bg.jpg")})
            //})
        },
		methods:{
            ...mapActions([
                'loadImages',
                'saveImage',
                'removeImage',
                'saveAnimal',
                'deleteAnimal',
                'updateAnimal',
                'loadAnimais'
            ]),
            uploading(e)
            {
                let form = e.currentTarget.parentNode
                let dados= new FormData(form)
        
                this.saveImage(dados).then(r => {
                    //carregar a imagem junto das outras, com novo id
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


    .link
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
