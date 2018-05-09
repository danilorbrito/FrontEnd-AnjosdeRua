<template lang="pug">
    .plataform
        .plataform-header
            h1  
                span#servico {{service}}

            input.search(@keyup="search", v-model="busca", placeholder="Pesquisar")

            .btn.success(@click="$emit('open')") Cadastrar
        
        .plataform-content
            table(border="1")
                thead
                    th(v-for="h in head") {{h}}
                    th Ação

                tbody#dados
                    tr(v-for="d in tabela", :key="d.id")
                        td {{ d.id }}
                        td {{ d.nome }}
                        td {{ d.raca }}
                        td {{ d.idade }}
                        td
                            .btn.read(@click="$emit('actions', 'read', d.id )") Detalhes
                            .btn.danger(@click="$emit('actions', 'trash', d.id )") Deletar
                            //.btn.warning(@click="$emit('actions', 'update', d.id )") Alterar
                        
        .plataform-footer
            .copyright Copyright © Sori 2018. Todos os direitos reservados.

</template>

<script>
	export default {
        name: 'Plataform',
        props:["dados", "head","service"],
        data()
        {
            return {
                busca: '',
                filtro: []
            }
        },
        methods:{
            search()
            {
                if(this.busca)
                    this.filtro = this.dados.filter( d => {
                        return d.id.toString().toLowerCase().indexOf( this.busca.toLowerCase() ) != -1 ||
                        d.nome.toString().toLowerCase().indexOf( this.busca.toLowerCase() ) != -1 ||
                        d.raca.toString().toLowerCase().indexOf( this.busca.toLowerCase() ) != -1 ||
                        d.idade.toString().toLowerCase().indexOf( this.busca.toLowerCase() ) != -1
                    })
                else this.filtro = []
            }
        },
        computed:{
            tabela()
            {
                return this.filtro.length > 0 ? this.filtro : this.dados
            }
        }
	}
</script>

<style lang="stylus">
	@import '../../styl/Table.styl'
</style>
