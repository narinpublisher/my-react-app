//📁 src/components/RegisterForm.tsx

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema }
from "../schemas/registerSchema";

import type { RegisterFormData }
from "../schemas/registerSchema";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const password = watch("password", "");

  const getStrength = () => {
    if (password.length < 4) {
      return "Weak";
    }

    if (password.length < 8) {
      return "Medium";
    }

    return "Strong";
  };

  const onSubmit = (
    data: RegisterFormData
  ) => {
    console.log(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Register Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            style={{
              width: "300px",
              padding: "8px",
            }}
          />

          {errors.name && (
            <p style={{ color: "red" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            style={{
              width: "300px",
              padding: "8px",
            }}
          />

          {errors.email && (
            <p style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            style={{
              width: "300px",
              padding: "8px",
            }}
          />

          <p>
            Password Strength:
            {getStrength()}
          </p>

          {errors.password && (
            <p style={{ color: "red" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            style={{
              width: "300px",
              padding: "8px",
            }}
          />

          {errors.confirmPassword && (
            <p style={{ color: "red" }}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;