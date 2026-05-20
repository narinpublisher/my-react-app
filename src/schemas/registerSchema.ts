// 📁 src/schemas/registerSchema.ts

import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "名前は必須です"),

    email: z
      .string()
      .email("メール形式で入力してください"),

    password: z
      .string()
      .min(8, "8文字以上で入力してください"),

    confirmPassword: z.string(),
  })

  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "パスワードが一致しません",
      path: ["confirmPassword"],
    }
  );

export type RegisterFormData =
  z.infer<typeof registerSchema>;