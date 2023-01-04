Array.prototype.myIndexOf = function(element, fromInd = 0) {
    for(let i=fromInd;i<this.length;i++){
        if(this[i] === element){
            return i;
        }
    }
    return -1;
}

const months = ['Jan', 'March', 'June','Dec','August','June','March'];

console.log(months.myIndexOf('June')); //2

console.log(months.myIndexOf('September')); //-1