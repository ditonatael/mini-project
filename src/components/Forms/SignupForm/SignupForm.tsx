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
import { toast } from "sonner";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import {
  collection,
  getDocs,
  db,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
} from "../../../../utils/firebase";

export default function SingupForm() {
  const router = useRouter();

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
      const existingUserQuery = query(
        collection(db, "users"),
        where("email", "==", values.email)
      );
      const existingUser = await getDocs(existingUserQuery);
      if (existingUser.docs.length > 0) {
        throw new Error("Email Already Registered");
      }

      const hashedPassword = await bcrypt.hash(values.password, 10);
      const normalizeValues = {
        firstname:
          values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1),
        lastname:
          values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1),
        email: values.email,
        username: values.username,
        password: hashedPassword,
        country:
          values.country.charAt(0).toUpperCase() + values.country.slice(1),
      };

      const docRef = await addDoc(collection(db, "users"), normalizeValues);
      await updateDoc(doc(db, "users", docRef.id), { id: docRef.id });
      toast("Signup Succesful!");
      form.reset();
      router.push("/signin");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Signup Failed! Please try again!";
      toast.error(errorMessage);
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
