var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log("T\u1ED5ng 30 s\u1ED1 nguy\u00EAn t\u1ED1 \u0111\u1EA7u ti\u00EAn l\u00E0: ".concat(sum));
