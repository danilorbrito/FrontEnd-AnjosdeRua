<template lang="pug">
	#panel
		Modal(:status="modal", @close="modal=false")
			div(slot="body")
				ReadAnimal(v-if="service.id=='Animais'", :item="service.item")

		NavBar(@service="setService")
		Plataform(:service="service.id", @open="service.item={},service.type='insert',modal=true", :head="heads", :dados="dados", @actions="operacao")
		
</template>

<script>
	import NavBar from './admin/NavBar'
	import Plataform from './admin/Plataform'
	import Modal from './admin/Modal'
	import ReadAnimal from './admin/Modais/ReadAnimal'

	export default {
		name: 'admin',
		components:{NavBar, Plataform, Modal, ReadAnimal},
		data(){
			return{
				service:{
					id:"Animais",
					item:{}
				},
				modal:false,
				heads:["Id", "Nome", "Raça", "Idade"],
				dados:[
					{id:1, nome:'duque', raca:"raça 1", descricao:"descrição 1", cor:"preto", sexo:"f", idade:7},
					{id:2, nome:'belinha', raca:"raça 2", descricao:"descrição 2", cor:"rosa", sexo:"f", idade:9},
					{id:3, nome:'nego', raca:"raça 3", descricao:"descrição 3", cor:"vermelho", sexo:"m", idade:8},
					{id:4, nome:'zumba', raca:"raça 4", descricao:"descrição 4", cor:"azul", sexo:"m", idade:6},
					{id:5, nome:'pandjando', raca:"raça 5", descricao:"descrição 5", cor:"preto", sexo:"m", idade:11}
				]
			}
		},
		methods:{
			operacao(type, id)
			{
				if(type=="trash")
				{
					confirm("tem certeza?")
				}
				else
				{
					this.service.item = this.dados.filter( i => i.id == id )[0]
					this.modal=true
				}
			},
			setService(s)
			{
				this.service.id=s
			}
		}
	}
</script>


<style lang="stylus">
	#panel
		position fixed
		top 0
		right 0
		bottom 0
		left 0
		background-color #F5F8FA
		overflow-y auto
		overflow-x hidden

</style>
