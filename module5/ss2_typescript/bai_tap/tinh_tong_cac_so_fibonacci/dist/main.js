function fibonacci(number) {
    if (number == 0) {
        return 0;
    }
    else if (number == 1) {
        return 1;
    }
    else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
let num = 10;
let sum = 0;
for (let i = 1; i <= num; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của dãy " + num + " số fibonacci này là: " + sum);
//# sourceMappingURL=main.js.map