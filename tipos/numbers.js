"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number('123');
    console.log({ avengers });
    console.log(typeof (NaN));
})();
//# sourceMappingURL=numbers.js.map