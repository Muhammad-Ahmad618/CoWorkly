"use client";

import { useState } from "react";
import Image from "next/image";
import heroImage from "@/public/webp/heroImage.webp";
import { AuthForm } from "../Form/AuthForm";

export type AuthMode = "login" | "signup";

export function LoginForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const [form, setForm] = useState<AuthMode>("login");
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const InitialValues =
    form === "login"
      ? {
          email: "",
          password: "",
        }
      : {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        };

  const handleForm = () => {
    setForm((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <div className="h-screen md:max-w-[900px] w-full shadow-md bg-white backdrop-blur-md md:h-[600px] md:mx-10 md:rounded-2xl">
      <div className="p-8 flex items-start gap-10 h-full">
        <AuthForm
          FormType={form}
          InitialValues={InitialValues}
          handleSubmit={handleSubmit}
          handleForm={handleForm}
          showForgetPassword={showForgetPassword}
          setShowForgetPassword={setShowForgetPassword}
        />
        <div className="hidden md:block basis-[50%] w-full h-full">
          <Image
            src={heroImage}
            alt="Login Image"
            width={500}
            height={1000}
            className="object-cover w-full h-full rounded-2xl shadow-lg shadow-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
