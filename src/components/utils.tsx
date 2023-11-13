// utils.ts

export const getValueForOption = (option: string): number => {
    switch (option) {
      case 'optionA':
        return 25;
      case 'optionB':
        return 50;
      case 'optionC':
        return 100;
      default:
        return 0;
    }
  };