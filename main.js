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
    
    for (let i = 0; i < mat.length; i += 1) {
        const row = mat[i];
        const f = row[0];
        const l = row[4];
        
        console.log(`${f} ${l}`);
    }
    
}

main();