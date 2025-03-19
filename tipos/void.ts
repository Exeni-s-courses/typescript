(() => {
  function callBatman(): void {}

  const a = callBatman();

  const b = (): void => {
    return;
  };

  console.log(a);
})();
