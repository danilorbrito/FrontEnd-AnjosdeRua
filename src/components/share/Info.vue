<template lang="pug">
    .info
        .icon
            i.material-icons {{icon}}

        h1 {{title}}
        h3 {{text}}

</template>

<script>
	export default {
        props:{
            title:{
                type: String,
                required: true
            },
            text:{
                type: String,
                required: true
            },
            icon:{
                type: String,
                required: true
            }
        },
		name: 'circulo'
	}
</script>

<style lang="stylus">
    .info
        margin auto
        width 90%
        min-height 200px
        display flex
        justify-content center
        flex-direction column
        align-items center
        color #fff
        text-align center
        & p
            color #efdfbd
            letter-spacing 3px

    .icon
        width 80px
        height 80px
        background-color #fff
        color rgba(198, 72, 10, 1)
        border-radius 50%
        display flex
        justify-content center
        align-items center
        margin-top 50px
        margin-bottom 20px
        & i
            font-size 3em

    @media screen and (min-width: 768px)
        .info
            width 60%

    @media screen and (min-width: 992px)
        .info
            max-width 290px
            & h1
                font-size 1.5em
            & p
                font-size .9em

</style>
