import { z } from "zod"

export const SignupFormSchema = z.object({
    firstname: z.string()
        .nonempty({ message: "First name is required" })
        .min(2, { message: "First name must be at least 2 characters" })
        .max(50, { message: "First name must be at most 50 characters" }),

    lastname: z.string()
        .nonempty({ message: "Last name is required" })
        .min(2, { message: "Last name must be at least 2 characters" })
        .max(50, { message: "Last name must be at most 50 characters" }),

    email: z.string()
        .nonempty({ message: "Email is required" })
        .email({ message: "Invalid email format" }),

    username: z.string()
        .nonempty({ message: "Username is required" })
        .min(2, { message: "Username must be at least 2 characters" })
        .max(10, { message: "Username must be at most 10 characters" }),

    password: z.string()
        .min(5, { message: "Password must be at least 5 characters long" })
        .nonempty({ message: "Password is required" }),

    country: z.string()
        .nonempty({ message: "Country is required" })
});