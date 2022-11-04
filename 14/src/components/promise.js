function increase(number) {
    const promise = new Promise((resolve, reject) => {
        // resolve -> 성공, reject -> 실패
        setTimeout(() => {
            const result = number + 10;
            if (result > 50) {
                const e = new Error('numberisTooBIG');
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });

    return promise;
}

increase.then(number => {
    // promise에서 resolve된 값은 .then을 통해 받아올 수 있다. 
    console.log(number);
    return increase(number); // promise 리턴
}).then(number => {
    console.log(number);
    return increase(number);
}).then(number => {
    console.log(number);
    return increase(number);
})
.catch(e => {
    console.log(e);
});
