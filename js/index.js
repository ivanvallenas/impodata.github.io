const reporte_importacion_tractores_2017_2021 = document.getElementById("reporte_importacion_tractores_2017_2021")

reporte_importacion_tractores_2017_2021.addEventListener('click', (e) =>{
    e.preventDefault()
    sessionStorage.setItem("current_user_report_link", "https://onedrive.live.com/embed?resid=A7412591AA38959E%2135600&authkey=%21AJ5GsSmpocivaNY&em=3&wdItem=%22'Reporte%20Tractores'!A1%3AO422%22&wdDivId=%22myExcelDiv%22&wdHideGridlines=1&wdActiveCell=%22'Reporte%20Tractores'!A40%22" )
    window.location="reporte.html"            
})
