import { CustomButtonProps } from '@/Types'
import React from 'react'

const CustomButton = ({en,title,btnType,containerStyles,handleClick}:CustomButtonProps) => {
en = false;
  return (
    <button
    disabled={en}
    type = {btnType || `button`}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className='flex-1'>{title}</span>

    </button>
  )
}

export default CustomButton;