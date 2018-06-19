<template lang="pug">
    div
        div(:class="{'modal-frame':true, 'state-appear':status}")
            .modal
                .modal-inset
                    i.material-icons.button.close(@click="status=false") close
                    h1 {{acao.titulo}}
                    .modal-body
                        div(v-html="acao.texto") 

        div(:class="{'modal-overlay':true, 'state-show':status}")
            
</template>

<script>
    import { EventBus } from '../../helpers/eventBus.js'

	export default {
        data()
        {
            return{
                status:false,
                acao:{
                    titulo:'',
                    text:''
                }
            }
        },
        name: 'Modal',
        mounted(){
            EventBus.$on('openModalAcoes', acao => {
                this.acao = acao
                this.status = true
            })
        }
	}
</script>

<style lang="stylus" >
	@import '../../styl/Modal.styl'
</style>
