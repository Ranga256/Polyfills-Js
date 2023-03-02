Promise.myrace = (arrOfPromises)=> {
  return new Promise((resolve, reject) => {
      for (let i = 0; i < arrOfPromises.length; i++) {
          arrOfPromises[i].then((data) => {
              resolve(data);
          }).catch((error) => {
              reject(error);
          })
      }
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, '3rd promise');
});

Promise.myrace([promise1,promise2]).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});

//two

Promise.myrace([promise1,promise3]).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});

//3rd promise
