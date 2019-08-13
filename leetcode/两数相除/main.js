/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let consult = dividend / divisor;
    if(consult >= Math.pow(2, 31) - 1)
        return Math.pow(2, 31) - 1;
    else if(consult <= Math.pow(2, 31) * (-1))
        return Math.pow(2, 31) * (-1);
    else if(consult > 0)
        return Math.floor(consult);
    else
        return Math.ceil(consult);
};

console.log(divide(-2147483648, 1));