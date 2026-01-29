const myPromise = new Promise((resolve, reject) => {
    let marks = 33;
    if (marks > 33) {
        resolve("pass");
    } else {
        reject("fail");
    }
})
myPromise.then((msg) => console.log(msg))
    .catch((error) => console.log("Some error occured", error));

// console.log(myPromise);
