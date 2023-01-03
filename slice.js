Array.prototype.myslice = function(start = 0, end = this.length) {
    let res = [];
    if(start<0){
        start = start + this.length;
    }

    if(end<0){
        end = end + this.length;
    }

    for(let i=start;i<end;i++){
        res.push(this[i]);
    }
    return res;
}

const months = ['Jan', 'March', 'April', 'June','Dec','August'];
months.myslice(1,4);
console.log(months.myslice(1,4));
