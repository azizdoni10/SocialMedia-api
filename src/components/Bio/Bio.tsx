import React from 'react'
import BioDataItem from '../ui/BioDataItem/BioDataItem'
import { ButtonsWrapper } from '../ui/ButtonsWrapper/ButtonsWrapper'
import BioInfo from '../ui/BioInfo/BioInfo'

export default function Bio() {

  return (
    <div className='bg__bio'>
        <BioDataItem/>
        <BioInfo/>
        <ButtonsWrapper/>
    </div>
  )
}
