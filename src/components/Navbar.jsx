import { useSelector } from 'react-redux'
import { SearchBar } from './navbar/SearchBar'
import { PopoverButton } from './navbar/SubcategoriesMenu'
import { Avatar } from './navbar/Avatar'
import { AuthLinks } from './navbar/AuthLinks'
import { Cart } from './navbar/Cart'

function Navbar() {
  const { user, token } = useSelector(store => store.user.data)
  const { categories, subcategories } = useSelector(store => store.menu)
  return (
    <>
      <nav className='w-full h-[70px] flex flex-row items-center justify-between border-b text-paragraph-primary'>
        <h1 className='font-black text-primary-600 text-3xl'>ExBy</h1>
        <div className='flex flex-row justify-center items-center grow'>
          <SearchBar />
        </div>
        {!token && <AuthLinks />}
        {token &&
          <div className='flex flew-row  divide-x-2 items-center'>
            <div className='grow px-4'>
              <Avatar />
            </div>
            <div className='grow px-4 relative'>
              <Cart />
            </div>
          </div>
        }
      </nav>
      <nav className='w-full flex flex-row justify-start items-center h-[50px] gap-4 my-2'>
        {categories?.filter((item) => item.active).map((item) => <PopoverButton key={item._id} category={item} subcategories={subcategories?.filter(itemsub => itemsub.category_id === item._id && itemsub.active)} />)}
      </nav>
    </>
  )
}

export default Navbar
