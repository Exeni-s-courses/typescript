(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    return upper
      ? `${firstName} ${lastName || "----"}`.toUpperCase()
      : `${firstName} ${lastName || "----"}`;
  };

  const name = fullName("Tony", "Stark");
  const nameUpper = fullName("Tony", "Stark", true);

  console.log(name);
  console.log(nameUpper);
})();
