import { parseDiscountPercentage, parseDiscountPrice } from '../../utils/handleData'

export function ProductCard ({ items }) {
  return (
    <div key={items} className='w-full h-[400px] bg-white flex flex-col justify-start items-center px-2 border rounded-lg pt-4'>
      <img src={items.photo} alt={items.name} className='h-[100px] w-1/2 object-contain' />
      <div className='w-full flex flex-col mb-6 grow mt-4'>
        <p className='w-full font-medium text-sm'>{items.name}</p>
        <p className='w-full text-paragraph-secondary text-sm mb-5'>{items?.subcategory_id?.name}</p>
        {items.discount_id?.active === true
          ? <div className='flex w-24 flex-wrap items-center'>
            {items.discount_id?.active && <p className='w-fit font-medium p-1 '>${parseDiscountPrice(items.price, items.discount_id.percetage)}</p>}
            {items.discount_id?.active && <p className='bg-green-600 rounded-md flex items-center p-1 text-white'>{parseDiscountPercentage(items.discount_id.percetage)}%</p>}
            <p className='w-fit font-light p-1 mb-2 line-through'>${items.price}</p>
          </div>
          : <div>
            <p className='w-fit font-semibold p-1 my-2'>${items.price}</p>
            <p className='h-[1.5rem]' />
          </div>}
      </div>
      <button className='bg-primary-500 w-full h-10 rounded-lg mb-4 font-medium text-lg text-white'>Agregar al carrito</button>
    </div>
  )
}
