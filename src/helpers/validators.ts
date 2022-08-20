const checkValueIsEmpty = (value: string) => value.trim() !== "";

const checkEmailIsValid = (value: string) => {
   const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
   return emailRegex.test(`${value.trim().toLowerCase()}`);
};
const minValue = (value: number) => value > 0;

const checkPasswordIsValid = (value: string) => value.trim().length > 6;

export const validators = {
   checkValueIsEmpty,
   checkEmailIsValid,
   checkPasswordIsValid,
   minValue,
};
