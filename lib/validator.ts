import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be at most 400 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(600, "Location must be at most 400 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  age: z.string(),
  language: z.string(),
  exprience: z.string(),
  skills: z.string().min(3),
});
