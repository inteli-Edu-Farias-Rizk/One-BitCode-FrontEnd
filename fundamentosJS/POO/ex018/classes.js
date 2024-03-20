class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(mail,senha){
        if (mail == this.email && this.password == senha){
            console.log("Login bem sucedido")

        }else{
            console.log("Login não foi bem sucedido")
        }
    }
}

const Marco = new User("Marco" , "dudurizk@gmail.com",1234)
Marco.login("dudurizk@gmail.com",1234) 