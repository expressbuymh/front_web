
/* eslint-disable no-unused-expressions */
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useState } from 'react'

function Carrousel () {
  // useEffect(
  //     ()=>{ axios(apiUrl+'imgscrl')
  //             .then(res=> setImages(res.data.imgs))
  //             .catch(err=> console.log(err)) }, []
  // )
  // let [images, setImages] = useState([])

  const [counter, setCounter] = useState(0)
  const add = () => {
    setCounter(counter + 1)
    console.log(counter)
    counter === images.length - 1 ? setCounter(0) : null
  }
  const rest = () => {
    setCounter(counter - 1)
    counter === 0 ? setCounter(images.length - 1) : null
  }

  const images = [
    {
      img: 'https://unidrogas.vteximg.com.br/arquivos/ids/369356-1000-1000/77082381.jpg?v=638216504028530000'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/expressbuy-finalchallenge.appspot.com/o/productsImages%2FALPINA%20Boxed%20Whole%20Milk%201000%20ml.webp?alt=media&token=a1ca5f4f-b397-42ad-9ccd-d058985ec190'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/expressbuy-finalchallenge.appspot.com/o/productsImages%2FALPINA%20CHEESE%20135%20gr.webp?alt=media&token=f1d787be-5b99-437a-8e7e-41a94cdaf0b6'
    }
  ]
  console.log(images[0])

  return (
    <div className='relative mobile:hidden  lg:block col-span-2  h-[100%] w-[100%] select-none'>
      <div className='absolute flex justify-between top-[50%] lg:w-[100%] lg:px-10 2xl:px-auto'>
        <BsFillArrowLeftCircleFill className='text-black/50 text-[40px] text-4xl cursor-pointer' onClick={rest} />
        <BsFillArrowRightCircleFill className='text-black/50 text-[40px] text-4xl cursor-pointer' onClick={add} />
      </div>
      <img src={images[counter]?.img} alt='MangasImg' className='w-[80%] h-[100%] | lg:m-auto | xl:ml-auto' />

    </div>
  )
}

export default Carrousel
