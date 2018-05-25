<template lang="pug">
	#panel
		Modal(:status="loading", @close="closeModal")
			div(slot="body")
				Loading

		Modal(:status="modal", @close="closeModal")
			div(slot="body")
				ModalAnimal(v-if="service.id=='Animais'", :item="service.item")
				ModalAssociado(v-if="service.id=='Associados'", :item="service.item")
				ModalDenuncia(v-if="service.id=='Denúncias'", :item="service.item")
				ModalAdocoes(v-if="service.id=='Adoções'", :item="service.item", @showAssociado="verAssociado", @showAnimal="verAnimal")
				ModalAcoesPromovidas(v-if="service.id=='Ações promovidas'", :item="service.item")
				ModalListaEspera(v-if="service.id=='Lista de espera'", :item="service.item")

		NavBar(@service="setService")
		Plataform(:service="service.id", @open="service.item={},service.type='insert',modal=true", :head="dataTable.head", :dados="dataTable.body", @actions="operacao")
		
</template>

<script>
	import NavBar from './admin/NavBar'
	import Plataform from './admin/Plataform'
	import Modal from './admin/Modal'
	import Loading from './share/Loading'
	import ModalAnimal from './admin/Modais/ModalAnimal'
	import ModalAssociado from './admin/Modais/ModalAssociado'
	import ModalDenuncia from './admin/Modais/ModalDenuncia'
	import ModalAdocoes from './admin/Modais/ModalAdocoes'
	import ModalAcoesPromovidas from './admin/Modais/ModalAcoesPromovidas'
	import ModalListaEspera from './admin/Modais/ModalListaEspera'
	import {mapActions} from 'vuex'
	import { EventBus } from '../helpers/eventBus.js'

	export default {
		name: 'admin',
		components:{NavBar, Plataform, Modal, ModalListaEspera,ModalAnimal,ModalAssociado,ModalDenuncia,ModalAdocoes,ModalAcoesPromovidas,Loading},
		data(){
			return{
				service:{
					id:"Animais",
					item:{}
				},
				modal:false,
				dataTable:{head:[],body:[]},
				loading:false
			}
		},
		mounted()
		{
			let user = {
				"login":"chefao01",
				"password":"chefao01"
			}
			this.loginUser(user).then(r=> this.setService("Animais"))
		},
		methods:{
			...mapActions(['deleteAnimal','deleteEspera','deleteAssociado','deleteDenuncia','deleteAdocao','deleteAcoesPromovidas']),
			closeModal()
			{
				this.modal=false
				if(this.service.id == 'Adoções')EventBus.$emit('stopInterval')
			},
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
						case 'Ações promovidas':this.deleteAcoesPromovidas(id);break
						case 'Lista de espera':this.deleteEspera(id);break
						default:console.warn("trash desconhecido");break
					}
				}
				
				if(type=="read")
				{
					if(this.service.id == 'Adoções')EventBus.$emit('initInterval')
					this.service.item = this.dataTable.body.filter( i => i.id == id )[0]
					this.modal=true
				}
			},
			...mapActions(['loginUser','loadAnimais','loadAdocoes','loadEsperas','loadAssociados','loadDenuncias','loadAcoesPromovidas']),
			setService(s)
			{
				//event bus para remover filtro da plataform 	
				this.loading=true
				switch(s)
				{
					case 'Animais':
						this.dataTable.head = ["Nome", "Raça", "Idade"]
						this.loadAnimais().then( a=> {this.dataTable.body = a;this.loading=false})
					break

					case 'Adoções':
						this.dataTable.head = ["Associado", "Animal", "Novas Mensagens"]
						this.loadAdocoes().then( a=> {this.dataTable.body = a;this.loading=false})
					break

					case 'Denúncias':
						this.dataTable.head = ["Descrição", "Delator", "Local"]
						this.loadDenuncias().then( d=> {this.dataTable.body = d;this.loading=false})
					break

					case 'Associados':
						this.dataTable.head = ["Nome", "Sexo", "E-mail"]
						this.loadAssociados().then( a=> {this.dataTable.body = a;this.loading=false})
					break

					case 'Ações promovidas':
						this.dataTable.head = ["Titulo", "Descrição","Data"]
						this.loadAcoesPromovidas().then( a=> {this.dataTable.body = a;this.loading=false})
					break

					case 'Lista de espera':
						this.dataTable.head = ["Nome", "Telefone","Descricao"]
						this.loadEsperas().then( a=> {this.dataTable.body = a;this.loading=false})
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
