<?php
/**
 * Created by PhpStorm.
 * User: gena
 * Date: 05.04.2019
 * Time: 19:51
 */

?>
<!DOCTYPE html>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="apple-touch-icon" sizes="76x76" href="image/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="image/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="image/favicon/favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="mask-icon" href="image/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <title>Королевство</title>

    <link rel="stylesheet" href="css/font-awesome/v5.8.1/all.css">

    <script type="text/javascript" src="js/vue/vue.js"></script>

</head>
<body>


<div id="test">
    <app-nav></app-nav>
    <p>{{ message }}</p>
    <input v-model="message">
    <p v-bind:title="message2">
        Наведи на меня курсор на пару секунд,
        чтобы увидеть динамически связанное значение &laquo;title&raquo;!
    </p>
    <p v-if="visible">Сейчас меня видно.</p>
    <ol>
        <li v-for="todo in todos">
            {{ todo.text }}
        </li>
    </ol>
    <button v-on:click="reverseMessage">Перевернуть сообщение.</button>
    <ol>
        <grocery-item v-for="oneGrocery in groceryList" v-bind:obj="oneGrocery" v-bind:key="oneGrocery.id" ></grocery-item>
    </ol>
</div>


<script>
    Vue.component('app-nav', {
        template: '' +
            '<div>' +
            '   <i class="fas fa-university"></i> &nbsp; ' +
            '   Управление приложением' +
            '</div>',
    });

    Vue.component('grocery-item', {
        props: ['obj'],
        template: '<li><b>{{ obj.name }}</b> ({{ obj.i + 1 }})</li>'
    });

    let test = new Vue({
        el: '#test',
        data: {
            message: 'Здравствуйте!',
            message2: 'Вы загрузили эту страницу: ' + new Date().toLocaleString() + '.',
            visible: true,
            todos: [
                { text: 'Изучить JavaScript.' },
                { text: 'Изучить Vue.js.' },
                { text: 'Создать что-нибудь полезное.' },
                { text: 'Сказать что-нибудь умное.' }
            ],
            groceryList: [
                { i: 0, name: 'Овощи' },
                { i: 1, name: 'Сыр' },
                { i: 2, name: 'Что там ещё люди едят?' }
            ]
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('');
            }
        }
    });
</script>

</body>
</html>
