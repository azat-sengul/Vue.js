const app = Vue.createApp({
    data()
    {
        return{
            serach: "",
            itemList : ["Azat","Yakup", "Ece", "Şengül"]
        }
    },

    methods: {
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.serach))
        }
    }

}).mount("#app");