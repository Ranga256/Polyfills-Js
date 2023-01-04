Array.prototype.myIncludes = function(element, fromInd = 0) {
    for(let i=fromInd;i<this.length;i++){
        if(this[i] === element){
            return true;
        }
    }
    return false;
}

const months = ['Jan', 'March', 'June','Dec','August','June','March'];

console.log(months.myIncludes('June')); //true

console.log(months.myIncludes('September')); //false