'use client'

import { FunctionComponent } from 'react'
import { IoClose } from 'react-icons/io5'

interface Props {
  handleRemove: () => Promise<void>
}

export const RemoveButton: FunctionComponent<Props> = ({ handleRemove }) => {
  const buttonClass = 'bg-red-800/50 hover:bg-red-600/80 text-black'

  return (
    <div className="flex w-full justify-end px-2">
      <button aria-label="remove" className={`flex cursor-pointer items-center rounded-2xl p-2 ${buttonClass}`} onClick={handleRemove}>
        <IoClose size={24} strokeWidth={2.5} />
      </button>
    </div>
  )
}
