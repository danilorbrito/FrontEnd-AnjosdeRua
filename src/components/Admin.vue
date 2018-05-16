<template lang="pug">
	#panel
		Modal(:status="modal", @close="modal=false")
			div(slot="body")
				ReadAnimal(v-if="service.id=='Animais'", :item="service.item")
				ReadAssociado(v-if="service.id=='Associados'", :item="service.item")
				Denuncia(v-if="service.id=='Denúncias'", :item="service.item")
				Adocoes(v-if="service.id=='Adoções'", :item="service.item", @showAssociado="verAssociado", @showAnimal="verAnimal")

		NavBar(@service="setService")
		Plataform(:service="service.id", @open="service.item={},service.type='insert',modal=true", :head="dataTable.head", :dados="dataTable.body", @actions="operacao")
		
</template>

<script>
	import NavBar from './admin/NavBar'
	import Plataform from './admin/Plataform'
	import Modal from './admin/Modal'
	import ReadAnimal from './admin/Modais/ReadAnimal'
	import ReadAssociado from './admin/Modais/ReadAssociado'
	import Denuncia from './admin/Modais/Denuncia'
	import Adocoes from './admin/Modais/Adocoes'
	import {mapActions} from 'vuex'

	export default {
		name: 'admin',
		components:{NavBar, Plataform, Modal, ReadAnimal,ReadAssociado,Denuncia,Adocoes},
		data(){
			return{
				service:{
					id:"Animais",
					item:{}
				},
				modal:false,
				dataTable:{head:[],body:[]}
			}
		},
		mounted()
		{
			this.setService("Animais")
		},
		methods:{
			...mapActions(['deleteAnimal','deleteAssociado','deleteDenuncia','deleteAdocao']),
			operacao(type, id)
			{
				if(type=="trash" && confirm("tem certeza?") )
				{
					switch(this.service.id)
					{
						case 'Animais':this.deleteAnimal(id);break
						case 'Adoções':this.deleteAdocao(id);break
						case 'Denúncias':this.deleteDenuncia(id);break
						case 'Associados':this.deleteAssociado(id);break
/*
						case 'Ações promovidas':this.deleteAnimal(id);break
*/
						default:console.warn("trash desconhecido");break
					}
				}
				
				if(type=="read")
				{
					this.service.item = this.dataTable.body.filter( i => i.id == id )[0]
					this.modal=true
				}
			},

			...mapActions(['loadAnimais','loadAdocoes','loadAssociados','loadDenuncias']),
			setService(s)
			{
				//event bus para remover filtro da plataform 	
				switch(s)
				{
					case 'Animais':
						this.dataTable.head = ["Nome", "Raça", "Idade"]
						this.loadAnimais().then( a=> this.dataTable.body = a)
					break

					case 'Adoções':
						this.dataTable.head = ["Associado", "Animal", "Novas Mensagens"]
						this.loadAdocoes().then( a=> this.dataTable.body = a)
					break

					case 'Denúncias':
						this.dataTable.head = ["Descrição", "Delator", "Local"]
						this.loadDenuncias().then( d=> this.dataTable.body = d)
					break

					case 'Associados':
						this.dataTable.head = ["Nome", "Sexo", "E-mail"]
						this.loadAssociados().then( a=> this.dataTable.body = a)
					break

					case 'Ações promovidas':
						this.dataTable.head = ["Titulo", "Descrição"]
						this.dataTable.body = this.$store.getters.getAnimais
					break

					default:
						console.warn("datatable service desconhecido")
					break
				}
				this.service.id=s
			},
			verAssociado( associado )
			{
				this.service.id='Associados'
				this.service.item=associado
				this.setService("Associados")
			},
			verAnimal( animal )
			{
				this.service.id='Animais'
				this.service.item=animal
				this.setService("Animais")
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
