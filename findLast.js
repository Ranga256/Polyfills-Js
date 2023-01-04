Array.prototype.myFindLast = function(cb) {
    for(let i=this.length-1;i>=0;i--){
        if(cb(this[i],i ,this)){
            return this[i];
        }
    }
}

const nums = [1,2,5,22,62,92,12,232];

console.log(nums.myFindLast((num)=>num%2==0)); //232

console.log(nums.myFindLast((num)=>num<10)); //5