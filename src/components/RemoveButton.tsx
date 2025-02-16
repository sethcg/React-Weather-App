'use client';

import { IoClose } from 'react-icons/io5';

const iconClass = 'bg-red-800 hover:bg-red-600 text-black text-lg font-extrabold';

interface Controls {
  handleRemove: () => Promise<void>;
}

export default function Controls({ handleRemove }: Controls) {
  return (
    <div className="flex w-full justify-end px-2">
      <button className={`flex items-center p-2 ${iconClass} rounded-2xl`} onClick={handleRemove}>
        <IoClose size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}
