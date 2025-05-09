'use client'

import { FunctionComponent } from 'react'
import { IoClose } from 'react-icons/io5'

const buttonClass = 'bg-red-800 hover:bg-red-600 text-black text-lg font-extrabold'

interface Props {
  handleRemove: () => Promise<void>
}

export const RemoveButton: FunctionComponent<Props> = ({ handleRemove }) => {
  return (
    <div className="flex w-full justify-end px-2">
      <button className={`flex cursor-pointer items-center rounded-2xl p-2 ${buttonClass}`} onClick={handleRemove}>
        <IoClose size={24} strokeWidth={2.5} />
      </button>
    </div>
  )
}
