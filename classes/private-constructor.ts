(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Apocalipto");
      }
      return Apocalipsis.instance;
    }

    changeName(name: string): void {
      this.name = name;
    }
  }

  //   const apocalipsis = new Apocalipsis("Soy Apocalipto");
  const apocalipsis = Apocalipsis.callApocalipsis();

  //   console.log(apocalipsis);
})();
