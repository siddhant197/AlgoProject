console.log("Hello World");

new Promise((res,rej) => {
    console.log("Promise Function");
    // res("hello Wordl promise");
});
    // .then((response) => {
    //     console.log(response);
    // }).catch(err => {
    //     console.log(err);
    // }).then(() => {
    //     console.log("then after finally");
    // }).finally(() => {
    //     console.log("finally");
    // });
setTimeout(() => {
    console.log("Set Timeout");
},0);

process.nextTick(() => {
    console.log("Process Next Tick");
});

console.log("Hello World");

setImmediate(() => {
    console.log("Set Immediate");
});