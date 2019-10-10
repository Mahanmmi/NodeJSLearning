function add(a, b) {
    return new Promise((resolve, reject) => {
        if (a + b != 6) {
            setTimeout(() => {
                resolve(a + b);
            }, 2000);
        } else {
            reject(new Error('!!!'));
        }
    })
}

async function doWork() {
    const sum = await add(1, 99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, 3);
    return sum3;
}

doWork().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('This errrrrr',err);
});