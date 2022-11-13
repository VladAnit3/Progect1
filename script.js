const ifCountNurt = (num) => {
    let arr = String(num).split('');
    let result = arr.reduce((acum, el, i, arr) => {
        return acum = acum + el ** arr.length
    }, 0);
    return (result == num) ? true : false
}

console.log(ifCountNurt(7));// = [7^1] = [7] -> true
console.log(ifCountNurt(371));// = [3^3 + 7^3 + 1^3] = [27 + 343 + 1] = [371] -> true
console.log(ifCountNurt(1652));// = [1^4 + 6^4 + 5^4 + 2^4] = [1 + 1296 + 625 + 16] = [1938] -> false
