import { useState } from "react";

function RegisterFormUseState() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [errors, setErrors] =
    useState<{
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name =
        "名前は必須です";
    }

    if (!email.includes("@")) {
      newErrors.email =
        "メール形式で入力してください";
    }

    if (password.length < 8) {
      newErrors.password =
        "8文字以上で入力してください";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "パスワードが一致しません";
    }

    setErrors(newErrors);

    return Object.keys(newErrors)
      .length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    alert("登録成功");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Register Form
        (useState Version)
      </h2>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {errors.name && (
          <p style={{ color: "red" }}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {errors.email && (
          <p style={{ color: "red" }}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {errors.password && (
          <p style={{ color: "red" }}>
            {errors.password}
          </p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        {errors.confirmPassword && (
          <p style={{ color: "red" }}>
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <button onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default RegisterFormUseState;