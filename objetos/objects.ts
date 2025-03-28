(() => {
  let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: "Bassy Allen",
    age: 24,
    powers: ["super velocidad", "viajar en el tiempo"],
  };
  
  let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: "Clark Kent",
    age: 60,
    powers: ["Súper velocidad", "Súper fuerza"],
  };

  console.log(flash)

})();
