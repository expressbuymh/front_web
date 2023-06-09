import FormSignup from '../../components/users/FormSignup'

export function SignUp () {
  return (
    <div className='flex justify-center items-center bg-slate-200'>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-1/2 '>
          <div className='flex items-center flex-col mb-8'>
            <img src='' alt='' />
            <h1 className='font-bold text-6xl m-3'>Register <span className='text-blue-800'>now</span>!</h1>
          </div>
          <FormSignup />
        </div>
        <div className='h-screen w-1/2 bg-[url(https://i.pinimg.com/564x/aa/56/56/aa565619b8660c19157c36af2b8b13d5.jpg)] bg-cover bg-no-repeat' />
      </div>
    </div>

  )
}