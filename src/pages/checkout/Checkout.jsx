import axios from "axios"
import { apiUrl } from "../../utils/api"

export function Checkout() {
    let carrito = [{
        title: 'facu',
        picture_url: 'https://avatars.githubusercontent.com/u/71531719?v=4',
        description: 'perro-lanudo buen amigo',
        quantity: 5,
        unit_price: 200
    }]
    return (
        <div>
            <h1 className="flex justify-center">Checkout</h1>
            <div className="px-6 pt-4 pb-2 text-center">
                <p></p>
                <button className="bg-[#4338ca] hover:bg-[#4310ca] text-white font-bold py-3 px-3 rounded-full"
                    onClick={() =>
                        axios.post(apiUrl + "paymments", carrito)
                            //el back espera recibir el carrito de esta manera :
                            /* items: [{
                                        id: 123,
                                        title: carrito.title,
                                        currency_id: 'ARS',
                                        picture_url: carrito.picture_url,
                                        description: carrito.description,
                                        category_id: 'art',
                                        quantity: carrito.unit_price,
                                        unit_price: carrito.unit_price
                                    }] */
                            .then((res) => (window.location.href = res.data.response.body.init_point))
                    }> CHECKOUT
                </button>
            </div>
        </div>
    )
}