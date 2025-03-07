function closureEx() {
    let a =0;
    return function c()
    {
        return a++;
    }

}


let b = closureEx();
// b = function c

console.log(b());
console.log(b());
console.log(b());
console.log(b());