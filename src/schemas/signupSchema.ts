import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  terms: z.boolean().refine((val) => val, {
    message: "You must accept the terms and conditions",
  }),
});
