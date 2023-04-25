
// https://masai-api-mocker.herokuapp.com/

import { navbar } from "../components/navbar.js"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar()


let reg_btn= document.getElementById("Register");
reg_btn.addEventListener("click",()=>{
    Register()
})

let log_btn=document.getElementById("Login");
log_btn.addEventListener("click",()=>{
    Login()
})

class User {

    constructor() {

    }

    validate_UserName(username) {

        return username.includes("@") ? false : true;
    }

    validate_Password(password) {

        return password.length < 8 ? false : true;
    }

    async signup(n, e, u, p, m, d) {

        let isValidated = this.validate_UserName(u) && this.validate_Password(p);


        if(isValidated){
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;

            const register_url= `https://masai—api—mocker.herokuapp.com/auth/register`
           

            const response= await fetch(register_url,{
                method: "POST", 
                body: JSON.stringify(this),
                mode: 'cors',
                headers:{
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json();
            console.log(data)
        }

    }

    async Login(u,p){
        const login_data={
            username :u,
            password:p
        };

        
        const login_api= `https://masai—api—mocker.herokuapp.com/auth/register`

        const response =await fetch(login_api,{
            method:'POST',
            body: JSON.stringify(login_data),

            headers:{
                'Content-type':"application/json",
            }
        })
    }
}

let user= new User()

const Register = () => {
    const reg_form=document.getElementById("reg_form")

    const name= reg_form.name.value;
    const email = reg_form.email.value;
    const username = reg_form.username.value;

    const password = reg_form.password.value;
    const mobile = reg_form.mobile.value;
    const description = reg_form.description.value;


    user.signup(name,email,username,password,mobile,description)
    console.log(user)
}


const Login=()=>{
    const username=document.getElementById("login-username");
    const password=document.getElementById("login-password");

    user.Login(username,password)
}