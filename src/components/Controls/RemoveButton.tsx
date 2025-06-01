'use client'

import { FunctionComponent } from 'react'
import { IoClose } from 'react-icons/io5'
import { clsx } from 'clsx'

interface Props {
  handleRemove: () => Promise<void>
}

export const RemoveButton: FunctionComponent<Props> = ({ handleRemove }) => {
  return (
    <div className="flex w-full justify-end px-2">
      <button
        aria-label="remove"
        className={clsx(
          'flex cursor-pointer items-center rounded-2xl p-2',
          'bg-red-800/50 text-black hover:bg-red-600/80',
        )}
        onClick={handleRemove}>
        <IoClose size={24} strokeWidth={2.5} />
      </button>
    </div>
  )
}
