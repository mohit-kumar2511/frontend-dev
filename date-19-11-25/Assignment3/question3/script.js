function abc(pqr, xyz) {
    this.pqr = pqr;
    this.xyz = xyz;
}

abc.prototype.mno = function(rst) {
    return this.xyz - (this.xyz * rst / 100);
};

let a1 = new abc("item1", 500);
let a2 = new abc("item2", 900);
let a3 = new abc("item3", 1200);

console.log(a1.pqr, a1.mno(10));
console.log(a2.pqr, a2.mno(20));
console.log(a3.pqr, a3.mno(15));
