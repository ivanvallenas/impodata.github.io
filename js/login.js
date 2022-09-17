const button = document.getElementById("button")

let users = []

function User (number,code,report,link){
    this.number=number
    this.code=code
    this.report=report
    this.link=link
}

users[0] = new User(0,"34567",0,"https://onedrive.live.com/embed?resid=A7412591AA38959E%2135596&authkey=%21AH41iMFULNBdzlg&em=3&wdItem=%22DASHBOARD%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1")
users[1] = new User(1,"34568",1,"4444")



button.addEventListener('click', (e) =>{
    e.preventDefault()
    
    sessionStorage.setItem("primera",document.getElementById("username").value)
    sessionStorage.setItem("segunda",document.getElementById("password").value)
    const current_user = sessionStorage.getItem("primera")+sessionStorage.getItem("segunda")
    console.log(current_user)

    for (let i = 0; i < users.length; i++) {
        if(users[i].code==current_user){
            sessionStorage.setItem("tercera",users[i].link)
            console.log(sessionStorage.getItem("tercera"))
            window.location="reporte.html"            

            break
        }else{
        alert("Usuario o contraseña incorrectos")
        }
    }
})





