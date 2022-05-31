<template>
  <div class='page'>
        <div class='result'>
            <div class='final'>
                <h2>{{ this.$store.state.userCard.title }}</h2>
                <p>{{ this.$store.state.userCard.description }}</p>
                <p>Время на выполнение: {{ this.$store.state.userCard.time }} ч.</p>
                <p>Выполнил {{ this.$store.state.userCard.doer }}</p>
                <p>Приложения: </p>
                <p v-for='app in this.$store.state.userCard.apps' :key='app'>{{ app }}</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.final {
    text-align: center;
    background-color: white;
    color: #0a1417;
    font-family: sans-serif;
}
.result {
    background-color: white;
    text-transform: none;
    padding: 2% 3%;
    border: 15px double #85aac5;
    width: 50vw;
    height: auto;
}
</style>