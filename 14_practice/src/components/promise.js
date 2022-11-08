function increase(number) {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			const result = number + 1;
			if (result > 50) {
				const e = new Error('NumberIsBig');
				return rej(e);
			}
			res(result);
		}, 1000);
	});
	return promise; // 프로미스 반환
}

const runTasks = async() => {
    try { // try catch구문을 사용해서 에러를 처리한다. 
        let res = await increase(0);
        console.log(res);

        res = await increase(res);
        console.log(res);

        res = await increase(res);
        console.log(res);
    }
    catch(e) { // 에러 처리 
        console.log(e);
    }
}