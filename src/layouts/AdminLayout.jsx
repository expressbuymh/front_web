import { Outlet } from "react-router-dom";
import { Navbar } from "../components/admin/navbar/Navbar";
import { Menu } from "../components/admin/navbar/Menu";

export function AdminLayout() {
    return (
        <>
            <div className="w-full h-screen flex flex-row justify-start items-center">
                <div className=" hidden w-1/3 min-h-full border-r lg:flex lg:flex-col p-4">
                    <h1 className='font-black text-primary-600 text-3xl mb-8'>ExBy</h1>
                    <Menu />
                </div>
                <div className="w-full h-screen overflow-hidden">
                    <Navbar/>
                    <div className="w-full h-screen overflow-y-scroll">
                        <Outlet />
                    </div>
                </div>

            </div>

        </>

    )
}