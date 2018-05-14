<template lang="pug">
    .topo
        .topo-left
            span PAINEL ADMINISTRATIVO

        .topo-righ
            .dropdown
                span Opções administrativas
                .dropdown-content
                    p(@click="$emit('service','Animais')") Animais
                    p(@click="$emit('service','Adoções')") Adoções
                    p(@click="$emit('service','Denúncias')") Denúncias
                    p(@click="$emit('service','Associados')") Associados
                    p(@click="$emit('service','Ações promovidas')") Ações promovidas
                    p(@click="sair") Sair

</template>

<script>
	export default {
        name: 'NavBar',
        methods:{
            sair()
            {
                //remover token da store
                //redirecionar
                console.log("deslogar")
            }
        }
	}
</script>

<style lang="stylus">
	@import '../../styl/NavBar.styl'
		
</style>
