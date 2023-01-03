Array.prototype.myshift = function() {
    if (this.length > 0) {
        let result = this[0];

        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }

        this.length--;
        return result;
    }
}

const months = ['Jan', 'March', 'April', 'June','Dec','August'];
const delItems = months.myshift();
console.log(months, delItems);
