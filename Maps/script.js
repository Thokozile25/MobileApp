const appId = 'WBLdtz4UczLN8oVeTlzI'
const appCode = 'XMuMiZAS1rTzc99380b3fw'


const autocompleteurl ="http://autocomplete.geocoder.api.here.com/6.2/suggest.json" + "?app_id=" + appId + "&app_code=" + appCode + "&query=" 

const geocodeUrl = "https://geocoder.api.here.com/6.2/geocode.json" + "?app_id=" + appId + "&app_code=" + appCode + "&searchtext="

var app = new Vue({
    el :'#app',
    data: {
        address: '',
        results: []
    },
    methods: {
        find: function(){
            var_this = this
            fetch(geocodeUrl + this.address)
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                console.log('geocode', response)
                console.log('location', response.Response.View[0].Result[0].Location.DisplayPosition)
                _this.geoResults = response.Response.View[0].Result
            })
        },

        search: function (){
            if(this.address.length > 5) {
                var _this = this
                fetch(autocompleteurl + this.address)
                    .then(function (response){
                        return response.json()
                    })
                    .then(function(response){
                        _this.results = response.suggestions
                    })
            } else {
                console.log('must be a valid address')
            }
        },
        klick:function (result) {
            this.address = result.label
        }
    }
})


