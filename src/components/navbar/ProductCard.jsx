import { TrashIcon } from "@heroicons/react/24/outline"

export function ProductCard({product}){
    const actualProduct = product.product_id
    return(
        <div className="w-full h-[96px] flex flex-row justify-between p-2 border rounded-lg">
            <img src={actualProduct.photo} className="w-20 h-20 object-contain rounded-lg p-1" alt="" />
            <div className="flex flex-col justify-between items-start grow">
            <p className="text-xs text-paragraph-primary font-bold">{actualProduct.name}</p>
            <p className="text-sm text-paragraph-primary font-bold">${actualProduct.price}</p>
            </div>
            <div className="flex flex-col justify-between items-end">
                <TrashIcon className="text-error-500 h-6 w-6 hover:fill-error-100 "/>
                <div className="flex flex-row justify-center items-center text-primary-500 gap divide-x  border  rounded-lg overflow-hidden">
                    <button className="px-2 py-1 hover:bg-bg-medium text-paragraph-primary  w-8 text-center">-</button>
                    <p className="px-2 py-1 w-8 text-center text-paragraph-primary">{product.quantity}</p>
                    <button className="px-2 py-1 hover:bg-bg-medium w-8 text-center text-paragraph-primary">+</button>
                </div>
            </div>
            
        </div>
    )
}