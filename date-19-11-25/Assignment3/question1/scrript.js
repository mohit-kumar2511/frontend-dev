class abc {
    constructor(pqr, xyz) {
        this.pqr = pqr;
        this.xyz = xyz;
    }
    mno() {
        return this.xyz.reduce((a, b) => a + b, 0) / this.xyz.length;
    }
    rst() {
        let uvw = this.mno();
        if (uvwxyz >= 90) return "A";
        if (uvw >= 75) return "B";
        if (uvw >= 50) return "C";
        return "F";
    }
}

let stu1 = new abc("s1", [90, 87, 92]);
let stu2 = new abc("s2", [70, 60, 72]);
let stu3 = new abc("s3", [40, 55, 38]);

console.log(stu1.pqr, stu1.mno(), stu1.rst());
console.log(stu2.pqr, stu2.mno(), stu2.rst());
console.log(stu3.pqr, stu3.mno(), stu3.rst());
