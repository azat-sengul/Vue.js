const app = Vue.createApp({
    data()
    {
        return{
            counter: 0,
        }
    },

    methods: {
        Increase(){
           this.counter++;
        },
        Decrease(){
           this.counter--;
        }
    }

}).mount("#app");

