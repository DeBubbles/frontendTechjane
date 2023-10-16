// utils.ts

export const getValueForOption = (option: string): number => {
    switch (option) {
      case 'optionA':
        return 1;
      case 'optionB':
        return 2;
      case 'optionC':
        return 3;
      default:
        return 0;
    }
  };