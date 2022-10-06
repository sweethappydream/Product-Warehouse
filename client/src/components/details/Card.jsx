import React from 'react';

export default function Card({ product }) {
  return (
    <div className='p-5 m-5 w-[300px] h-fit rounded-lg border-2 shadow-slate-800 flex flex-col hover:shadow-orange-400 text-white'>
      <label className='max-w-full'>
        Name:&nbsp;
        <span>{product.name ? product.name : ''}</span>
      </label>
      <label>
        SKU:&nbsp;
        <span>{product.sku ? product.sku : ''}</span>
      </label>
      <label>
        Brand:&nbsp;
        <span>{product.brand ? product.brand : ''}</span>
      </label>
      <label>
        Cost:&nbsp;
        <span>{product.cost ? product.cost : ''}</span>
      </label>
      {
        Object.keys(product.specific).map((key, idx) => (
          <label key={idx}>
            {key}:&nbsp;
            <span>{product.specific[key] ? product.specific[key] : ''}</span>
          </label>
        )
        )
      }
    </div>
  )
}