<template>
  <div class='page'>
        <div class='form'>
            <div class='card'>
                <h2>Время на выполнение (в часах)</h2>
                <input type='number' class='doer' placeholder='Время' 
                name='time' :value='time' @input='addTime'>
                <p class='error' v-for='error in errors' :key='error'>{{ error }}</p>
            </div>
        </div>
        <div class='back'>
            <router-link :to="{name: 'description'}">Назад</router-link>
        </div>
        <div class='next'>   
            <router-link :to="{name: 'doer'}" @click='checkForm'>Вперед</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            errors: []
        }
    },
    methods: {
        checkForm() {
            if (this.time < 1 || this.time > 100) {
                this.errors.pop();
                this.errors.push('Значение должно быть в диапозоне от 1 до 100')
                return true;
            }
        },
        addTime(event) {
            this.$store.commit('addTime', event.target.value)
        }
    },
    computed: {
        time() {
            return this.$store.state.userCard.time
        }
    }
}
</script>

<style>

</style>