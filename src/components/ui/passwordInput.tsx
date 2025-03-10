"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends React.ComponentProps<"input"> {
  field?: any;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, field, ...props }, ref) => {
    const [view, setView] = useState(false);

    return (
      <div className={cn("flex h-10 w-full relative", className)}>
        <input
          {...field}
          ref={ref}
          type={!view ? "password" : "text"}
          placeholder="Password"
          className="h-full w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          {...props}
        />
        <span
          onClick={() => setView(!view)}
          className="w-fit absolute right-3 top-2.5 hover:cursor-pointer"
        >
          {!view ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
