<template>
  <div class='page'>
        <div class='form'>
            <div class='card'>
                <h2>Исполнитель</h2>
                <select @input='addDoer' :value='doer'>
                    <option v-for='doer in doers' :key='doer'>
                        {{ doer.name }}
                    </option>
                </select>
                <p class='error' v-for='error in errors' :key='error'>{{ error }}</p>
            </div>
        </div>
        <div class='back'>
        <router-link :to="{name: 'time'}">Назад</router-link>
        </div>
        <div class='next'>   
        <router-link :to="{name: 'apps'}" @click='checkForm'>Вперед</router-link>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            doers: [
                {id: 1, name: 'Котик'}, 
                {id: 2, name:'Лисенок'}, 
                {id: 3, name:'Медвежонок'}, 
                {id: 4, name:'Зайчик'}
            ],
            errors: []
        }
    },
    methods: {
        checkForm() {
            if (!this.doer) {
                this.errors.pop();
                this.errors.push('Выберите исполнителя')
                return true;
            }
        },
        addDoer(event) {
            this.$store.commit('addDoer', event.target.value)
        }
    },
    computed: {
        doer() {
            return this.$store.state.userCard.doer
        }
    }
}
</script>

<style scoped>
select {
    border: 2px solid #0a1417;
    margin-top: 10%;
    height: 4.9vh;
    width: 20.8vw;
    border-radius: 5px;
}

select:focus {
    outline: none;
    border: 2px solid #85aac5;
}
</style>