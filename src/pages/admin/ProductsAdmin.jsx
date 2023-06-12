import { useEffect, useState } from 'react'
import { api, endpoints } from '../../utils/api'
import { AdminProducts } from '../../components/products/AdminProducts'

export function ProductsAdmin () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    api.get(endpoints.get_products).then(res => setProducts(res.data.products)).catch(err => console.log(err))
  }, [])
  return (
      <div className='w-full flex flex-col  justify-center gap-4 p-4 mb-24'>
        {products?.map((item) => <AdminProducts items={item} />)}
      </div>
  )
}
