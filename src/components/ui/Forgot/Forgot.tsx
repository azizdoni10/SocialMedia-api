import React from 'react'
import { Heading } from '../../../typography/Heading'
import { AppInput } from '../AppInput/AppInput'
import { AppButton } from '../AppButton/AppButton'
import { RegistrationInfo } from '../../RegistrationInfo/RegistrationInfo'
import { LinkButton } from '../LinkButton/LinkButton'

export default function Forgot() {
  return (
    <div className="LoginPage">
    <Heading className="" type="h1" headingText="Registration" />
    <form action="#">
      <AppInput type="tel" placeholder="Phone number" isDisabled={false} />
      <AppInput type="password" placeholder="Password" isDisabled={false} />
      <AppButton type='submit' buttonText="Sign up" isPrimary />
    </form>
    <LinkButton to="/" linkText="Forgot password?" />
    <RegistrationInfo />
  </div>
  )
}
