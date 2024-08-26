for(let i = 1; i <=3; i++) {
    console.log(i);
}

// 1, 2, 3, 4, 5
let count = 0
for(let i = 1; i <= 5; i++) {
    console.log(i);
    for(let j = 1; j <= 5; j++) {
        console.log(j);
        for(let k = 0; k <= 1; k++) {
            console.log(k);
            count++;
        }
    }
}

console.log(count);