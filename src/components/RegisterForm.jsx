import { useForm } from "react-hook-form";
import { useState } from "react";

const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
       <input 
          placeholder="First Name" 
          {...register("firstName", { 
            required: "First name is required!",
            minLength: { value: 3, message: "Minimum 3 characters" },
            maxLength: { value: 255, message: "Maximum 255 characters" }
          })} 
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input 
          placeholder="Last Name" 
          {...register("lastName", { 
            required: "Last name is required!",
            minLength: { value: 3, message: "Minimum 3 characters" },
            maxLength: { value: 255, message: "Maximum 255 characters" }
          })} 
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input
          placeholder="Phone Number"
          {...register("username", {
            required: "Phone number is required!",
            pattern: {
              value: /^(?:\+98|0)9\d{9}$/,
              message: "Phone number must be a valid 11-digit number starting with 09",
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}

       <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="password-input"
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
              message: "Must contain upper, lower, number & symbol"
            }
          })}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="show-password"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.password && <p>{errors.password.message}</p>}

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: value =>
            value === watch('password') || "Passwords do not match"
        })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

       <button type="submit">Register</button>
      </form>

     {formData && (
      <div>
        <h3>Submited Data:</h3>
        <ul>
          <li><strong>Name:</strong> {formData.firstName}</li>
          <li><strong>Last name:</strong> {formData.lastName}</li>
          <li><strong>Username:</strong> {formData.username}</li>
        </ul>
      </div>
    )}
    </>
  );
};

export default RegisterForm;



