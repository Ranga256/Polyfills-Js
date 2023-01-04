Array.prototype.myFindLastIndex = function(cb) {
    for(let i=this.length-1;i>=0;i--){
        if(cb(this[i], i, this)){
            return i;
        }
    }
    return -1;
}

const nums = [1,2,5,22,62,92,12,232];

console.log(nums.myFindLastIndex((num)=>num%2==0)); //7

console.log(nums.myFindLastIndex((num)=>num<10)); //2