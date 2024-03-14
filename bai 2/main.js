let count = 0
const helloWord = setInterval(() => {
    console.log('Hello world');
    count++;
    if (count === 5) {
        console.log('Done');
        count = 0
    }
}, 1000)