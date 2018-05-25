<template lang="pug">
    #parentMenu
        label#btnOpenMenu.flex(for="mobile")
            i.material-icons menu

        input#mobile(type="checkbox", v-show="false")
        nav#menu
            label.close(for="mobile")
                i.material-icons close

            span.link(@click="scroll('quemsomos')") Quem Somos
            span.link(@click="scroll('acoespromovidas')") Ações Promovidas
            span.link(@click="scroll('adocao')") Adoção
            span.link(@click="scroll('denuncia')") Denúncia

            <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
                <input type="hidden" name="currency" value="BRL" />
                <input type="hidden" name="receiverEmail" value="klerisonpe@gmail.com" />
                <input type="hidden" name="iot" value="button" />
                button.link.active Doação
            </form>
</template>

<script>
    export default {
        name: 'Menu',
        methods:{
            scroll( id )
            {
                document.getElementById(id).scrollIntoView({behavior: "smooth"})
            }
        }
    }
</script>


<style lang="stylus" scoped>
    button
        outline none 
        border none

    .active
        background orange 
        border-radius 3px
        padding 10px

    nav#menu
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background-color rgba(0,0,0,.500)
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        padding 20% 10% 20% 10%
        opacity 0 
        pointer-events none 
        transition 150ms ease-in-out
        font-family 'Montserrat', sans-serif

    .link
        color #fff
        font-size 1.6rem
        cursor pointer

    label#btnOpenMenu
        background-color #C6480A
        padding 15% 10%
        border-radius 3px
        cursor pointer
        & i 
            color #fff
            font-size 1.5rem

    input#mobile:checked ~ nav#menu
        opacity 1 
        pointer-events auto 

    .close
        position fixed
        top 2%
        right 2%
        cursor pointer
        & i
            color #fff
            font-size 2.5rem


    @media screen and (min-width: 576px)
        label#btnOpenMenu
            & i 
                font-size 2rem

    @media screen and (min-width: 768px)
        #parentMenu
            width 65%

        nav#menu
            position static
            background-color transparent
            flex-direction row
            justify-content space-between
            padding 0
            opacity 1 
            pointer-events auto 
            width 100%

        .link
            font-size 1rem

        .close, label#btnOpenMenu
            display none
    

    @media screen and (min-width: 992px)
        #parentMenu
            width 40%

    @media screen and (min-width: 1200px)
        .link
            font-size 1rem
            
</style>
