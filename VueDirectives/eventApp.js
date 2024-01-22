
const app = Vue.createApp({
    data(){
        return{

            inputText: null,
            inputText2: null,
        }
    },
    methods : {
        updateValue(event)
        {
           this.inputText = event.target.value,
           this.inputText2 = event.target.value
        }
    }
}).mount("#app");