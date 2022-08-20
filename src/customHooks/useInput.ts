import { useEffect, useState } from "react";

const useInput = (validate: any, initialValue: any) => {
   const [value, setValue] = useState(initialValue);
   const [isTouched, setIsTouched] = useState(false);
   const [isChecked, setIsChecked] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

   const valueIsValid = validate && validate(value);
   const hasError = !valueIsValid && isTouched;

   useEffect(() => {
      setValue(() => initialValue);
   }, [initialValue]);

   const valueInputChange = (event: any) => {
      setValue(`${event?.target?.value ?? event}`);
   };

   const setQuillValue = (value: any) => {
      setValue(value);
   };

   const inputBlurHandler = () => {
      setIsTouched(true);
   };

   const setIsCheckedHandler = (event: any) => {
      setIsChecked(event.target.checked);
   };

   const onSetShowPassword = () => setShowPassword((prevData) => !prevData);

   const clearInputValue = () => setValue("");

   return {
      value,
      hasError,
      valueInputChange,
      valueIsValid,
      inputBlurHandler,
      isChecked,
      setIsCheckedHandler,
      clearInputValue,
      onSetShowPassword,
      showPassword,
      setQuillValue,
   };
};
export default useInput;
