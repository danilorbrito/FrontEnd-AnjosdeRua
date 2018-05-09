<template lang="pug">
    #form
        h1 Animais
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
            img(src="../../../assets/bg.jpg", width="110")
            i.material-icons.trash close

            img(src="../../../assets/bg.jpg", width="110")
            i.material-icons.trash close
            
            img(src="../../../assets/bg.jpg", width="110")
            i.material-icons.trash close
            
            img(src="../../../assets/bg.jpg", width="110")
            i.material-icons.trash close
            
            img(src="../../../assets/bg.jpg", width="110")
            i.material-icons.trash close
            
            img(src="../../../assets/bg.jpg", width="110")
            i.material-icons.trash close
            
        p.link Adicionar Imagem

        .btn.success(v-if="!item.id") Salvar Informações
        .btn.warning(v-if="item.id") Atualizar Informações

</template>

<script>
	export default {
        name: 'ReadAnimal',
        props:["item"],
		data(){
			return{
				uploads:[]
			}
        },
        mounted()
        {
            //buscar as imagens do animal
        },
		methods:{
		
		}
	}
</script>


<style lang="stylus">
    .uploads
        width 300px
        overflow-x auto
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
        margin-top 10px

    .d-flex
        display flex
        margin-bottom 3%

    .m-right
        margin-right 10px

</style>
