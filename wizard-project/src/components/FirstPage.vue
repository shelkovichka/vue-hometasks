<template>
  <div class='page'>
        <div class='form'>
            <div class='card'>
                <h2>Название задачи</h2>
                <input type='text' name='title' placeholder='Название' 
                class='doer' :value='title' @input='addTitle'>
                <p class='error' v-for='error in errors' :key='error'>
                    {{ error }}
                </p>
            </div>
        </div>
    </div>
    <div class='next' @click='checkForm'>
        <router-link :to="{name: 'description'}">Вперед</router-link>
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
            if (!this.title) {
                this.errors.pop();
                this.errors.push('Поле обязательно для заполнения')
                return true
            }
        },
        addTitle(event) {
            this.$store.commit('addTitle', event.target.value)
        }
    },
    computed: {
        title() {
            return this.$store.state.userCard.title
        }
    }
}
</script>

<style>

</style>