import React from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Heading } from "../../typography/Heading";
import { AppInput } from "../ui/AppInput/AppInput";
import { AppButton } from "../ui/AppButton/AppButton";
import { LinkButton } from "../ui/LinkButton/LinkButton";
import { RegistrationInfo } from "../RegistrationInfo/RegistrationInfo";
import { LayoutContainer } from "../ui/LayoutContainer/LayoutContainer";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginInputSchema = yup.object({
  userPhone: yup.string().required("Required Field"),
  userPassword: yup.string().required("Required Field"),
});

export const LoginInput = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<LoginInputForm>({
    resolver: yupResolver(loginInputSchema),
    defaultValues: {
      userPhone: "",
      userPassword: "",
    },
  });

  interface LoginInputForm {
    userPhone: string;
    userPassword: string;
  }

  console.log('errors', errors);

  const onSubmit: SubmitHandler<LoginInputForm> = (data) => {
    console.log(data);
  };

  return (
    <LayoutContainer>
      <div className="parent__LoginPage">
        <div className="LoginPage">
          <Heading className="" type="h1" headingText="Login" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="userPhone"
              control={control}
              render={({ field }) => (
                <AppInput
                  type="tel"
                  placeholder="Phone number"
                  isDisabled={false}
                  hasError={!!errors?.userPhone}
                  errorText={errors?.userPhone?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="userPassword"
              control={control}
              render={({ field }) => (
                <AppInput
                  type="password"
                  placeholder="Password"
                  isDisabled={false}
                  hasError={!!errors?.userPassword}
                  errorText={errors?.userPassword?.message}
                  {...field}
                />
              )}
            />
            <AppButton type="submit" buttonText="Sign in" isPrimary />
          </form>
          <LinkButton
            to="/"
            linkText="Don't have an account? Sign up to the app"
          />
          <RegistrationInfo />
        </div>
      </div>
    </LayoutContainer>
  );
}