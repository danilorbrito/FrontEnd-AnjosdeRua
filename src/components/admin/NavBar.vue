<template lang="pug">
    .topo
        .topo-left
            span PAINEL ADMINISTRATIVO

        .topo-righ
            .dropdown
                span Opções administrativas
                .dropdown-content
                    p(@click="$emit('service','Animais')") Animais (ok)
                    p(@click="$emit('service','Lista de espera')") Lista de espera
                    p(@click="$emit('service','Adoções')") Adoções
                    p(@click="$emit('service','Denúncias')") Denúncias (ok)
                    p(@click="$emit('service','Associados')") Associados (ok)
                    p(@click="$emit('service','Ações promovidas')") Ações promovidas (ok)
                    p(@click="sair") Sair

</template>

<script>
    import {mapActions} from 'vuex'

	export default {
        name: 'NavBar',
        methods:{
            ...mapActions(['loggout']),
            sair()
            {
                this.loggout()
                this.$router.push("/")
            }
        }
	}
</script>

<style lang="stylus">
	@import '../../styl/NavBar.styl'
		
</style>
