<template>
    <view class="container">
        <text class="h3">Faça uma pergunta de SIM ou NÃO</text>
        <text-input class="textInput" v-model="question" underlineColorAndroid="transparent"/>
        <text class="h1">{{answer}}</text>
    </view>
</template>

<script>
    import axios from 'axios'
    import _ from 'lodash'
    export default {
    data: {
        question: '',
        answer: 'Eu não posso responder até que você faça uma pergunta!'
    },
        watch: {
        // sempre que a pergunta mudar, essa função será executada
        question: function (newQuestion, oldQuestion) {
        this.answer = 'Esperando você parar de escrever...'
        this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
        function () {
            var vm = this
            if (vm.question.indexOf('?') === -1) {
            vm.answer = 'Perguntas geralmente têm uma interrogação. ;-)'
            return
            }
            vm.answer = 'Pensando...'
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                vm.answer = response.data.answer === 'yes' ? 'Sim.' :
                response.data.answer === 'no' ? 'Não.' : 'Talvez!'
            })
            .catch(function (error) {
                vm.answer = 'Erro! Não pode executar a API. ' + error
            })
        },
        // Este é o número de milissegundos que aguardamos para
        // que o usuário pare de digitar
        500
        )
    }
}
</script>

<style>
.h1{
    font-size: 30;
}
.h3{
    font-size: 20;
}
.container{
    padding-horizontal: 10;
    padding-top: 20px;
}
.textInput{
    font-size: 30;
    padding-left: 10;
    height: 80;
    border-bottom-width: 3px;
    border-color: #222;
}
</style>
