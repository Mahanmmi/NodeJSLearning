const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([3,7,13]);
        reject('Things went wrong');
    }, 2000);
});

doWorkPromise
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
