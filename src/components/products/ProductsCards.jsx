import { useEffect,useState } from "react"
import { parseDiscountPercentage, parseDiscountPrice } from "../../utils/handleData"
import { api, endpoints, headers } from "../../utils/api"
import { LS } from "../../utils/localStorageUtils"
import { useNavigate } from "react-router-dom"


export function ProductsCards(){
  const [productsArray, setProductsArray] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    api.get(endpoints.get_discounts, headers(LS.get("token"))).then(res => setProductsArray(res.data.products)).catch(err => console.log(err))
  },[])
  return (
    <div className=" h-fit sm:grid-cols-3 sm:grid grid-cols-1 gap-3 lg:grid lg:grid-cols-4">
      {productsArray?.map((items) => (
        <div key={items._id} className="w-full bg-white flex flex-col justify-center items-center px-2 border rounded-lg ">
          <img src={items.photo} alt={items.name} className="h-4/5 w-1/2 object-contain"/> 
          <div className="w-full flex flex-col mb-6">
            <p className="w-2/3 font-medium">{items.name}</p>
            <p className="w-full text-paragraph-secondary text-sm mb-5">{items.category_id.name}</p>          
              {items.discount_id?.active == true ?
              <div className="flex w-24 flex-wrap items-center">
                <p className="w-fit font-medium p-1 ">${parseDiscountPrice(items.price,items.discount_id.percentage)}</p>
                <p className="bg-green-600 rounded-md flex items-center p-1 text-white">{parseDiscountPercentage(items.discount_id.percentage)}%</p>
                <p className="w-fit font-light p-1 mb-2 line-through">${items.price}</p>
              </div>
              : <div>
                 <p className="w-fit font-semibold p-1 my-2">${items.price}</p>
                 <p className="h-[1.5rem]"></p>
                </div> }       
          </div>
          <button onClick={()=>navigate("/products")} className="bg-primary-500 w-full h-20 rounded-lg mb-4 font-medium text-lg text-white">Go Products</button>
        </div>
      ))}
    </div>
  )
}