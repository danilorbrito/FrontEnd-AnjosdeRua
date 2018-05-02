<template lang="pug">
    #quemsomos
        h1  Quem Somos
        section
            p Somos uma ong empenhada no resgate, tratamento e adoção de animais abandonados. Atendemos à denúncias através de nosso site ou qualquer outro meio de comunicação. Juntos podemos muito mais. Faça parte!
            
            p.titleRedes AONDE ESTAMOS:
            .redes
                .rede
                    i.material-icons thumb_up

                .rede
                    i.material-icons mail_outline

                .rede
                    i.material-icons photo_camera
</template>

<script>
	export default {
		name: 'QuemSomos'
	}
</script>


<style lang="stylus">
    #quemsomos
        margin-top 80px
        padding 5%
        background-color rgba(255,255,255,1)

        & h1
            font-size 1.6em
            text-align center
            color #C6480A
            text-transform uppercase
            letter-spacing 3px
            border-bottom 1px solid #eee

        & section
            width 90%
            padding-top 20px
            margin auto
            color gray
            & p
                text-align center
                letter-spacing 2px


    .titleRedes
        margin-top 50px
        color silver
        margin-bottom 10px

    .redes
        display flex
        justify-content space-around
        width 300px
        margin auto
        color #C6480A

    .rede
        margin-right 15px
        display flex
        justify-content center
        align-items center
        width 60px
        height 60px
        background-color #f2f4f7
        border-radius 50%

    @media screen and (min-width: 768px)
        #quemsomos section
            width 70%


</style>
