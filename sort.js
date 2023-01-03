function defaultComparator(a, b) {
    a = a.toString();
    b = b.toString();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

Array.prototype.mysort = function(callBack = defaultComparator) {
    for(let i=0;i<this.length;i++){
        for(let j=i+1;j<this.length;j++){
            if(callBack(this[i],this[j])>0){
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
}

const months = ['Jan', 'March', 'April', 'June','Dec','August'];
months.mysort();
const points = [40, 100, 1, 5, 25, 10];
points.mysort(function(a, b){return b - a});
console.log(points);
console.log(months);
