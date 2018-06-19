<template lang="pug">
    #denuncia
        h1  Denúncia
        section
            p Para denúnciar é simples e seguro!
            p Você pode nos informar de modo anônimo, <br>apenas  relatando informações dos acontecimentos.
           
            form.boxForm
                label Nome
                    input(type="text", v-model="denuncia.delator", required)

                label Descreva o local
                    input(type="text", v-model="denuncia.descricao_local", required)

                label Denúncia  
                    input(type="text", v-model="denuncia.descricao", required)

                button.enviar(type="button", @click="save") Enviar dados
</template>

<script>
    import { mapActions } from 'vuex'

	export default {
        name: 'denuncia',
        data()
        {
            return{
                denuncia:{
                    delator:'Anônimo',
                    descricao_local:'',
                    descricao:''
                }
            }
        },
        methods:{
            ...mapActions(['saveDenuncia']),
            save()
            {
                if( this.willvalidate( document.querySelector(".boxForm") ) )
                {
                    this.saveDenuncia(this.denuncia).then(e=> {
                        this.toast('Cadastrado com sucesso!')
                        document.querySelector(".boxForm").reset()
                    })
                }
                else this.toast("Informe os dados corretamente")
            },
            toast(message)
            {
                let toast = document.getElementById("snackbar")
                toast.innerText=message
                toast.classList.add("show")
                setTimeout( () => toast.classList.remove("show"), 3000)
            }
        }
	}
</script>


<style lang="stylus">
    #denuncia
        padding 5%
        background-color rgba(255,255,255,1)

        & h1
            font-size 2.6em
            text-align center
            color #C6480A
            text-transform uppercase
            letter-spacing 3px

        & section
            width 90%
            padding-top 20px
            margin auto
            & p
                font-size 2.0em
                text-align center
                letter-spacing 2px


    .titleRedes
        letter-spacing 2px
        font-size 1.6em
        text-align center
        color #C6480A
        text-transform uppercase
        letter-spacing 3px
        border-bottom 1px solid #eee
        margin-top 50px
        color silver
        margin-bottom 10px

    .boxForm
        margin 2rem auto
        width 75%
        label
            font-size 1.3rem
            font-weight bold
            margin .3rem 0
            color gray
        input[type="text"]
            width 100%
            padding .3rem
            margin .5rem 0
            background-color #fff
            border solid 1px transparent
            border-bottom 1px solid #bcbcbc

        button 
            padding .5rem
            border solid 1px transparent
            margin 1rem auto 0
            width 100%
            border-radius 5px
            color #3d3d3d
            font-weight bold
            font-size 1.2rem
            text-align center
            box-shadow 3px 3px 3px #ccc
            cursor pointer


</style>
