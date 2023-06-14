
import { useEffect, useState } from 'react'
import {  api, apiUrl, headers } from '../../utils/api'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { InputText } from '../../components/forms/InputText'
import { useSelector } from 'react-redux'
import { parseDataFromForm } from '../../utils/handleData'
import { LS } from '../../utils/localStorageUtils'
import { toast } from 'react-hot-toast'



export function EditsProduct() {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const {categories,subcategories} = useSelector(store=>store.menu)
  

  useEffect(() => {
    axios
      .get(apiUrl + `products/${id}`)
      .then(res => {
        const productData = res.data.product
        setProduct(productData)
      })
      .catch(err => console.log(err))
  }, [id])

  async function handleSubmit(e){
    const {data} = parseDataFromForm(e)
      try {
        const res = await  api.put(`products/${id}`,data,headers(LS.get("token")))
        toast.success("Saved")
      } catch (error) {
        console.log(error)
        toast.error("Error")
      }
  }
 
  return (
    <div className='w-full flex h-screen bg-white '>
      <div className='mt-7 flex justify-around w-full'>
        {product && (
      <><img src={product.photo} alt='' className='h-1/2 object-contain' /><div className='bg-white w-1/2 '>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <InputText name="name" defaultValue={product.name ? product.name : ""} label="Rename" error='' type='' />
            <InputText name="description" defaultValue={product.description ? product.description : ""} label='Change description' error='' type='text' />
            <InputText name="price" defaultValue={product.price ? product.price : ""} label="Price" error='' type='text' placeholder='Change price' />
            <select name="category_id" defaultValue={product.category_id} className='text-paragraph-primary border rounded-lg font-medium my-2 w-full h-10'>
              {categories?.map(category=>(
                <option key={category._id} value={category._id} >{category.name}</option>
              ))}
            </select>
            <select name="subcategory_id" defaultValue={product.subcategory_id} className='text-paragraph-primary border rounded-lg font-medium my-2 w-full h-10'>
            {subcategories?.map(subcategory =>(
              <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
            ))}
            </select>
            <button className='bg-primary-700 h-12 rounded-lg text-white'>Save</button>
          </form>
        </div></>
        )}
        </div>
    </div>
  )
}
