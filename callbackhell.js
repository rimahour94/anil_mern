const funA = () => {
  console.log("quick start");
  setTimeout(() => {
    const funB = () => {
      console.log("FunA");
      setTimeout(() => {
        const funC = () => {
          console.log("Fun C");
        };
        funC();
      }, 3000);
    };

    const funD = () => {
      setTimeout(() => {
        console.log("FunD");
      }, 500);
    };

    funB();
    funD();
  }, 2000);
};

funA();
