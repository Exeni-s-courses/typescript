(() => {
  class Avenger {
    // private name: string = 'Scott Lang';
    // public team: string;
    // public realName?: string;
    
    static avgAge: number = 35;

    static getAvgAge() {
        return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {
      // this.name = name;
      // this.team = team;
      // this.realName = realName;
    }

    public bio(): string {
        return `${this.name} (${this.team})`;
    }

  }

  const antman: Avenger = new Avenger("Antman", "Capitan");

  console.log(antman);
  console.log(antman.bio());
})();
