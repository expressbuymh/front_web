import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { api } from "../../utils/api"
import { parsePrice } from "../../utils/handleData"
import { UserCircleIcon } from "@heroicons/react/24/solid"
const status = {
    pending: "bg-gray-200 text-gray-500",
    paid: "bg-success-100 text-success-500",
    shipped: "bg-success-100 text-success-500",
    delivered: "bg-success-100 text-success-500",
    cancel: "bg-error-100 text-error-500"
}

export function Payment() {
    const [order, setOrder] = useState(null)
    let location = useLocation()
    useEffect(() => {
        setOrder(location.state)
    }, [location])
    function handlePayment() {
        let postOrder = {
            order_id: order._id,
            id: order._id,
            description: "order payment",
            quantity: 1,
            unit_price: order.total_price
        }
        api.post("paymments", postOrder).then((res) => (window.location.href = res.data.response.body.init_point)).catch(err => console.log(err))
    }
    return (
        <div className="w-full h-full flex flex-row justify-center items-start p-4">
            <div className="w-full h-full lg:flex lg:flex-row flex flex-col justify-center items-start gap-2 ">
                <div className="grow order-2 w-full lg:order-1 border rounded-lg p-4">
                    <div className="mb-8 text-lg">Order details</div>
                    <div className="grid grid-cols-5">
                        <div>
                            <div className="col-span-3 ">Number</div>
                            <div>Quantity</div>
                            <div >Price</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5">
                        <div>
                            #{order.n_order}
                        </div>
                        <div>
                            Quantity of products: {order.products.length}
                        </div>
                        <div className="w-full flex flex-row justify-end mt-4 font-bold">
                            Total: $ {parsePrice(order?.total_price)}
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-end mt-4">
                        Subtotal: $ {parsePrice(order?.total_price)}
                    </div>

                </div>
            </div>
            <button onClick={handlePayment} className="w-1/4 bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-lg">Pagar</button>
        </div>
    )
}