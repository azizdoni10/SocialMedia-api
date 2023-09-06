import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import "./LoginPage.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { Heading } from "../../typography/Heading";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";
import { LinkButton } from "../../components/ui/LinkButton/LinkButton";
import { setUser } from '../../store/slices/auth';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const loginPageSchema = yup.object({
  userPhone: yup.string().required("Required Field"),
  userPassword: yup.string().required("Required Field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('userPassword')], '')
    .required('Required Field')
    .test({
      name: 'passwords-match',
      message: 'Passwords must match',
      test: function (value) {
        return this.parent.userPassword === value;
      },
      params: {
        className: 'error-message-class',
      },
    }),
});

export const LoginPage = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<LoginPageForm>({
    resolver: yupResolver(loginPageSchema),
    defaultValues: {
      userPhone: "",
      userPassword: "",
      confirmPassword: "",
    },
  });

  interface LoginPageForm {
    userPhone: string;
    userPassword: string;
    confirmPassword: string;
  }

  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(user?.email) {
      navigate('/main')
    }
  }, [user, navigate])

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    dispatch(setUser({email: 'You will turn to MainPage'}))
    if (user?.email){
      navigate('/main')
    }
  };
  return (
    <LayoutContainer>
      <div className="parent__LoginPage">
        <div className="LoginPage">
          <Heading className="" type="h1" headingText="Registration" />
          
          <div className='green'><Heading type="h2" className="greens" headingText={user?.email ? user.email : ''} /></div>

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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <div>
                  <AppInput
                    type="password"
                    placeholder="Confirm Password"
                    isDisabled={false}
                    hasError={!!errors?.confirmPassword}
                    errorText={errors?.confirmPassword?.message}
                    {...field}
                  />
                  {errors?.confirmPassword && (
                    <p className="error-message-class">
                      Please check your password for correctness
                    </p>
                  )}
                </div>
              )}
            />
            <AppButton type="submit" buttonText="Sign up" isPrimary={true} onClick={() => dispatch(setUser({email: 'test'}))} />
          </form>
          <LinkButton
            to="registration"
            linkText="Already registered? Log in to the app"
          />
          <RegistrationInfo />
        </div>
      </div>
    </LayoutContainer>
  )
};