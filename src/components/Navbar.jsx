import { CartIcon } from '../assets/icons/Icons'
function Navbar() {
  return (
    <>
      <div className='bg-neutral-400 w-[100%] h-[6vh] inline-grid grid-cols-3 items-center px-4 | lg:h-[8vh] | 2xl:h-[9vh] 2xl:px-28'>
        <div className='h-[100%] flex items-center pl-6 gap-4 2xl:gap-12'>
          <img className='w-10 h-8 2xl:w-24 2xl:h-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cora_logo.svg/120px-Cora_logo.svg.png' alt='' />
        </div>
        <div className=''>
          <input type='text' name='search' id='search' className='w-[90%] text-center rounded focus:outline-none px-2 mobile:hidden | lg:block lg:w-[100%] lg:h-8 2xl:h-14 2xl:text-2xl' placeholder='Search' />
        </div>
        <div className='flex flex-row justify-center gap-5 | lg:justify-end lg:pr-6 lg:gap-7'>
          <CartIcon />
        </div>
      </div>
    </>
  )
}

export default Navbar
