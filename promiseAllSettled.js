Promise.myall = (arrOfPromises)=> {
  return new Promise((resolve, reject) => {
      let result = [];
      for (let i = 0; i < arrOfPromises.length; i++) {
          arrOfPromises[i].then((data) => {
              result.push({status: "fulfilled",value: data
              });
              if (i == arrOfPromises.length - 1) {
                  resolve(result);
              }
          }).catch((error) => {
              result.push({status: "rejected",reason: error
              });
              if (i == arrOfPromises.length - 1) {
                resolve(result);
              }
          })
      }
  });
}

const p1 = Promise.resolve(2);
const p2 = Promise.reject("Some error");

const p3 = Promise.resolve("Success");

Promise.myall([p1,p2]).then((data)=>{
  console.log(data.status);
});

//[ fulfilled, rejected ]

Promise.myall([p1,p3]).then((data)=>{
  console.log(data.status);
});

//[fulfilled, fulfilled]
