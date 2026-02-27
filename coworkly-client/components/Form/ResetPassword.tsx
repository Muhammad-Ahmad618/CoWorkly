"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { AppInputField } from "@/components/ui/appInputField";
import image from "@/public/webp/reset2.jpg";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { KeyRound } from "lucide-react";

export function ResetPasswordForm() {
  const router = useRouter();
  const handleSubmit = (values: any) => {
    toast.success("Password reset successfully", {
      position: "top-center",
      duration: 2000,
    });
    setTimeout(() => {
      router.push("/authentication/login");
    }, 2500);
  };
  return (
    <div className="md:max-w-240 w-full flex justify-between items-center md:mx-10 bg-white md:rounded-3xl shadow-lg gap-10 h-full md:h-[500px]">
      <div className="basis-full md:basis-[50%] p-10">
        <div className=" w-12 h-12 bg-linear-to-r mx-auto from-orange-600 to-orange-400 rounded-xl flex items-center md:hidden justify-center shadow-lg shadow-gray-200 mb-5">
          <KeyRound className="text-white" />
        </div>
        <div className="space-y-3 text-center md:text-start">
          <h1 className="text-3xl font-semibold">Reset Password</h1>
          <p className="text-sm">Enter Your New Password</p>
        </div>
        <Formik
          validationSchema={undefined}
          initialValues={{ password: "", confirmPassword: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5 mt-10">
              <AppInputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <AppInputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
              <Button type="submit" className="w-full mt-4 cursor-pointer py-5">
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="hidden md:block basis-[50%] w-full h-full">
        <Image
          src={image}
          alt="Reset Password"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-r-3xl"
        />
      </div>
    </div>
  );
}
