Array.prototype.myLastIndexOf = function(element, fromInd = this.length-1) {
    for(let i=fromInd;i>=0;i--){
        if(this[i] === element){
            return i;
        }
    }
    return -1;
}

const months = ['Jan', 'March', 'June','Dec','August','June','March'];

console.log(months.myLastIndexOf('June')); //5

console.log(months.myLastIndexOf('September')); //-1