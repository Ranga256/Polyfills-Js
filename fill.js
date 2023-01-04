Array.prototype.myfill = function(element, start = 0, end = this.length) {
    if(start<0){
        start += this.length;
    }

    if(end<0){
        end += this.length;
    }
    for(let i=start;i<end;i++){
        this[i] = element;
    }
    return this;
}

const nums = [1,2,5,22,62,92,12,232];

nums.myfill(2);
console.log(nums); //[2, 2, 2, 2, 2, 2, 2, 2]

nums.myfill(3,1,5)
console.log(nums); //[2, 3, 3, 3, 3, 2, 2, 2]