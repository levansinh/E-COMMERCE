import React from 'react'

interface Props {
  label: string
}

export default function Checkbox({ label }: Props) {
  return (
    <div className='text-base flex gap-x-2 items-center'>
      <input type='checkbox' className='w-5 h-5' />
      <span className='text-sm'>{label}</span>
    </div>
  )
}
