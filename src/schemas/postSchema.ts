// 📁 src/schemas/postSchema.ts

import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),

  userId: z.number(),

  title: z
    .string()
    .min(1, "タイトルは必須です"),

  body: z
    .string()
    .min(10, "本文は10文字以上で入力してください"),
});

export const PostListSchema =
  z.array(PostSchema);

export type Post =
  z.infer<typeof PostSchema>;