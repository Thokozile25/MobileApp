var app = new Vue ({
    el: "#app",
    data: {
        username:"",
        password:"",
        usernameError: false,
        passwordError: false,
        usernameErrorMessage: ''
    },
    methods:{
        login: function(){
            this.usernameError = false
            this.passwordError = false 
            this.usernameErrorMessage = ''


            if(this.password.length < 6) {
                this.usernameError = true
            }

            if(this.username.length < 3) {
                this.usernameError = true
                this.usernameErrorMessage = 'Username is too short'
            }


            if(!this.username.includes("@")){
                this.usernameError = true
                this.usernameErrorMessage = 'Username must be a valid email address'
            }
        } 
        
        

    }
})