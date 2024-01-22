const app = Vue.createApp({
    data(){
        return{
            inputTxt:null,
            todoList : [1,2,3]
        }
    },
    methods : {
        addItem(){
            let input = this.inputTxt;
            this.todoList.push(input);
            this.inputTxt=null;
        }
    }
}).mount("#app");