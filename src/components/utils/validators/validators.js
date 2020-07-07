export const requiredField = value => {
  if (value) return undefined;

  return "Field is requred";
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length >= maxLength) return `Max length is ${maxLength}`;

  return undefined;
}

export const maxLength30 = value => {
  if (value && value.length >= 30) return "Max length is 30 simbols ";

  return undefined;
}