Array.prototype.myReverse = function() {
    let end = this.length;
    if (this.length > 0) {
        for (let i = 0; i < end/2; i++) {
            let temp = this[i];
            this[i] = this[end-1-i];
            this[end-1-i] = temp;
        }
    }
    return this;
}

const months = ['Jan', 'March', 'June','Dec','August'];
months.myReverse();
console.log(months);

//[ 'August', 'Dec', 'June', 'March', 'Jan' ]
