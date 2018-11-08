function generateGuess() {
    return Math.round(Math.random() * 10)
}

const app = new Vue({
    el: "#app",
    data: {
      timer: 5,
      computerGuess: generateGuess(),
      userguess: 0,
      errors: [],
      showModal: false,
      failure: false,
      success: true,
      customMessage: ""
    },
    methods: {
        enter: function (){
            if(this.$data.userguess == this.$data.computerGuess){
                alert("You are correct!")
                this.timer = 60 
                this.computerGuess = generateGuess()
                
            }
            else{
                   // alert("Try again!")
                    this.errors.push(true)
                    if(this.errors.length >=3){
                        alert("You failed!")
                        this.timer = timerValue
                        this.errors = []
                        this.computerGuess = generateGuess()
                    }
                       
            }

        }
    }
  })

  function countDown() {
      app.timer-- 
      if(app.timer === 0){
          app.showModal = true,
          app.failure = true,
          app.success = false,
          app.timer = 5
          app.customMessage= "The correct value was" + app.computerGuess
      }
  }

  setInterval(countDown,1000)

    console.log(app.computerGuess)