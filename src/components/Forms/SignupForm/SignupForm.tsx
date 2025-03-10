"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupFormSchema } from "./SignupFormSchema";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { PasswordInput } from "~/components/ui/passwordInput";
import axios from "axios";
import { toast } from "sonner";

export default function SingupForm() {
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      country: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    try {
      const normalizeValues = {
        firstname:
          values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1),
        lastname:
          values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1),
        email: values.email,
        username: values.username,
        password: values.password,
        country:
          values.country.charAt(0).toUpperCase() + values.country.slice(1),
      };

      await axios.post("http://localhost:5000/users", normalizeValues);
      toast("Signup Succesful!");
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Firstname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Lastname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-red-600 text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
}
