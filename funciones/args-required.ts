(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  let noName: string;
  const name = fullName("Tony", "Stark");
//   const name = fullName(noName, "Stark");

  console.log(name);
})();
