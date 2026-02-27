"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { KeyRound, ArrowLeft } from "lucide-react";
import { AppInputField } from "@/components/ui/appInputField";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ForgetPassword() {
  const handleSubmit = (values: { email: string }) => {
    console.log(values);
    toast.success("Otp sent successfully", {
      position: "top-center",
      duration: 2000,
    });
    setTimeout(() => {
      setShowOtpScreen(true);
    }, 2500);
  };

  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-white  md:max-w-140 h-full md:h-[500px] p-10 w-full md:rounded-3xl shadow-lg flex flex-col items-center justify-center">
      <div className="w-full text-center mb-5 space-y-5">
        <div className="w-12 h-12 bg-linear-to-r mx-auto from-orange-600 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-gray-200">
          <KeyRound className="text-white" />
        </div>

        {showOtpScreen ? (
          <h1 className="text-3xl font-semibold">Enter Verification Code</h1>
        ) : (
          <h1 className="text-3xl font-semibold">Forget Password</h1>
        )}

        {showOtpScreen ? (
          <p className="text-sm">
            We’ve sent a verification code on your email address.
          </p>
        ) : (
          <p className="text-sm">
            A Code will be sent to your email to help reset your password.
          </p>
        )}
      </div>
      <Formik
        enableReinitialize
        initialValues={{ email: "" }}
        onSubmit={
          showOtpScreen
            ? () => {
                toast.success("Otp verified successfully", {
                  position: "top-center",
                  duration: 2000,
                });
                setTimeout(() => {
                  router.push(
                    "/authentication/login/forgot-password/reset-password",
                  );
                }, 2500);
              }
            : handleSubmit
        }
      >
        {() => (
          <Form className="w-full space-y-5 mt-3">
            {showOtpScreen ? (
              <InputOTP maxLength={6} defaultValue="">
                <InputOTPGroup className="flex justify-between w-full">
                  <InputOTPSlot index={0} className="border-2 w-12 h-12" />
                  <InputOTPSlot index={1} className="border-2 w-12 h-12" />
                  <InputOTPSlot index={2} className="border-2 w-12 h-12" />
                  <InputOTPSlot index={3} className="border-2 w-12 h-12" />
                  <InputOTPSlot index={4} className="border-2 w-12 h-12" />
                  <InputOTPSlot index={5} className="border-2 w-12 h-12" />
                </InputOTPGroup>
              </InputOTP>
            ) : (
              <AppInputField
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
            )}
            <Button type="submit" className="w-full mt-4 cursor-pointer py-5">
              {showOtpScreen ? "Verify Code" : "Send Reset Code"}
            </Button>
          </Form>
        )}
      </Formik>
      <div
        className="group flex items-center mt-10 "
        onClick={
          showOtpScreen
            ? () => setShowOtpScreen(false)
            : () => router.push("/authentication/login")
        }
      >
        <ArrowLeft className=" mr-2 w-4 transition-all duration-300 group-hover:translate-x-[-5px]" />
        <p className="group-hover:underline cursor-pointer text-xs">
          {showOtpScreen ? "Back to Forget Password" : "Back to Login"}
        </p>
      </div>
    </div>
  );
}
