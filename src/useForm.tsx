import React, { useState } from "react";

interface Props {}

interface FormData {
  email: string;
  password: string;
}

export const useForm = (initialValues: FormData) => {
  const [values, setValues] = useState(initialValues);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return [values, onChange];
};
