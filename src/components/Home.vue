<template lang="pug">
  div
    ModalAcoes
    ModalFiltro
    Header

    .groupInfo
      Info(title="Adotar é salvar uma vida", text="Colabore conosco e ajude-nos a dar uma família a nossos amiguinhos", icon="favorite")
      Info(title="Um ato pode mudar o mundo", text="Colabore conosco e ajude-nos a dar uma família a nossos amiguinhos", icon="pets")
      Info(title="Denúncie maus-tratos", text="Faça denúncia através de nosso site ou aplicativo e torne o mundo um lugar melhor", icon="chat_bubble_outline")

    QuemSomos
    denuncia
    AcoesPromovidas
    adocao
    
</template>

<script>
  import Header from './layout/Header'
  import QuemSomos from './layout/QuemSomos'
  import AcoesPromovidas from './layout/AcoesPromovidas'
  import Info from './share/Info'
  import ModalAcoes from './share/ModalAcoes'
  import ModalFiltro from './share/ModalFiltro'
  import adocao from './layout/adocao'
  import denuncia from './layout/denuncia'

  export default {
    name: 'Home',
    components:{
      Header, QuemSomos, AcoesPromovidas, Info, ModalAcoes, ModalFiltro, adocao, denuncia
    }
  }
</script>

<style lang="stylus">
.groupInfo
  display flex    
  flex-direction column

@media screen and (min-width: 992px)
  .groupInfo
      width 90%
      margin auto  
      flex-direction row


</style>
