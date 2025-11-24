class abc {
    constructor(pqr, xyz) {
        this.pqr = pqr;
        this.xyz = xyz;
    }
    mno() {
        return this.pqr + " works in " + this.xyz;
    }
}

class pqr extends abc {
    mno() {
        return this.pqr + " manages " + this.xyz;
    }
}

let e1 = new abc("ram", "sales");
let e2 = new pqr("shyam", "marketing");

console.log(e1.mno());
console.log(e2.mno());
