//function ke andar function ke andar this referes to global execution context, that is in node is emptyobject and in browser is window
function setusername(username){
    //complex DB calls
    this.username = username
    console.log("called")

}
function createuser(username, email, password){
    setusername.call(this, username) //not able to call use call to call it but kaam ka call nahi --- hold reference 
    // apna this deta hu reference // this gives context of this function rather than thay function referring to GEC
    


    this.email = email
    this.password = password
}

const chai = new createuser("chai", "chai@facebook.com", "123")
console.log(chai)