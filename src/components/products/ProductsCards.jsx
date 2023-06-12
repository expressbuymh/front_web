import { parseDiscountPercentage, parseDiscountPrice } from "../../utils/handleData"
import cocaCola from "../products/ImagenesProducts/coca.jpg"
import pepsi from "../products/ImagenesProducts/pepsi.png"
import speed from "../products/ImagenesProducts/speed.png"


export function ProductsCards(){

  const productsArray = [
    {
    name:"Coca cola - 1,5lts",
    photo:cocaCola,
    description:"Bebida gasificada sin azúcar",
    price:500,
    discount_id:{
      active:false,
      percetage:0.8,
    },
    category_id:"Gaseosa",
  },
  {
    name:"Pepsi - 1,5lts",
    photo:pepsi,
    description:"Bebida gasificada con azúcar",
    price:550,
    discount_id:{
      active:true,
      percetage:0.3,
    },
    category_id:"Gaseosa"
  },
  {
    name:"Speed 500ml",
    photo:speed,
    description:"Bebida energizante",
    price:400,
    discount_id:{
      active:true,
      percetage:0.4,
    },
    category_id:"Energizante"
  },
  {
    name:"Speed 500ml",
    photo:speed,
    description:"Bebida energizante",
    price:400,
    discount_id:{
      active:true,
      percetage:0.8,
    },
    category_id:"Energizante"
  },
  ]
  return (
    <div className=" h-fit flex flex-row gap-4">
      {productsArray.map((items) => (
        <div key={items} className="w-full bg-white flex flex-col justify-center items-center px-2 border rounded-lg ">
          <img src={items.photo} alt={items.name} className="h-4/5 w-1/2 object-contain"/> 
          <div className="w-full flex flex-col mb-6">
            <p className="w-2/3 font-medium">{items.name}</p>
            <p className="w-full text-paragraph-secondary text-sm mb-5">{items.category_id}</p>          
              {items.discount_id?.active == true ?
              <div className="flex w-24 flex-wrap items-center">
                <p className="w-fit font-medium p-1 ">${parseDiscountPrice(items.price,items.discount_id.percetage)}</p>
                <p className="bg-green-600 rounded-md flex items-center p-1 text-white">{parseDiscountPercentage(items.discount_id.percetage)}%</p>
                <p className="w-fit font-light p-1 mb-2 line-through">${items.price}</p>
              </div>
              : <div>
                 <p className="w-fit font-semibold p-1 my-2">${items.price}</p>
                 <p className="h-[1.5rem]"></p>
                </div> }       
          </div>
          <button className="bg-primary-500 w-full h-20 rounded-lg mb-4 font-medium text-lg text-white">Agregar al carrito</button>
        </div>
      ))}
    </div>
  )
}