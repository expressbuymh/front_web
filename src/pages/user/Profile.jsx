import { HomeIcon, TruckIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";


export function Profile() {
    const navigate = useNavigate()
    const { user } = useSelector(store => store.user.data)
    console.log(user)
    return (
        <div className="w-full h-full flex lg:flex-row lg:justify-center lg:items-start md:flex-row flex-col justify-center items-center">
            <div className=" h-1/4 w-44 border mt-2 mx-4 rounded-full flex items-center justify-center">
                <img className="object-contain rounded-full" src={user.photo} alt="" />
            </div>
            <div className="flex lg:w-3/5  w-11/12 flex-col gap-8">
                <p className="font-bold mt-7">Profile</p>
                <p className="text-sm font-light">This information will be available and it will be possible to make changes if necessary</p>
                <div className="border-b mt-4 grid grid-cols-3">
                    <p className="w-1/4 font-medium">Nombre</p>
                    <p className="w-1/4 ">{user.name}</p>
                    <button className=" text-primary-700 font-black text-start">Change name</button>
                </div>
                <div className="border-b mt-4 grid grid-cols-3">
                    <p className="w-1/4 font-medium">Last name</p>
                    <p className="w-1/4 ">{user.last_name}</p>
                    <button className=" text-primary-700 font-black text-start">Change Last name</button>
                </div>
                <div className="border-b mt-4 grid grid-cols-3">
                    <p className="w-1/4 font-medium">Email</p>
                    <p className="">{user.email}</p>
                </div>
                <div className="mt-4">
                    <button onClick={() => navigate("/")} className="w-1/3 mr-2 bg-primary-700 rounded-lg h-8 font-semibold text-white">Home</button>
                    <button onClick={() => navigate("/user/orders")} className="w-1/3 mx-2 bg-primary-700 rounded-lg h-8 font-semibold text-white">My orders</button>
                </div>
            </div>


        </div>
    )
}