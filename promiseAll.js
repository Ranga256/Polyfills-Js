Promise.myall = (arrOfPromises)=> {
    return new Promise((resolve, reject) => {
        let result = [];
        total = 0;
        for (let i = 0; i < arrOfPromises.length; i++) {
            arrOfPromises[i].then((data) => {
                result.push(data);
                total++:
                if (total == arrOfPromises.length) {
                    resolve(result);
                }
            }).catch((error) => {
                reject(error);
            })
        }
    });
}

const p1 = Promise.resolve(2);
const p2 = Promise.reject("Some error");

const p3 = Promise.resolve("Success");

Promise.myall([p1,p2]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//some error

Promise.myall([p1,p3]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//[2,'Success]
