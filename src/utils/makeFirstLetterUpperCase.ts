export default (str: string) => {
  const splittedStr = str.toLowerCase().split('');
  splittedStr[0] = splittedStr[0].toUpperCase();
  return splittedStr.join('');
};
