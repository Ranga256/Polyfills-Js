Array.prototype.mypush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}

const months = ['Jan', 'March', 'June','Dec','August'];
months.mypush("April","May");
console.log(months);
