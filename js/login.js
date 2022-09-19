const button = document.getElementById("button")
let users_list = []

//Crear lista de usuarios.Cada uno es un objeto. Se guardan en el array users_list 
function User (number,code,report,link){
    this.number=number
    this.code=code
    this.report=report
    this.link=link
}
users_list[0] = new User(0,"34567",0,"https://onedrive.live.com/embed?resid=A7412591AA38959E%2135596&authkey=%21AH41iMFULNBdzlg&em=3&wdItem=%22DASHBOARD%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1")
users_list[1] = new User(1,"34568",1,"4444")

//Detectar uando el usurio hace click en login y guardar el nombre de usuario y contraseña.

button.addEventListener('click', (e) =>{
    e.preventDefault()
    sessionStorage.setItem("username",document.getElementById("username").value)
    sessionStorage.setItem("password",document.getElementById("password").value)
    const current_user = sessionStorage.getItem("username")+sessionStorage.getItem("password")

    //Comprobar si los datos ingresados corresponden a los datos de un usuario. Si se cumple la condicion se guarda el link de reporte que le corresponde

    for (let i = 0; i < users_list.length; i++) {
        if(users_list[i].code==current_user){
            sessionStorage.setItem("current_user_report_link",users_list[i].link)
            window.location="reporte.html"            
            break
        }else{
        alert("Usuario o contraseña incorrectos")
        }
    }
    
})

   




