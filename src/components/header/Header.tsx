import { useState } from "react"
import Signup from "../Signup"
import NavMenu from "./NavMenu"
import Sidebar from "./Sidebar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className='flex py-5 px-3'>
        <div className='flex items-center pt-3'>
          <img src='images/logo.svg' alt='Logo' />
        </div>
        <div className='flex-grow flex items-center z-20'>
          <NavMenu />
        </div>
        <div className='flex items-center'>
          <a onClick={() => setIsOpen(true)}>
            <img className='block lg:hidden cursor-pointer' src='images/icon-menu.svg' alt='Navigation menu' />
          </a>
          <div className='hidden lg:flex lg:space-x-10 lg:items-center'>
            <Signup title='Login' className='hover:text-almost-black cursor-pointer' />
            <Signup title='Register' className='border-2 rounded-xl px-4 py-2 hover:text-almost-black hover:border-almost-black cursor-pointer' />
          </div>
        </div>
      </div>
      <Sidebar open={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header