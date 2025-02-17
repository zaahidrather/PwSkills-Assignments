let name = "Zahid";

function createPromise(name) {
    return new Promise(function exec(resolve, reject) {
        resolve(`Hello ${name}`)
    });
}


createPromise(name).then((obj) => { console.log(obj) });