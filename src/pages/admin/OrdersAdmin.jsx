import { useEffect, useState } from "react"
import { adminEnpoints, api, headers } from "../../utils/api"
import { LS } from "../../utils/localStorageUtils"
import { OrderCard } from "../../components/admin/orders/OrderCard"
export function OrdersAdmin() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        let token = LS.get('token')

        api.get(adminEnpoints.get_orders, headers(token)).then(res => setOrders(res.data.orders)).catch(err => console.log(err))
    }, [])
    return (
        <div className="w-full flex flex-col  justify-center gap-4 p-4 mb-24">
            <div className="grid grid-cols-7 items-center border-b py-2 text-paragraph-primary text-sm font-medium">
                <div className="p-2 ">
                    <div className="text-center text-paragraph-primary">
                        Status
                    </div>

                </div>
                <div className="text-center text-paragraph-primary">
                    No.
                </div>
                <div className="capitalize text-center text-paragraph-primary">
                    Name
                </div>
                <div className="capitalize text-center">
                    Products
                </div>
                <div >
                    Total price
                </div>
                <div className=" text-paragraph-primary ">
                    Details
                </div>
                <div className=" rounded-lg p-2 text-paragraph-primary">
                    Action
                </div>

            </div>
            {orders.map((order) => <OrderCard key={order._id} staticOrder={order} />)}
        </div>
    )
}