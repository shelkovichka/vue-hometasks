'use strict';

const addCard = {
    emits: ['addCard'],
    template:
    `
        <form @submit.prevent="$emit('addCard', newCard)">
            <input type='text' v-model = 'newCard.title' placeholder='Название снимка' required>
            <input src='' v-model = 'newCard.img' placeholder='Ссылка' required>
            <input type="submit" value="Добавить снимок"> 
        </form>
    `,
    data(){
        return{
            newCard: {
                title: '',
                img: ''
            }
        }
    }
}

const photoCard = {
    emits: ['removeCard'],
    template:
    `
        <div>
            <h2>{{ info.title }}</h2>
            <img :src='info.img'>
            <button class='remove' @click="$emit('removeCard', info)">Удалить снимок</button>
        </div>
    `,
    props: {
        info: Object
    }
}

let gallary = Vue.createApp({
    data(){
        return {
            cards: [
                {title: 'Солнечное утро', img: 'images/img1.jpg'},
                {title: 'Мышиное поле', img: 'images/img4.jpg'},
                {title: 'Прибрежный луч', img: 'images/img5.jpg'},
                {title: 'Светлая грусть', img: 'images/img6.jpg'},
                {title: 'Беззаботный сон', img: 'images/img3.jpg'}
            ]
        }
    },
    methods: {
        remove(value){
            this.cards.splice(this.cards.indexOf(value), 1);
        },
        add(value){
            this.cards.unshift(value);
        }
    }
});

gallary.component('add-card', addCard);
gallary.component('photo-card', photoCard);
gallary.mount('#gallary');