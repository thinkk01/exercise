const hello = (time) => {
    setTimeout(() =>{
        console.log(`Hello after ${time/1000} seconds`)
    },time)
}
hello(4000)
// hello(8000)