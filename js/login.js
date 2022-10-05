const button = document.getElementById("button")
let users_list = []
let current_user_reports_list=[]
var ingreso_exitoso = 0

//var tull = sha256('')
//console.log(tull)

//Crear lista de usuarios.Cada uno es un objeto. Se guardan en el array users_list 
function User (num_usuario,code,link_inicial,r1a,r1n,r1l,r2a,r2n,r2l,r3a,r3n,r3l,r4a,r4n,r4l,r5a,r5n,r5l,r6a,r6n,r6l,r7a,r7n,r7l,r8a,r8n,r8l,r9a,r9n,r9l,r10a,r10n,r10l){
    this.num_usuario=num_usuario
    this.code=code
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

users_list[0] = new User(0,"856e2468b8b71d2b6aacab75a120e60bbd1f54a7d999437c92ee13b6ed923170","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21238&authkey=%21ADtrL8JDQb_A62U&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22",1,"Importación tractores actulizado Pagado","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21238&authkey=%21ADtrL8JDQb_A62U&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22",1,"Importación tractores 2017-2021 Gratis","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21235&authkey=%21ACCrYePcpBzLH7c&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A50%22",0,"lollll","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21191&authkey=%21AAPqS8eMcnnwP8o&em=3&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdHideHeaders=1&wdActiveCell=%22'Hoja1'!H39%22&wdAllowInteractivity=0",0,0,"",0,0,"",0,0,"",0,0,"",0,0,"",0,0,"",0,"cholll","")
users_list[1] = new User(1,"2f58f22651cb5f4ab4dd5d99791f9f1e9ebb3ca95caf9f1cf8cc9f451d05b607","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21238&authkey=%21ADtrL8JDQb_A62U&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22",1,"Importación tractores actulizado Pagado","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21238&authkey=%21ADtrL8JDQb_A62U&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22",1,"Importación tractores 2017-2021 Gratis","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21235&authkey=%21ACCrYePcpBzLH7c&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A50%22",1,"lollll","https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21191&authkey=%21AAPqS8eMcnnwP8o&em=3&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdHideHeaders=1&wdActiveCell=%22'Hoja1'!H39%22&wdAllowInteractivity=0",0,0,"",0,0,"",0,0,"",0,0,"",0,0,"",0,0,"",0,"cholll","")

//Detectar uando el usurio hace click en login y guardar el nombre de usuario y contraseña.
button.addEventListener('click', (e) =>{
    e.preventDefault()
    sessionStorage.setItem("username",document.getElementById("username").value)
    sessionStorage.setItem("password",document.getElementById("password").value)
    const current_user = sha256(sessionStorage.getItem("username")+sessionStorage.getItem("password"))

    //Comprobar si los datos ingresados corresponden a los datos de un usuario. Si se cumple la condicion se guarda el link de reporte que le corresponde y la lista de reportes a los que el cliente tiene acceso
    for (let i = 0; i < users_list.length; i++) {
        if(users_list[i].code==current_user){
            sessionStorage.setItem("current_user_report_link",users_list[i].link_inicial)

            
            current_user_reports_list = Object.entries(users_list[i]).slice(3)
            current_user_reports_list=current_user_reports_list.map(x => x[1])
            sessionStorage.setItem("current_user_reports_list",  JSON.stringify(current_user_reports_list))

            ingreso_exitoso = 1
            window.location="reporte.html"            
            break
        }
    }
    
    if(ingreso_exitoso==0){
        alert("Usuario o contraseña incorrectos")
    }
    
}
)



   




