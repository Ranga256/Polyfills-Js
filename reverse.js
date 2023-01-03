Array.prototype.myshift = function() {
    let end = this.length;
    if (this.length > 0) {
        for (let i = 0; i < end/2; i++) {
            this[i] = this[end-1-i];
        }
    }
    return this;
}

const months = ['Jan', 'March', 'June','Dec','August'];
months.reverse();
console.log(months);

//[ 'August', 'Dec', 'June', 'March', 'Jan' ]
