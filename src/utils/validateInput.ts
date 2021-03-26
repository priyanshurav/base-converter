import { Base } from '../types';

const validDecimalNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const validOctalNumbers = ['0', '1', '2', '3', '4', '5', '6', '7'];

const validBinaryNumbers = ['0', '1'];

// prettier-ignore
const validHexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// prettier-ignore
const validDuodecimalNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B'];

export default (value: string, base: Base): boolean => {
  switch (base) {
    case 0:
      return false;
    case 2:
      const splittedBinaryText = value.split('');
      for (let i = 0; i < splittedBinaryText.length; i++)
        if (!validBinaryNumbers.includes(splittedBinaryText[i])) return false;
      return true;
    case 8:
      const splittedOctalText = value.split('');
      for (let i = 0; i < splittedOctalText.length; i++)
        if (!validOctalNumbers.includes(splittedOctalText[i])) return false;
      return true;
    case 10:
      const splittedDecimalText = value.split('');
      for (let i = 0; i < splittedDecimalText.length; i++)
        if (!validDecimalNumbers.includes(splittedDecimalText[i])) return false;
      return true;
    case 12:
      const splittedDuodecimalText = value.split('');
      for (let i = 0; i < splittedDuodecimalText.length; i++)
        if (
          !validDuodecimalNumbers.includes(
            splittedDuodecimalText[i].toUpperCase()
          )
        )
          return false;
      return true;
    case 16:
      const splittedHexText = value.split('');
      for (let i = 0; i < splittedHexText.length; i++)
        if (!validHexNumbers.includes(splittedHexText[i].toUpperCase()))
          return false;
      return true;
    default:
      return false;
  }
};
