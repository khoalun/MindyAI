import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../schemas/signupSchema";

const SignUpForm = () => {
  const methods = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onBlur", // Validation will trigger on the blur event
  });

  const onSubmit = () => {
    // Handle form submission
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <div className=" text-neutral-400 text-normal font-normal ml-4">
          First Name
        </div>
        <input
          {...methods.register("firstName")}
          placeholder="Name"
          className=" input-field w-full h-[4rem] p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          type="text"
        />
        {methods.formState.errors.firstName && (
          <p className="text-red-600 text-xs semi-bold">
            {methods.formState.errors.firstName.message as React.ReactNode}
          </p>
        )}
        <div className="text-neutral-400 text-normal font-normal ml-4">
          Company Email
        </div>
        <input
          {...methods.register("email")}
          placeholder="jane@company.io"
          className="input-field w-full  h-[4rem] p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
        />
        {methods.formState.errors.email && (
          <p className="text-red-600 text-xs semi-bold">
            {methods.formState.errors.email.message as React.ReactNode}
          </p>
        )}

        <label className="flex items-center space-x-2 md:whitespace-nowrap whitespace-normal">
          <input
            type="checkbox"
            {...methods.register("terms")}
            className="checkbox"
          />
          <span className="font-sm">
            I agree to the{" "}
            <span className="text-blue-200">terms and conditions</span> and{" "}
            <span className="text-blue-200">privacy policy</span>
          </span>
        </label>
        {methods.formState.errors.terms && (
          <p className="text-red-600 text-xs semi-bold">
            {methods.formState.errors.terms.message as React.ReactNode}
          </p>
        )}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-950 text-white py-2 px-4 rounded-full border-2 border-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Test MINDy™
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
