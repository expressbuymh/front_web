import FormLogin from '../../components/users/FormLogin'

export function SignIn () {
  return (
    <div className='flex justify-center items-center bg-slate-200'>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='h-screen w-1/2 bg-[url(https://i.pinimg.com/564x/8a/94/1a/8a941ae7141f5fb7166180942a5c8ac5.jpg)] bg-cover bg-no-repeat' />
        <div className='w-1/2 '>
          <div className='flex items-center flex-col mb-8'>
            <img src='' alt='' />
            <h1 className='font-bold text-6xl m-3 font-inter text-success-500 bg-bg-dark'>Welcome <span className='text-blue-800'>back</span>!</h1>
          </div>
          <FormLogin />
        </div>
      </div>
    </div>

  )
}

