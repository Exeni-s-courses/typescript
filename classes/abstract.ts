(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo a salvo!";
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return "MUNDO CONQUISTADO!";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");

  //   console.log(wolverine);
  //   console.log(magneto);

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  printName(wolverine);
})();
