"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import heroImage from "@/public/webp/heroImage.webp";
import { AppInputField } from "../ui/appInputField";
import { Button } from "../ui/button";
import { Formik, Form } from "formik";
import logo from "@/public/logo.png";
import { loginSchema, signUpSchema } from "@/schemas/auth";

type AuthMode = "login" | "signup";

export function LoginForm() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const [form, setForm] = useState<AuthMode>("login");

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
    <div className="max-w-[900px] w-full shadow-md bg-white backdrop-blur-md h-[600px] rounded-2xl">
      <div className="p-8 flex items-start gap-10 h-full">
        <div className="basis-[50%] h-full">
          {form === "login" && (
            <div className="flex items-center cursor-pointer mb-5">
              <Image src={logo} alt="Logo" width={30} height={30} />
              <span className="text-xl font-semibold text-gray-950">
                oworkly
              </span>
            </div>
          )}
          <div>
            <h2 className="text-3xl font-semibold">
              {form === "login" ? "Welcome Back" : "Create an Account"}
            </h2>
            <p className=" mt-2 text-sm text-gray-500">
              {form === "login"
                ? "Enter Your Account Credentials"
                : "Sign up to unlock your workspace experience."}
            </p>
          </div>
          <Formik
            enableReinitialize
            validationSchema={form === "login" ? loginSchema : signUpSchema}
            initialValues={InitialValues}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-4 mt-7">
                {form === "signup" && (
                  <AppInputField
                    name="username"
                    label="Username"
                    placeholder="Enter Your Username"
                    type="text"
                    labelClassName="text-sm"
                    className="text-black"
                  />
                )}

                <AppInputField
                  name="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  type="email"
                  labelClassName="text-sm"
                  className="text-black"
                />
                <AppInputField
                  name="password"
                  label="Password"
                  placeholder="Enter Your Password"
                  type="password"
                  labelClassName="text-sm"
                  className="text-black"
                />

                {form === "signup" && (
                  <AppInputField
                    name="confirm_password"
                    label="Confirm Password"
                    placeholder="Re-enter Your Password"
                    type="password"
                    labelClassName="text-sm"
                    className="text-black"
                  />
                )}
                {form === "login" && (
                  <span className="self-end-safe">
                    <Link
                      href={"#"}
                      className="text-xs underline hover:text-orange-500"
                    >
                      Forget Password
                    </Link>
                  </span>
                )}

                <Button className="mt-3 cursor-pointer">
                  {form === "login" ? "Sign In" : "Sign Up"}{" "}
                </Button>
              </Form>
            )}
          </Formik>

          {form === "login" && (
            <div className="border-t border-gray-200 my-7"></div>
          )}
          <div className={`text-center ${form === "signup" ? "mt-7" : ""} `}>
            <p className="text-sm text-gray-500">
              {form === "login"
                ? "Dont have an Account ?"
                : "Already have an Account ?"}{" "}
              <span
                className=" font-bold cursor-pointer text-black hover:underline hover:text-orange-500"
                onClick={() => {
                  handleForm();
                }}
              >
                {form === "login" ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
        <div className="basis-[50%] w-full h-full">
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
