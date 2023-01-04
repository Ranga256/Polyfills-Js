Array.prototype.mypop = function () {
    if(this.length>0){
        let res = this[this.length-1];
        this.length--;
        return res;
    }
}

const months = ['Jan', 'March', 'June','Dec','August'];

const lastEle = months.mypop();

console.log(months, lastEle); //[ 'Jan', 'March', 'June', 'Dec' ] August