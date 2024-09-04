const { createApp } = Vue

createApp({
    data() {
        return {
            imagesList : [
                "https://i.insider.com/5cc221e7c01335068b3edae8?width=1136&format=jpeg",
                "https://i.ytimg.com/vi/AVTzjyy7yDI/maxresdefault.jpg",
                "https://www.marinemammalcenter.org/storage/app/uploads/public/d10/5f0/4cd/thumb__1600_0_0_0_crop.jpg",
                "https://i.abcnewsfe.com/a/ccc2de0c-4237-45de-9579-ac66cc27d9e9/humpback-whale-gty-jt-240220_1708450395992_hpMain_16x9.jpg?w=992",
            ],
            counter: 0,
        }
    },
    methods: {
        increaseCounter(){
            // # this.counter += 1;
            // # this.counter = this.counter + 1;
            this.counter++;
        },
        decreaseCounter(){
            // # this.counter -= 1;
            // # this.counter = this.counter - 1;
            this.counter--;
        }
    },
    created(){
        console.log("Applicazione creata");
    }
}).mount('#app')


