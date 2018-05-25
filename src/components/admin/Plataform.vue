<template lang="pug">
    .plataform
        .plataform-header
            h1  
                span#servico {{service}}

            input.search(@keyup="search", v-model="busca", placeholder="Pesquisar")

            .btn.success(@click="$emit('open')", v-if="!exibeBtn.delator && !exibeBtn.descricao_animal" ) Cadastrar
        
        .plataform-content
            table(border="1")
                thead
                    th(v-for="h in head") {{h}}
                    th Ação

                tbody#dados
                    tr(v-for="d in tabela", :key="d.id")
                        td {{ d.nome || d.descricao || d.titulo  || d.associado.nome}}
                        td {{ d.raca || d.sexo || d.delator || stripHTML(d.texto)  || d.telefone || d.animal.nome  }}
                        td {{ d.descricao_animal || d.idade || d.email || d.descricaoLocal || d.novasmensagens || d.datahora }}
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
            stripHTML(h){
                if(h)return h.replace(/<\/?[^>]+(>|$)/g, "")
            },
            test( b ){
                return b.toString().toLowerCase().indexOf( this.busca.toLowerCase() ) != -1 
            },
            search()
            {
                if(this.busca)
                    this.filtro  = this.dados.filter( d => {
                        let nome     = d.nome  || '',
                            raca     = d.raca  || '',
                            idade    = d.idade || '',
                            sexo     = d.sexo  || '',
                            email    = d.email || '',
                            descricao= d.descricao || '',
                            delator  = d.delator || '',
                            local    = d.descricaoLocal || '',
                            associado= d.associado || {},
                            animal   = d.animal || {},

                            titulo   = d.titulo || ''

                            associado= associado.nome || ''
                            animal   = animal.nome || ''

                        return this.test(nome) || this.test(raca) || this.test(idade) || this.test(sexo) || this.test(email) 
                        || this.test(descricao) || this.test(delator) || this.test(local) 
                        || this.test(associado) || this.test(animal) || this.test(titulo)
                    })
                else this.filtro = []
            }
        },
        computed:{
            tabela()
            {
                return this.filtro.length > 0 ? this.filtro : this.dados
            },
            exibeBtn()
            {
                return this.dados[0] || {}
            }
        }
	}
</script>

<style lang="stylus" >
	@import '../../styl/Table.styl'
</style>
