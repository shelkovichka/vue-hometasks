<template>
  <div class='page'>
        <div class='files-form'>
            <div class='card'>
            <h2>Приложения</h2>
            <button class='choose'>
                <label for='file'>Выбрать файлы</label>
            </button>
            <input type='file' id='file' @change='add' accept='image/*, .pdf, .txt' 
            multiple style='display: none'>
            <div>    
                <div v-if='!files.length' class='none'>Выберите хотя бы один файл</div>
                <div v-else class='files' :value='files'>
                    <div v-for='file in files' :key='file.name' :id='file.name'>
                        <button class='file' @click='remove'>×</button>
                        {{ file.name }}
                    </div>
                </div>
            </div>
        </div> 
    </div>
        <div class='back'>
            <router-link :to="{name: 'doer'}">Назад</router-link>
        </div>
        <div class='create'>  
            <router-link :to="{name: 'card'}" @click='complete'>Создать карточку</router-link> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            files: []
        }
    },
    methods: {
        add(event) {
            this.files = Array.from(event.target.files)
        },
        remove({target}) {
            for (let i = 0; i < this.files.length; i++){
                if (target.parentNode.id === this.files[i].name) {
                    this.files.splice(i, 1);
                }
            }
        },
        complete() {
            for (let file of this.files) {
                this.$store.state.userCard.apps.push(file.name)
            }
        }
    }
}
</script>

<style scoped>
.files-form {
    text-align: center;
    background-color: white;
    padding: 2% 3%;
    border: 15px double #85aac5;
    width: 50vw;
    height: 40vh;
}
.file {
    background-color: white;
    text-decoration: none;
    text-align: center;
    border: white;
    font-size: 1rem;
    color: #85aac5;
    height: 20px;
    width: 20px;
    border-radius: 5px;
}
.files {
    margin-top: 5%;
    text-align: left;
}
.none {
    margin-top: 5%;
    text-align: center;
    text-transform: none;
}
.choose {
    background-color: #85aac5;
    color: white;
    border: white;
    margin-top: 3vh;
    padding: 1.5vh 3.5vw;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
}
.create {
    position: fixed;
    top: 90%;
    left: 77.4%;
}
</style>