Array.prototype.myjoin = function(separator = ','){
    let result = "";
    for(let i=0;i<this.length-1;i++){
        result += this[i] + separator;
    }
    result += this[this.length-1];
    return result;
}

const months = ['Jan', 'March', 'June','Dec','August','June','March'];

console.log(months.myjoin("")); //JanMarchJuneDecAugustJuneMarch