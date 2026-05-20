// 📁 src/components/SimpleForm.tsx

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:
                  "メール形式で入力してください",
              },
            })}
            style={{
              width: "300px",
              padding: "8px",
            }}
          />
        </div>

        {errors.email && (
          <p style={{ color: "red" }}>
            {errors.email.message}
          </p>
        )}

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;