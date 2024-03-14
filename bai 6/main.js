function scrollToTop() {
    var currentPosition = window.pageYOffset
    console.log(currentPosition)
    var interval = setInterval(function() {
        let loop = Math.floor(currentPosition -= currentPosition * 0.05) 
        window.scrollTo(0, loop)
        if (loop <= 0) {
            clearInterval(interval)
        }
        console.log(loop)
    }, 15)
}
const scrollTop = document.querySelector('.scroll-top')
window.addEventListener("scroll",()=>{
    let scroll = window.scrollY
    console.log(scroll)
    if(scroll > 600){
        scrollTop.classList.remove('none')
    }else{
        scrollTop.classList.add('none')
    }
})
