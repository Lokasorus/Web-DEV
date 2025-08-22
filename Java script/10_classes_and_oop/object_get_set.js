const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    // i dont want that everyone could access these values directly

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email) //no email property still giving the output// _ indicates defining private property but get set me underscore ka meaning ni rehta utna

//.length array bts uses get property to return length of array and set doesnt do anything just take the value

//new proposal regarding the private properties in ES 22
// we are using # instead of _