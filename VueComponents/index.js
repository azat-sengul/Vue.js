const app = Vue.createApp({

    data(){
        return{
            counter: 0,
        }
    }

});

app.component("counter-item", {
    data(){
        return{
            counter : 0,
        }
    },

    template : ` 
        <div class="container">
            <div class="row">
                <div class="col-4 offset-4 mt-5">
                    <div class="card card-body">
                        <div class="d-flex justify-content-between" >
                            <button class="btn btn-danger" @click="counter--" >-</button>
                            <h3>{{counter}}</h3>
                            <button class="btn btn-success" @click="counter++" >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    });

app.mount("#app");