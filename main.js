function getMatrix() {
    return [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];
}

function main() {
    const mat = getMatrix();
    console.log(mat[0][0]);
    console.log(mat[1][1]);
    console.log(mat[2][2]);
    console.log(mat[3][3]);
    console.log(mat[4][4]);
}

main();