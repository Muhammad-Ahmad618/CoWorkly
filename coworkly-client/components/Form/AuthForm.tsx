"use client";

import { loginSchema, signUpSchema } from "@/schemas/auth";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import logo from "@/public/logo.png";
import { AppInputField } from "@/components/ui/appInputField";
import Image from "next/image";
import { Button } from "../ui/button";

export function AuthForm({
  FormType,
  InitialValues,
  handleSubmit,
  handleForm,
  showForgetPassword,
  setShowForgetPassword,
}: {
  FormType: "login" | "signup";
  InitialValues: any;
  handleSubmit: (values: any) => void;
  handleForm: () => void;
  showForgetPassword: boolean;
  setShowForgetPassword: (visible: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div className="basis-full md:basis-[50%] h-full">
      {FormType === "login" && (
        <div className="flex items-center cursor-pointer mb-5">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="text-xl font-semibold text-gray-950">oworkly</span>
        </div>
      )}
      <div>
        <h2 className="text-3xl font-semibold">
          {FormType === "login" ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className=" mt-2 text-sm text-gray-500">
          {FormType === "login"
            ? "Enter Your Account Credentials"
            : "Sign up to unlock your workspace experience."}
        </p>
      </div>
      <Formik
        enableReinitialize
        validationSchema={FormType === "login" ? loginSchema : signUpSchema}
        initialValues={InitialValues}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-4 mt-5">
            {FormType === "signup" && (
              <AppInputField
                name="username"
                label="Username"
                placeholder="Enter Your Username"
                type="text"
                labelClassName="text-sm"
                className="text-black "
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

            {FormType === "signup" && (
              <AppInputField
                name="confirm_password"
                label="Confirm Password"
                placeholder="Re-enter Your Password"
                type="password"
                labelClassName="text-sm"
                className="text-black"
              />
            )}
            {FormType === "login" && (
              <span className="self-end-safe">
                <p
                  className="text-xs underline hover:text-orange-500 cursor-pointer"
                  onClick={() =>
                    router.push("/authentication/login/forgot-password")
                  }
                >
                  Forget Password
                </p>
              </span>
            )}

            <Button className="mt-3 cursor-pointer py-5">
              {FormType === "login" ? "Sign In" : "Sign Up"}{" "}
            </Button>
          </Form>
        )}
      </Formik>

      {FormType === "login" && (
        <div className="border-t border-gray-200 my-7"></div>
      )}
      <div className={`text-center ${FormType === "signup" ? "mt-7" : ""} `}>
        <p className="text-sm text-gray-500">
          {FormType === "login"
            ? "Dont have an Account ?"
            : "Already have an Account ?"}{" "}
          <span
            className=" font-bold cursor-pointer text-black hover:underline hover:text-orange-500"
            onClick={() => {
              handleForm();
            }}
          >
            {FormType === "login" ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
}
