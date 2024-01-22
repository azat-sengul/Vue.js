const app = Vue.createApp({
    data(){
        return{
            borderShow: false,
            redBG: "red",
        }
    },

    computed : {
        selectedClasses(){
            return {border: this.borderShow, red: this.redBG};
        }
    }

}).mount("#app")