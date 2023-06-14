import { useNavigate, useParams } from 'react-router-dom'
import { parseDiscountPercentage, parseDiscountPrice, parsePrice } from '../../utils/handleData'
import { useEffect, useState } from 'react'
import { api, endpoints } from '../../utils/api'


export function ProductCard ({ staticProduct }) {
  const navigate = useNavigate()
  const [items,setItems] = useState(staticProduct)
  const {id} = useParams()

  useEffect(() => {
    api.get(endpoints.get_products)
    .then(res => {
      return res.data.products
    })
      .catch(err => console.log(err))
  }, [id])

 
  function detailsProduct() {
    navigate(`/products/details/${items._id}`,{state: items})
  }
  return (
    <div  className='w-full h-[400px] bg-white flex flex-col justify-start items-center p-2 border rounded-lg m-3'>
      <img onClick={detailsProduct} src={items.photo} alt={items.name} className='h-[100px] w-1/2 object-contain' />
      <div className='w-full flex flex-col mb-6 grow mt-4'>
        <p className='w-full font-medium text-sm'>{items.name}</p>
        <p className='w-full text-paragraph-secondary text-sm mb-5'>{items?.subcategory_id?.name}</p>
        {items.discount_id?.active === true
          ? <div className='flex w-24 flex-wrap items-center'>
            {items.discount_id?.active && <p className='w-fit font-medium p-1 '>${parsePrice(parseDiscountPrice(items.price, items.discount_id.percentage))}</p>}
            {items.discount_id?.active && <p className='bg-green-600 rounded-md flex items-center p-1 text-white'>{parseDiscountPercentage(items.discount_id.percentage)}%</p>}
            <p className='w-fit font-light p-1 mb-2 line-through'>${parsePrice(items.price)}</p>
          </div>
          : <div>
            <p className='w-fit font-semibold p-1 my-2'>${parsePrice(items.price)}</p>
            <p className='h-[1.5rem]' />
          </div>}
      </div>
      <button className='bg-primary-500 w-full h-10 rounded-lg mb-4 font-medium text-lg text-white'>Agregar al carrito</button>
    </div>
  )
}
