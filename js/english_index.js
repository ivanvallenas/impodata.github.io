const reporte_importacion_tractores_gratis = document.getElementById("reporte_importacion_tractores_gratis")

reporte_importacion_tractores_gratis.addEventListener('click', (e) =>{
    e.preventDefault()
    sessionStorage.setItem("current_user_report_link", "https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21241&authkey=%21AE8rEAT-K_nvnE8&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A400%22" )
    window.location="reporte.html"            
})
