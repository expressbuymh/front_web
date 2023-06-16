import axios from "axios"
import { api, endpoints, headers } from "../../utils/api"
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { LS } from "../../utils/localStorageUtils"
import { useSelector } from "react-redux"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { Profile } from "./Profile"



export function Addresses() {
    
    const [addresses,setAddresses]= useState([])
    const navigate = useNavigate()
   

    useEffect(()=>{
        api.get(endpoints.get_addresses,headers(LS.get("token")))
        .then(res => {
            setAddresses(res.data.addresses) 
            
          })
        .catch(err => console.log(err))
    }, [])

    function editId(id,address) {
        navigate(`/modify/${id}`,{state: address})
      }

  
    return (
        <div className="w-full h-full flex flex-col overflow-y-scroll">
            {addresses?.length > 0 ?
            <div className="flex flex-col justify-center items-center mt-8">
                <p className='text-paragraph-primary font-medium mt-2'>Your addresses</p>
                <div className='w-11/12 flex flex-col justify-center items-center  border rounded-lg'>
                    {addresses?.map((address) => {
                        return <div className="h-32 w-10/12 grid grid-cols-4">
                            <div className="flex flex-row gap-2 items-center justify-start">
                                <p>Name:</p>
                                {address?.name}
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center">
                                <p>Direction:</p>
                                <p>{address?.address_line}</p>  
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center"> 
                                <p>State:</p>
                                <p>{address?.state}</p>
                            </div>
                            <button onClick={()=>editId(address?._id,address)} className="text-primary-700 flex  items-center justify-start">Modify</button>
                        </div>
                    })}
                </div>
            </div>
            :   <button /* onClick={handleAddAddress} */ className='w-full border flex flex-row gap-2 items-center justify-center bg-bg-medium text-paragraph-secondary p-2 rounded-lg my-2'>Create address 
                    <PlusCircleIcon className='w-6 h-6 stroke-paragraph-secondary' />
                </button>}
                <button onClick={()=>navigate("/adresses/create")}>Create</button>
            </div>
            
    )
}