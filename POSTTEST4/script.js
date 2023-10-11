const body = document.body
const nav = document.querySelector('.navbar')
const btn_darkmode = document.querySelector('.btn_darkmode')

btn_darkmode.addEventListener("click", darkMode )

function darkMode(){
    body.classList.toggle('darkmode')
    nav.classList.toggle('darkmode')
    if (body.classList.contains('darkmode')){
        alert("MODE TELAH DI GANTI KE DARKMODE")
        

    }else{
        alert("MODE TELAH DI GANTI KE LIGHTMODE")
    }
}
