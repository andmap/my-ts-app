import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
interface Props {}

export const Forms: React.FC<Props> = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      {/*
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      */}
    </div>
  );
};
