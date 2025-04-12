(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress?: (id: string) => void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Javier",
    age: 26,
    address: {
      id: 125,
      zip: "0000",
      city: "Otawa",
    },
    getFullAddress(id: string) {
        return this.address?.city
    }
  };

  const client2: Client = {
    name: "Geral",
    age: 28,
  };
})();
