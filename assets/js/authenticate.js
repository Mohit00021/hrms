/*function login(){
    const u_name = document.getElementById("u_name").value
    const pwd = document.getElementById("pwd").value
    const remember = document.getElementById("check").checked
    const user = {
        u_name,
        pwd
    }
    let userList = []
    let userFound = false
    if (localStorage.getItem("user")) {
        userList = JSON.parse(localStorage.getItem("usersList"))
    }
    userList.map(u => {
        if (u.u_name === u_name && u.pwd === pwd) {
            if (remember) {
                localStorage.setItem("user", JSON.stringify(u))
            }
            sessionStorage.setItem("user", JSON.stringify(u))
            userFound = true
            return
        }
    })
    if (userFound) {
        window.location.pathname = "http://127.0.0.1:5500/index-1.html"
    } else {
        document.getElementById("noUser").innerHTML = "Username or password is incorrect!!"
    }
}

function registerUser(u_name,reg_pwd,pwd){
    const username = document.getElementById("email")
	const pass = document.getElementById("reg_pwd")
    const conPass = document.getElementById("pwd")
    console.log(pass)
    console.log(username)
    if (pass === conPass) {
        const user = {
            email,
            pass,
        }
        let userList = []
        if (localStorage.getItem("usersList")) {
            userList = JSON.parse(localStorage.getItem("usersList"))
        }
        userList = [
            ...userList,
            user
        ]
        localStorage.setItem("usersList", JSON.stringify(userList))
        sessionStorage.setItem("user", JSON.stringify(user))
        window.location.replace = "http://127.0.0.1:5500/index-1.html"
    }
}

function logOut(){
    sessionStorage.removeItem("user")
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user")
    }
    window.location.pathname = "FINAL HRMS/index.html"
}
*/
function index_1onload(){
    if(sessionStorage.getItem('user')!=null){
        
    }
    else{
        window.location.replace('../../index.html')
        
    }
    
}

function registerUser(u_name,reg_pwd,pwd){
    localStorage.setItem("user",u_name)
    localStorage.setItem("pwd",reg_pwd)
    localStorage.setItem("con_pwd",pwd)
    sessionStorage.setItem("user",u_name)
//    sessionStorage.setItem("pwd",reg_pwd)
    sessionStorage.setItem("con_pwd",pwd)
}

function loginuser(u_name,pwd){
    ls_user = localStorage.getItem("user")
    ls_pwd = localStorage.getItem("con_pwd")
    if (ls_user == u_name && ls_pwd == pwd)
    {
        sessionStorage.setItem('user',u_name)
        sessionStorage.setItem('password',pwd)
        window.location.replace('../../index-1.html')
    }
    else{
        alert("Invalid Credentials")
    }

}

function logOut(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('password')
}