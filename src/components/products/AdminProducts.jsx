import { useState } from 'react'

export function AdminProducts ({ items }) {
  const [active, setActive] = useState(items.active)

  function toggleClick () {
    setActive(!active)
  }
  return (
    <div key={items} className='w-full h-[120px] bg-white flex flex-row items-center border rounded-lg'>
      <img src={items.photo} alt={items.name} className='h-[100px] w-1/2 object-contain' />
      <div className='w-full flex flex-col grow'>
        <p className='w-full font-medium text-sm'>{items.name}</p>
        <p className='w-full text-paragraph-secondary text-sm'>{items?.subcategory_id?.name}</p>
        <p className='w-fit font-semibold'>${items.price}</p>
      </div>
      <div className='flex flex-col w-3/12 mx-2 gap-2'>
        <button className='bg-primary-500 h-10 rounded-lg font-medium text-lg text-white'>Edit</button>
        <div onClick={toggleClick} className='flex w-20 bg-gray-600 rounded-full'>
          {active
            ? <div className='h-10 w-10 ml-10  bg-green-600 rounded-full' />
            : <div className='h-10 w-10 bg-primary-700 rounded-full' />}
        </div>
      </div>
    </div>
  )
}
