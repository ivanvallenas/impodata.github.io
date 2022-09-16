const username = document.getElementById("username")
const password = document.getElementById("password")
const button = document.getElementById("button")

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data ={
        username: username.value,
        password: password.value
    }
    console.log(data.password+data.username)

    if(data.username+data.password=="123456"){
        window.location.assign("https://ivanvallenas.github.io/impodata.github.io/");
    }
    else{
        alert("Contraseña incorreta")
    }
})


