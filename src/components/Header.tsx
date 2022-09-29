const Header = () => {
  return (
    <header className=''>
      <div className='flex py-5 px-3'>
        <div className='flex items-center pt-3'>
          <img src='images/logo.svg' alt='Logo' />
        </div>
        <div className='flex-grow flex items-center z-20'>
          Navmenu
        </div>
        <div className='flex items-center'>
          <a href='#'>
            <img className='block lg:hidden' src='images/icon-menu.svg' alt='Navigation menu' />
          </a>
          <div className='hidden lg:flex lg:space-x-10 lg:items-center'>
            <div className='hover:text-almost-black cursor-pointer'>
              <a href='#'>Login</a>
            </div>
            <div className='border-2 rounded-xl px-4 py-2 hover:text-almost-black hover:border-almost-black cursor-pointer'>
              <a href='#'>Register</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header