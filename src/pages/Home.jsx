import Carrousel from '../components/Carrousel.jsx'

export function Home () {

  return (

    <>
      <div className='h-auto w-[100%] bg-stone-200 pt-2 pb-16'>
        <div className='w-[100%] h-10 p-1 flex justify-center | lg:hidden'>
          <input type='text' className='text-center h-[100%] w-[100%] rounded | md:w-[90%]' placeholder='Search' />
        </div>
        <div className=' h-[40vh] mx-3 my-4 lg:h-[50vh]'>
          <img className='h-[100%] w-[100%] | md:w-[80%] md:mx-auto lg:hidden' src='data:image/jpeg;base64,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' alt='' />

          <Carrousel />
        </div>

        <div className='mobile:hidden | xl:w-[100%] xl:h-[20vh] xl:flex xl:flex-row xl:justify-around xl:my-10'>

          <div className='border-2 border-stone-500 h-[100%] w-[25%] flex'>
            <img className='h-[100%] w-[50%]' src='https://firebasestorage.googleapis.com/v0/b/expressbuy-finalchallenge.appspot.com/o/productsImages%2FCARROT%20FRESCAMPO%201000%20gr.webp?alt=media&token=2cb391b7-f662-4109-93b6-5ab89a86900e' alt='' />

            <div className='h-[100%] w-[50%] grid place-items-center text-center'>
              <p>Product Description</p>
            </div>
          </div>

          <div className='border-2 border-stone-500 h-[100%] w-[25%] flex'>

            <img className='h-[100%] w-[50%]' src='https://firebasestorage.googleapis.com/v0/b/expressbuy-finalchallenge.appspot.com/o/productsImages%2FCARROT%20FRESCAMPO%201000%20gr.webp?alt=media&token=2cb391b7-f662-4109-93b6-5ab89a86900e' alt='' />
            <div className='h-[100%] w-[50%] grid place-items-center text-center'>
              <p>Product Description</p>
            </div>
          </div>

          <div className='border-2 border-stone-500 h-[100%] w-[25%] flex'>

            <img className='h-[100%] w-[50%]' src='https://firebasestorage.googleapis.com/v0/b/expressbuy-finalchallenge.appspot.com/o/productsImages%2FCARROT%20FRESCAMPO%201000%20gr.webp?alt=media&token=2cb391b7-f662-4109-93b6-5ab89a86900e' alt='' />

            <div className='h-[100%] w-[50%] grid place-items-center text-center'>
              <p>Product Description</p>
            </div>
          </div>

        </div>

        <div>
          <p className='text-center font-semibold text-xl my-16'>Featured Products</p>

          <div className='grid grid-cols-2 gap-3 mx-6 | md:mx-28 md:grid-cols-3 | xl:grid-cols-5'>

            <div className='col-span-1 border-2 border-stone-500 px-3 pt-4 pb-16'>
              <img src='https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000' alt='' />
              <div className='flex flex-col items-center gap-2 my-7'>
                <h1>Name</h1>
                <h3>Price</h3>
              </div>
              <button className='bg-stone-500 w-[100%] p-[3px] rounded'>Add </button>
            </div>

            <div className='col-span-1 border-2 border-stone-500 px-3 pt-4 pb-16'>
              <img src='https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000' alt='' />
              <div className='flex flex-col items-center gap-2 my-7'>
                <h1>Name</h1>
                <h3>Price</h3>
              </div>
              <button className='bg-stone-500 w-[100%] p-[3px] rounded'>Add </button>
            </div>

            <div className='col-span-1 border-2 border-stone-500 px-3 pt-4 pb-16'>
              <img src='https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000' alt='' />
              <div className='flex flex-col items-center gap-2 my-7'>
                <h1>Name</h1>
                <h3>Price</h3>
              </div>
              <button className='bg-stone-500 w-[100%] p-[3px] rounded'>Add </button>
            </div>

            <div className='col-span-1 border-2 border-stone-500 px-3 pt-4 pb-16'>
              <img src='https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000' alt='' />
              <div className='flex flex-col items-center gap-2 my-7'>
                <h1>Name</h1>
                <h3>Price</h3>
              </div>
              <button className='bg-stone-500 w-[100%] p-[3px] rounded'>Add </button>
            </div>

            <div className='col-span-1 border-2 border-stone-500 px-3 pt-4 pb-16'>
              <img src='https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000' alt='' />
              <div className='flex flex-col items-center gap-2 my-7'>
                <h1>Name</h1>
                <h3>Price</h3>
              </div>
              <button className='bg-stone-500 w-[100%] p-[3px] rounded'>Add </button>
            </div>

            <div className='col-span-1 border-2 border-stone-500 px-3 pt-4 pb-16'>
              <img src='https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000' alt='' />
              <div className='flex flex-col items-center gap-2 my-7'>
                <h1>Name</h1>
                <h3>Price</h3>
              </div>
              <button className='bg-stone-500 w-[100%] p-[3px] rounded'>Add </button>
            </div>

          </div>

          <div className='w-[100%] flex justify-center h-7 mt-8'>
            <button className='bg-stone-500 w-32'>pag</button>
          </div>
        </div>
      </div>
    </>

  )
}
