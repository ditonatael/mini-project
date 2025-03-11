"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SigninFormSchema } from "./SigninFormSchema";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { PasswordInput } from "~/components/ui/passwordInput";
import { useContext } from "react";
import { userContext } from "~/supports/context/useUserContext";
import axios from "axios";
import { toast } from "sonner";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const { setUserData } = useContext(userContext);
  const router = useRouter();

  const form = useForm<z.infer<typeof SigninFormSchema>>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SigninFormSchema>) {
    try {
      const { data: user } = await axios.get(
        `http://localhost:5000/users?email=${values.email}`
      );
      if (user.length < 1) throw new Error("User not found!");

      const comparePassword = await bcrypt.compare(
        values.password,
        user[0].password
      );
      if (!comparePassword) throw new Error("Password doesn't match!");

      setUserData({
        username: user[0].username,
      });

      toast("Login Success");
      router.push("/");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login Failed! Please try again!";
      toast.error(errorMessage);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-white">
          Log in
        </Button>
      </form>
    </Form>
  );
}
