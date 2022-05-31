<template>
  <div class='page'>
        <div class='form'>
            <div class='card'>
                <h2>Описание задачи</h2>
                <input type='text' class='doer' name='description' placeholder='Описание'
                :value="description" @input="addDescription">
                <p class='error' v-for='error in errors' :key='error'>{{ error }}</p>
            </div>
        </div>
        <div class='back'>
            <router-link :to="{name: 'title'}">Назад</router-link>
        </div>
        <div class='next'>
            <router-link :to="{name: 'time'}" @click='checkForm'>Вперед</router-link>
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
            if (!this.description) {
                this.errors.pop();
                this.errors.push('Поле обязательно для заполнения')
                return true;
            }
        },
        addDescription(event) {
            this.$store.commit('addDescription', event.target.value)
        }
    },
    computed: {
        description() {
            return this.$store.state.userCard.description
        }
    }
}
</script>

<style>

</style>