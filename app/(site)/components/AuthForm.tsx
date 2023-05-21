"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/app/components/inputs/Input";
import Button from "@/app/components/button";

type Variant = "LOGIN" | "REGISTER";
export const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      // confirmPassword: "",         //this field is optional only for register
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "LOGIN") {
      //login
    }

    if (variant === "REGISTER") {
      //register
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //social login
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              errors={errors}
              label="Enter your Name"
              type="text"
              required={true}
              register={register}
            />
          )}
          <Input
            id="email"
            errors={errors}
            label="Enter your Emaiil"
            required={true}
            type="email"
            register={register}
          />
          <Input
            id="password"
            errors={errors}
            label="Enter your Password"
            type="password"
            required={true}
            register={register}
          />
          {variant === "REGISTER" && (
            <Input
              id="confirmPassword"
              errors={errors}
              label="Confirm your Password"
              type="password"
              required={true}
              register={register}
            />
          )}
          <Button fullWidth type="submit" disabled={isLoading}>
            {variant === "LOGIN" ? "Login" : "Sign Up"}
          </Button>
        </form>
      </div>
    </>
  );
};
