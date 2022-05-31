<template>
<section id="app">   
    <router-link :to="{name: 'start'}"></router-link>

    <router-view></router-view>
</section>  
</template>

<style>
body {
    background-image: url(assets/background.jpg);
    background-size: cover;
    box-sizing: border-box;
}
.page {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.error {
    text-transform: none;
    position: fixed;
    left: 39.6vw;
    font-family: sans-serif;
    font-size: 0.8rem;
    color: #d50102;
}
.form {
    text-align: center;
    background-color: white;
    padding: 2% 3%;
    border: 15px double #85aac5;
    width: 50vw;
    height: 30vh;
}
.card {
    text-align: center;
    background-color: white;
    color: #0a1417;
    font-family: sans-serif;
    text-transform: uppercase;
}
.doer {
    border: 2px solid #0a1417;
    margin-top: 10%;
    height: 4vh;
    width: 20vw;
    border-radius: 5px;
}
input:focus {
    outline: none;
    border: 2px solid #85aac5;
}
.back {
    position: fixed;
    top: 90%;
    right: 86%;
}
.next {
    position: fixed;
    top: 90%;
    left: 85%;
}
.back a, .next a, .create a {
    background-color: #85aac5;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
    padding: 1.8vh 4vw;
    border-radius: 10px;
}
</style>
