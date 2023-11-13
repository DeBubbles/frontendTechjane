// utils.ts

interface ISelectedAnswer {
  category: string;
  answer: string;
  price: number;
}

export const getValueForOption = (answer: ISelectedAnswer): number => {
  switch (answer.answer) {
    case "optionA":
      return 1;
    case "optionB":
      return 2;
    case "optionC":
      return 3;
    default:
      return 0;
  }
};
