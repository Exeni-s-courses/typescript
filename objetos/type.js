"use strict";
(() => {
    let flash = {
        name: "Bassy Allen",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Súper velocidad", "Súper fuerza"],
        getName() {
            return this.name;
        },
    };
})();
