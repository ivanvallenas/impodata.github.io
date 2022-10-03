const reporte_importacion_tractores_2017_2021 = document.getElementById("reporte_importacion_tractores_2017_2021")

reporte_importacion_tractores_2017_2021.addEventListener('click', (e) =>{
    e.preventDefault()
    sessionStorage.setItem("current_user_report_link", "https://onedrive.live.com/embed?resid=FB10EC073F6BB277%21235&authkey=%21ACCrYePcpBzLH7c&em=3&wdItem=%22'Reporte'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte'!A50%22" )
    window.location="reporte.html"            
})
