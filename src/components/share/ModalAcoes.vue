<template lang="pug">
    div
        div(:class="{'modal-frame':true, 'state-appear':status}")
            .modal
                .modal-inset
                    .button.close(@click="status=false") x
                    .modal-body
                        slot(name="body")    
        div(:class="{'modal-overlay':true, 'state-show':status}")
            
</template>

<script>
    import { EventBus } from '../../helpers/eventBus.js'

	export default {
        //props:["status"],
        data()
        {
            return{
                status:false
            }
        },
        name: 'Modal',
        mounted(){
            EventBus.$on('showAction', acao => {
                this.status = true
                console.log( JSON.stringify(acao) )
            })
        }
	}
</script>

<style lang="stylus" >
	@import '../../styl/Modal.styl'
</style>
