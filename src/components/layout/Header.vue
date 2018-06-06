<template lang="pug">
    header
        #top(:class="{fundo:mostrar}")
            .main.flex
                #logo
                Menu

        .slogan
            h1 Adote um Amigo,
            p Adote uma vida

</template>

<script>
    import Menu from './Menu'

    export default {
        name: 'Header',
        components:{Menu},
        data()
        {
            return{
                mostrar:false
            }
        },
        mounted()
        {
            window.addEventListener('scroll', this.scrollMove)
        },
        methods:{
            scrollMove() 
            {
                let scrollPos
                let slogan = document.querySelector('.slogan h1')
                scrollPos  = window.scrollY

                if (scrollPos <= 500 && slogan) 
                {
                    slogan.style.transform = `translateY(${-scrollPos/3}px)`
                    slogan.style.opacity   = 1 - (scrollPos/500)
                }
                //this.mostrar = !!(scrollPos > 100)
            }
        }
    }
</script>


<style lang="stylus">
    .fundo
        background-color rgba(0, 0, 0,0.600) !important
        transition 150ms ease-in-out

    header
        height 70vh 
        
    #top
        position fixed 
        top 0
        right 0
        left 0
        height 55px
        z-index 200

        & .main
            height 100%

    #logo
        margin-top 10px
        background url(../../assets/logo.png) center center no-repeat
        background-size 120px
        width 40%
        height 100px

    .slogan
        padding-top 30vh
        text-align center

        & h1
            color #fff
            font-size 3rem
            text-shadow 1px 1px 1px #000

        & p
            font-size 1.3rem
            color #ccc
            text-shadow 1px 1px 1px #000

    @media screen and (min-width: 576px)
        .slogan
            padding-top 33vh
            & h1
                font-size 3.5rem

            & p
                font-size 1.8rem

        #logo
            margin-top 30px
            background-size 200px

    @media screen and (min-width: 768px)
        #top 
            position static

        #logo
            width 22%
            margin-top 15px
            background-size 150px

    @media screen and (min-width: 992px)
        #top
            background-color transparent

        .slogan
            & h1
                font-size 5.5rem

            & p
                font-size 2rem

    @media screen and (min-width: 1200px)
        #logo
            margin-top 50px
            background-size 230px

</style>
