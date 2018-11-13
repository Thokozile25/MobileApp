var app = new Vue ({
    el: "#app",
    data: {
        username:"",
        password:"",
        usernameError: false,
        passwordError: false,
        usernameErrorMessage: [],
        passwordErrorMessage: []
    },
    methods:{
        login: function(){
            this.usernameError = false
            this.passwordError = false 
            this.usernameErrorMessage = []
            this.passwordErrorMessage = []


            if(this.password.length < 6) {
                this.passwordError = true
                this.passwordErrorMessage.push ({msg:'Password is too short',date: Date.now()})
                var errorMessage = {
                    msg: 'new Error Message',
                    date: Date.now()

            }
            this.passwordErrorMessage.push(errorMessage)
        }

            if(this.username.length < 3) {
                this.usernameError = true
                this.usernameErrorMessage.push ({msg:'Username is too short',date: Date.now()})
                var errorMessage = {
                    msg: 'new Error Message',
                    date: Date.now()
                }
                this.usernameErrorMessage.push(errorMessage)
            }


            if(!this.username.includes("@")){
                this.usernameError = true
                this.usernameErrorMessage.push({msg:'Username must be a valid email address',date: Date.now()})
            }
        } 
        
        

    }
})
// app.js
window.addEventListener('load', function() {

   var webAuth = new auth0.WebAuth({
     domain: 'thokozilendlebe.auth0.com',
     clientID: 'zcQl1KAq-txqnQu0PkDYl09uQXCMhCfa',
     responseType: 'token id_token',
     scope: 'openid',
     redirectUri: window.location.href
   });
 
   var loginBtn = document.getElementById('login');
 
   loginBtn.addEventListener('click', function(e) {
     e.preventDefault();
     webAuth.authorize();
   });
 
 });