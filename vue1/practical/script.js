var app = new Vue({
    el: "#app",
    data: {
        guess: 0,
        userguess: 0,
    },
    methods: {
        reverseMessage: function () {
            if(this.$data.userguess == this.$data.guess){
                alert ("Correct!")
            }else {
                alert ("Incorrect,try again.")
            }
                
            
        }
    }
})

app.guess = Math.round(Math.random() * 10)

console.log(app.guess)


    