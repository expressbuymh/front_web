import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'



function Footer () {
  return (
    <div className='w-[100%] h-[30vh] bg-black'>
      <div className='w-[100%] flex justify-between py-5 px-9 border-b-[1px] border-stone-500 md:px-24'>
        <img className='h-10 w-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cora_logo.svg/120px-Cora_logo.svg.png' alt='' />
        <div className='w-[30%] md:flex md:flex-col md:items-end'>
          <h2 className='text-white text-[11px] text-center mb-2 md:mr-4'>SOCIAL MEDIA</h2>
          <div className='flex flex-row justify-around gap-3 md:justify-center md:gap-7'>
            <BsFacebook className='text-white/70' />
            <BsTwitter className='text-white/70' />
            <BsInstagram className='text-white/70' />
          </div>
        </div>
      </div>
      <div className='text-white text-sm my-5 text-center'>
        <h2>Abous us</h2>
        <h2>Contact us</h2>
        <h2>Get the app</h2>
        <h2>Text</h2>
        <h2>Text</h2>
      </div>
      <p className='text-white/50 text-center text-xs'>&copy; 2023 expressBuy</p>
    </div>
  )
}

export default Footer
