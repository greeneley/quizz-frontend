export const getLetterQuestion = (index: number) => {
  let letter;
  switch (index) {
    case 0:
      letter = "A";
      break;
    case 1:
      letter = "B";
      break;
    case 2:
      letter = "C";
      break;
    case 3:
      letter = "D";
      break;
  }
  return letter;
};
