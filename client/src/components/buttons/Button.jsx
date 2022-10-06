import React from 'react';

export default function Button({ content }) {
  return (
    <div className='w-fit px-3 py-1 cursor-pointer font-normal text-[12px] hover:text-sky-500'>
      <h1 className=''>
        {
          content
        }
      </h1>
    </div>
  )
}