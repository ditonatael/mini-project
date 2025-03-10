import { z } from "zod"

export const SignupFormSchema = z.object({
    firstname: z.string()
        .min(2, { message: "First name must be at least 2 characters" })
        .max(50, { message: "First name must be at most 50 characters" })
        .nonempty({ message: "First name is required" }),

    lastname: z.string()
        .min(2, { message: "Last name must be at least 2 characters" })
        .max(50, { message: "Last name must be at most 50 characters" })
        .nonempty({ message: "Last name is required" }),

    email: z.string()
        .email({ message: "Invalid email format" })
        .nonempty({ message: "Email is required" }),

    username: z.string()
        .nonempty({ message: "Username is required" }),

    password: z.string()
        .min(5, { message: "Password must be at least 5 characters long" })
        .nonempty({ message: "Password is required" }),

    country: z.string()
        .nonempty({ message: "Country is required" })
});