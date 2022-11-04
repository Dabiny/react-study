function increase(number) {
    const promise = new Promise((resolve, reject) => {
        // resolve -> 성공, reject -> 실패
        setTimeout(() => {
            const result = number + 10;
            if (result > 50) {
                const e = new Error("numberisTooBIG");
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });

    return promise;
}

async function runTasks() {
    try {
        let result = await increase(0);
        console.log(result);

        result = await increase(result);
        console.log(result);

        result = await increase(result);
        console.log(result);

        result = await increase(result);
        console.log(result);

    }
    catch (e){
        console.log(e);
    }
}