Array.prototype.myFind = function(cb) {
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i ,this)){
            return this[i];
        }
    }
}

const nums = [1,2,5,22,62,92,12,232];

console.log(nums.myFind((num)=>num%2==0)); //2

console.log(nums.myFind((num)=>num<10)); //1