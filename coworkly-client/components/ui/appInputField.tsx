"use client";

import * as React from "react";
import { useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppInputFieldProps extends React.ComponentProps<"input"> {
  label?: React.ReactNode;
  labelClassName?: string;
}

export function AppInputField({
  className,
  label,
  labelClassName,
  name,
  type,
  ...props
}: AppInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Field>
      <FieldLabel htmlFor={name} className={labelClassName}>
        {label}
      </FieldLabel>
      <div className="relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground placeholder:text-xs selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className,
          )}
          {...props}
        />
        {type === "password" && (
          <div className="absolute right-3 bottom-2.5">
            {showPassword ? (
              <EyeOff
                className="text-gray-400 w-5 h-5 text-sm cursor-pointer hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        )}
      </div>
    </Field>
  );
}
