import { useEffect, useState } from 'react'
import { ProductCard } from '../../components/products/ProductCard'
import { api, endpoints } from '../../utils/api'
import { useNavigate } from 'react-router-dom'

export function Products () {
  const [products, setProducts] = useState([])
 
  useEffect(() => {
    api.get(endpoints.get_products).then(res => setProducts(res.data.products)).catch(err => console.log(err))
  }, [])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-4 lg:flex-row'>
      <div className='filter w-1/4 h-full bg-bg-dark flex flex-col justify-center items-center'>
        <form className='w-full h-full text-white'>
          FILTROS
        </form>
      </div>
      <div className='grow w-full grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-2 p-2 '>
        {products?.map((item) => <ProductCard staticProduct={item} key={item} />)}
      </div>
    </div>
  )
}
