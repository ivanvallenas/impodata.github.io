

const button = document.getElementById("button")
let users_list = []
var ingreso_exitoso = 0

var tull = sha256('Proyecta22704@ivan2')

console.log(tull)



//Crear lista de usuarios.Cada uno es un objeto. Se guardan en el array users_list 
function User (number,code,report,link){
    this.number=number
    this.code=code
    this.report=report
    this.link=link

    this.num_usuario=num_usuario
    this.clave=clave
    this.link_inicial=link_inicial
    this.r1a=r1a
    this.r1n=r1n
    this.r1l=r1l
    this.r2a=r2a
    this.r2n=r2n
    this.r2l=r2l
    this.r3a=r3a
    this.r3n=r3n
    this.r3l=r3l
    this.r4a=r4a
    this.r4n=r4n
    this.r4l=r4l
    this.r5a=r5a
    this.r5n=r5n
    this.r5l=r5l
    this.r6a=r6a
    this.r6n=r6n
    this.r6l=r6l
    this.r7a=r7a
    this.r7n=r7n
    this.r7l=r7l
    this.r8a=r8a
    this.r8n=r8n
    this.r8l=r8l
    this.r9a=r9a
    this.r9n=r9n
    this.r9l=r9l
    this.r10a=r10a
    this.r10n=r10n
    this.r10l=r10l



}

users_list[0] = new User(0,"856e2468b8b71d2b6aacab75a120e60bbd1f54a7d999437c92ee13b6ed923170",1,"https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21238&authkey=%21ADtrL8JDQb_A62U&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22")
users_list[1] = new User(1,"2f58f22651cb5f4ab4dd5d99791f9f1e9ebb3ca95caf9f1cf8cc9f451d05b607",1,"https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21238&authkey=%21ADtrL8JDQb_A62U&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22")



//Detectar uando el usurio hace click en login y guardar el nombre de usuario y contraseña.

button.addEventListener('click', (e) =>{
    e.preventDefault()
    sessionStorage.setItem("username",document.getElementById("username").value)
    sessionStorage.setItem("password",document.getElementById("password").value)
    const current_user = sha256(sessionStorage.getItem("username")+sessionStorage.getItem("password"))

    //Comprobar si los datos ingresados corresponden a los datos de un usuario. Si se cumple la condicion se guarda el link de reporte que le corresponde

    for (let i = 0; i < users_list.length; i++) {
        if(users_list[i].code==current_user){
            sessionStorage.setItem("current_user_report_link",users_list[i].link)
            ingreso_exitoso = 1
            window.location="reporte.html"            
            break
        }
    }
    
    if(ingreso_exitoso==0){
        alert("Usuario o contraseña incorrectos")
    }
    
})

   




