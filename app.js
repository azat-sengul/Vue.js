// Vue js uygulama oluşturma:  const {createApp} = Vue
const {createApp} = Vue
createApp({
    // Tanımlamalar
    data(){
        return {
            title : "Merhaba Dünya",
            text: "Vue js öğren!",
            url: "https://www.lineerweb.com",
            lineer: {
                title: "Web adresi",
                url: "https://www.lineerweb.com",
                target: "_blank"
            },

            koordinat: {
                x: 0,
                y: 0,
            }
        }
    },
    methods : {
        changeTitle(title){
            alert("Değişiklikler Yapıldı!"),
            document.getElementById("butonName").innerHTML = "Buton Değişti!",
            this.title =" H2 başlığı değişti!"
        },

        changeTitle(title){
            alert("Değişiklikler Yapıldı!"),
            this.title = title;
        },

        updateCoords(event){
            this.koordinat = {
                 x: event.x,
                y: event.y
            }
        }

    }
}).mount("#app");  //.mount() ile app kısmına sonuçlar render edilir.