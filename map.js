Array.prototype.mymap = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let value = cb(this[i], i, this);
        result.push(value);
    }
    return result;
}

const arr = [1,2,3,4,5];

const arr1 = arr.mymap((num)=>num*2);

console.log(arr1); //[ 2, 4, 6, 8, 10 ]
