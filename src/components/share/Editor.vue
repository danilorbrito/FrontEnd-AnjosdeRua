<template lang="pug">
    div
        input(type="text",style="width:90%",v-model="acao.titulo", maxlength="40")
        <div id="parentEditor">
            <input type="file" id="upload" @change="upload" v-show="false" />
            <div id="painelEditor">
                <i class="demo-icon icon-align-left" @click="applyCommand('justifyLeft')" ></i> 
                <i class="demo-icon icon-align-center" @click="applyCommand('justifyCenter')" ></i>
                <i class="demo-icon icon-align-right" @click="applyCommand('justifyRight')" ></i>
                <i class="demo-icon icon-align-justify" @click="applyCommand('justifyFull')" ></i>

                <i class="demo-icon icon-bold"  @click="applyCommand('bold')"></i>
                <i class="demo-icon icon-italic"  @click="applyCommand('italic')" ></i>
                <i class="demo-icon icon-strike" @click="applyCommand('strikeThrough')" ></i>
                <i class="demo-icon icon-underline" @click="applyCommand('underline')"></i>

                <i class="demo-icon icon-indent-left" @click="applyCommand('outdent')"></i>
                <i class="demo-icon icon-indent-right" @click="applyCommand('indent')" ></i>
                
                <i class="demo-icon icon-link" @click="link()" ></i>
                <i class="demo-icon icon-ccw" @click="applyCommand('redo')"></i>
                <i class="demo-icon icon-cw" @click="applyCommand('undo')" ></i>
                <label for="upload"><i class="demo-icon icon-picture"></i></label>

                <i class="demo-icon icon-table" @click="table"></i>

                <button id="fontColor" @click="fontColor" class="btnColor">F</button>
                <button id="backColor" @click="backColor" class="btnColor">B</button>

                <label for="cores"></label>
                <input type="color" id="cores" v-show="false" />

                <select type="text" id="inputFontSize" v-model="fontSize" @change="alterFont" >
                    <option value="2">10 pt</option>
                    <option value="3">12 pt</option>
                    <option value="4">14 pt</option>
                    <option value="6">16 pt</option>
                    <option value="7">18 pt</option>
                </select>
            </div>

            <div id="editor" contenteditable="true" v-html="acao.texto"></div>
        </div>
        .btn.success(v-if="!acao.id && acao.titulo", @click="save") Salvar Informações
        .btn.warning(v-if="acao.id && acao.titulo", @click="update") Atualizar Informações

</template>

<script>
    import { mapActions } from 'vuex'
    import { EventBus } from '../../helpers/eventBus.js'

	export default {
        name:'editor',
        props:{
            acao:{
                type:Object,
                required:true
            }
        },
        data(){
            return{
                fontSize:2
            }
        },
        methods:{
            ...mapActions(['saveAcoesPromovidas','updateAcoesPromovidas']),
            save(){
                this.saveAcoesPromovidas( {titulo:this.acao.titulo, texto:document.querySelector("#editor").innerHTML} ).then(e=> {
                    this.toast('Cadastrado com sucesso!')
                    EventBus.$emit('setService','Ações promovidas') 
                })
            },
            update(){
                if( this.acao.titulo && document.querySelector("#editor").innerHTML != '' )
                {
                    this.updateAcoesPromovidas( {id:this.acao.id,titulo:this.acao.titulo, texto: document.querySelector("#editor").innerHTML } ).then(e=> {
                        this.toast('Alterado com sucesso!')
                        EventBus.$emit('setService','Ações promovidas') 
                    })
                }
                else this.toast("Informe os dados corretamente!")
            },
            applyCommand( comand )
            {
                document.execCommand(comand)
            },
            alterFont( )
            {
                document.execCommand("fontSize", false, parseInt(this.fontSize) )
            },
            link()
            {
                document.execCommand('createlink', false, prompt('Enter a URL:', 'http://') )
            },
            fontColor()
            {
                document.execCommand('foreColor', false, document.getElementById("cores").value )
            },
            backColor()
            {
                document.execCommand('backColor', false, document.getElementById("cores").value )
            },
            upload(e){
                let file    = e.currentTarget.files[0]
                let reader  = new FileReader()
                let img     = new Image(100, 100)
                reader.onloadend = () => {
                    img.src = reader.result
                    document.getElementById("editor").appendChild(img)
                    upload.value=""
                }
                reader.readAsDataURL(file)
            },
            table()
            {
                let linha = +prompt('Qual número de linhas?')
                let coluna= +prompt('Qual número de colunas?')

                if(linha && coluna)
                {
                    let t    = document.createElement("table")
                    t.border = "1"
                    t.style.borderCollapse = "collapse"
                    t.style.border = "1px solid #ccc"

                    for( let l=0; l<linha; l++)
                    {
                        let tr   = document.createElement("tr")
                        tr.style.border = "1px solid #ccc"

                        for( let c=0; c<coluna; c++)
                        {
                            let td   = document.createElement("td")
                            td.style.border = "1px solid #ccc"
                            td.innerHTML = " - "
                            tr.appendChild(td)
                        }
                        t.appendChild(tr)
                    }
                    document.getElementById("editor").appendChild(t)

                    let small = document.createElement("small")
                    small.innerHTML = "Fonte:"
                    document.getElementById("editor").appendChild(small)
                }
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
    @import '../../styl/icons.css'
    @import '../../styl/editor.css'
</style>
