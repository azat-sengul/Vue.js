const app = Vue.createApp({
    data(){
        return{
            showText: false,
            counter : 0,
            class : ""
        }
    },

    computed : {
        showElement(){
            if(this.counter > 0){

             return this.class="text-success";
                
            }

            else if(this.counter < 0){

                return this.class="text-danger";
                   
            }

            else{
                return this.class="text-secondary";
            }

            // Yukarıdaki ifadeleri aşağıdaki gibi  de yazabiliriz
            // showElement(){
            // return {"text-success": this.counter>0, "text-danger": this.counter < 0, "text-secondary": this.counter=0};
        }
    }

}).mount("#app")