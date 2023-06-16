import { useEffect, useState } from 'react'
import { api, endpoints } from '../../utils/api'
import { AdminProducts } from '../../components/products/AdminProducts'
import { useNavigate } from 'react-router-dom'

export function ProductsAdmin() {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  console.log(products);
  useEffect(() => {
    api.get(endpoints.get_products + "?all=true").then(res => setProducts(res.data.products)).catch(err => console.log(err))
  }, [])

  function createProduct() {
    navigate("/admin/products/create")
  }
  return (
    <div className='w-full flex flex-col  justify-center gap-4 p-4 mb-24'>
      <button onClick={createProduct} className='w-full bg-primary-700 rounded-lg text-white h-10 '>Create new product</button>
      {products?.map((item) => <AdminProducts staticItems={item} key={item} />)}
    </div>
  )
}
