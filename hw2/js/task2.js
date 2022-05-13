'use strict';

// сверху - две кнопки, не вкладки
// в html - один цикл for
// только смена класса, все прописано в css

let articles =  [
    {
       title: "Нейросеть может читать текст быстрее человека",
       image: "https://picsum.photos/id/22/1000/1000"
    },
    {
       title: "Пять сервисов, которые помогут написать статью за 5 минут",
       image: "https://picsum.photos/id/24/1000/1000"
    },
    {
       title: "Названы основные правила движения поездов",
       image: "https://picsum.photos/id/28/1000/1000"
    },
    {
       title: "Самая посещаемая достопримечательность мира",
       image: "https://picsum.photos/id/27/1000/1000"
    },
    {
       title: "Появился новый термин для обозначения радиоволн",
       image: "https://picsum.photos/id/29/1000/1000"
    },
    {
       title: "В России появится новый вид бумаги",
       image: "https://picsum.photos/id/30/1000/1000"
    }
 ];

 Vue.createApp({
   data(){
      return {
         articles,
         isActive: true,
         isHidden: false
      }
   },
   methods: {
      toGrid(){
         if (!this.isActive) {
            this.isActive = !this.isActive;
            this.isHidden = !this.isHidden;
         }
      },
      toList(){
         if (!this.isHidden) {
            this.isActive = !this.isActive;
            this.isHidden = !this.isHidden;
         }
      }
   }
}).mount('#articles');

