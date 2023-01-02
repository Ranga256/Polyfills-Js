Array.prototype.mySplice = function() {
    let result = [];
    let items = [];
    let start,delCount;
    if(arguments.length===0){
        return result;
    }
    
    //StartIndex
    start = arguments[0];
    if(start>=this.length){
        return result;
    }
    if(start<0){
        start = this.length+start;
    }

    //DeleteCount
    if(arguments.length==1){
        delCount = this.length-start;
    }
    if(arguments.length>1){
        delCount = arguments[1];
        if(delCount>this.length-start){
            delCount = this.length-start;
        }
    }

    //ItemsArray
    if(arguments.length>2){
        for(let i=2;i<arguments.length;i++){
            items.push(arguments[i]);
        }
    }

    if(delCount>0){
        for(let i=0;i<delCount;i++){
            result.push(this[start+i]);
        }

        for(let i=start,j=0;i<this.length-delCount;i++,j++){
            this[start+j] = this[start+j+delCount];
        }
        this.length = this.length-delCount;
    }
    
    if(items.length>0){
        for(let i=this.length-1;i>=start;i--){
            this[i+items.length]=this[i];
        }
        for(let i=0;i<items.length;i++){
            this[start+i]=items[i];
        }
    }

    return result;
}

const months = ['Jan', 'March', 'April', 'June'];
months.mySplice(1, 0, 'Feb');

console.log(months);

months.mySplice(4, 1, 'May');

console.log(months);
