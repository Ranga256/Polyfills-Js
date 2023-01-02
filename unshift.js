Array.prototype.myUnshift = function() {
    if(arguments.length>0){
        for(let i=this.length-1;i>=0;i--){
            this[i+arguments.length]=this[i];
        }
        for(let i=0;i<arguments.length;i++){
            this[i]=arguments[i];
        }
    }
    return this.length;
}

arr = [1,2,4,5,7]

arr.myUnshift(8,9,10);

console.log(arr);
