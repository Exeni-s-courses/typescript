"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    let noName;
    const name = fullName("Tony", "Stark");
    //   const name = fullName(noName, "Stark");
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map