import { useForm } from "react-hook-form";
import { useState } from "react";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="First Name" {...register("firstName")} />
        <input placeholder="Last Name" {...register("lastName")} />
        <input placeholder="Phone Number" {...register("username")} />
        <input placeholder="Password" type="password" {...register("password")} />
        <input placeholder="Confirm Password" type="password" {...register("confirmPassword")} />
        <button type="submit">Register</button>
      </form>
      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default RegisterForm;


