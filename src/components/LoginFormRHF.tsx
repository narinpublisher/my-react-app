// 📁 src/components/LoginFormRHF.tsx

import { useForm } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

function LoginFormRHF() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);

    // 認証失敗を再現
    setError("root", {
      message: "ログインに失敗しました",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required:
                "メールアドレスは必須です",
            })}
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

        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required:
                "パスワードは必須です",
            })}
            style={{
              width: "300px",
              padding: "8px",
            }}
          />

          {errors.password && (
            <p style={{ color: "red" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        {errors.root && (
          <p style={{ color: "red" }}>
            {errors.root.message}
          </p>
        )}

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginFormRHF;