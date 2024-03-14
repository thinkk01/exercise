
const listImage = document.querySelector(".list__image")
const imgs = document.getElementsByTagName('img')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const length = imgs.length
let current = 0
const handleChangeSlide = ()=>{
    if(current == length -1){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    }else{
        current++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    }
}
// setInterval(handleChangeSlide,3000)
let handle = setInterval(handleChangeSlide,3000)
btnRight.addEventListener('click',()=>{
    clearInterval(handle)
    handleChangeSlide()
    handle = setInterval(handleChangeSlide,3000)
})
btnLeft.addEventListener('click',()=>{
    clearInterval(handle)
    if(current == 0){
        current = length -1 
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    }else{
        current--
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    }
    handle = setInterval(handleChangeSlide,3000)
})