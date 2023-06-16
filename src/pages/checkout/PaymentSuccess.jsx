import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, headers } from "../../utils/api";
import { LS } from "../../utils/localStorageUtils";

export function PaymentSuccess(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [external_reference,setExternal_reference] = useState("")
    useEffect(() => {
        setExternal_reference(searchParams.get("external_reference"))
    },[searchParams])
    useEffect(() => {
        api.put("orders/paid/" + external_reference,null).then(res => console.log(res.data)).catch(err => console.log(err))

    },[external_reference])
    return(
        <div>{external_reference? external_reference : "no esta"}</div>
    )
}