let abc = {
    burger: 150,
    pizza: 300,
    fries: 90
};

function pqr(xyz) {
    let mno = xyz.map(a => {
        if (!abc[a]) throw "Invalid item";
        return abc[a];
    });
    return mno.reduce((a, b) => a + b, 0);
}

try {
    let rst = pqr(["burger", "fries"]);
    console.log(rst);
} catch (uvw) {
    console.log(uvw);
}

try {
    let ghi = pqr(["pizza", "cola"]);
    console.log(ghi);
} catch (jkl) {
    console.log(jkl);
}
