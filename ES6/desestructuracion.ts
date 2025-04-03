(() => {
  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };
  const avengers: Avenger = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey JR.",
    vision: "Paul Bettany",
    active: true,
    power: 1500.123,
  };

  const { power, vision } = avengers;

  console.log(power.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ vision, ...rest }: Avenger) => {
    console.log(vision);
  };

  printAvenger(avengers);


//   const avengersArr: string[] = ['Cap. America', 'Iron Man', 'Hulk'];
  const avengersArr: [string, boolean, number] = ['Cap. America', true, 150];

  const [ capitan, ironman, isNumber] = avengersArr;
  console.log({ironman})
})();
