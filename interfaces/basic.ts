(() => {

    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
      };
    
      let flash: Hero = {
        name: "Bassy Allen",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
      };
    
      let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ["Súper velocidad", "Súper fuerza"],
        getName() {
          return this.name;
        },
      };

})();
