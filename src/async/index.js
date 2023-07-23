const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(()=> resolve('async!'), 2000): reject(new Error('error'));
    });
}
const anotherFn = async () => {
    const algo = await fnAsync();
    console.log(algo);
    console.log('hola');
}
console.log('antes');
anotherFn();
console.log('despues');