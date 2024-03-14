let delay = 1000; 
const hello = () => {
    console.log('Hello world');
    delay += 1000; 
    setTimeout(hello, delay);
}
setTimeout(hello,delay)