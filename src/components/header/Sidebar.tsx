import { Disclosure, Transition } from '@headlessui/react'
import NavImages from '../CustomImages'
import CustomImages from '../CustomImages'
import NavMenuItems from './NavMenuItems'
import NavMenuItem from './NavMenuItem'
import SimpleMenu from './SimpleMenu'
import Signup from '../Signup'

type isShowingType = {
  open: boolean
  setIsOpen: any
}

const Sidebar = ({ open = false, setIsOpen }: isShowingType) => {

  return <Transition show={open}>
    {/* Background overlay */}
    <Transition.Child
      className="fixed right-0 top-0 w-[250px] z-30 h-screen"
      enter="transition ease-in-out duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className='fixed right-0 top-0 w-[250px] max-h-screen bg-almost-white pt-20 p-8 z-50'>
        <a className='cursor-pointer' onClick={() => setIsOpen(false)}>
          <CustomImages imgSource='icon-close-menu.svg' imgAlt='Close Menu' className='absolute top-5 right-5' />
        </a>
        <ul className="flex flex-col space-y-3">
          <li>
            <Disclosure>
              {({ open }) => (
                <SimpleMenu title='Features' isDropDown={true}>
                  <NavMenuItems className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <NavMenuItem title='Calendar'>
                      <NavImages imgSource='icon-calendar.svg' imgAlt='Calendar Logo' className='inline w-4 mr-3' />
                    </NavMenuItem>
                    <NavMenuItem title='Reminders'>
                      <NavImages imgSource='icon-reminders.svg' imgAlt='Reminders Logo' className='inline w-4 mr-3' />
                    </NavMenuItem>
                    <NavMenuItem title='Planning'>
                      <NavImages imgSource='icon-planning.svg' imgAlt='Planning Logo' className='inline w-4 mr-3' />
                    </NavMenuItem>
                  </NavMenuItems>
                </SimpleMenu>
              )}
            </Disclosure>
          </li>
          <li>
            <SimpleMenu title='Company' isDropDown={true}>
              <NavMenuItems className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <NavMenuItem title='History' />
                <NavMenuItem title='Our Team' />
                <NavMenuItem title='Blog' />
              </NavMenuItems>
            </SimpleMenu>
          </li>
          <li>
            <SimpleMenu title='Carrers' isDropDown={false} />
          </li>
          <li>
            <SimpleMenu title='About' isDropDown={false} />
          </li>
        </ul>
        <div className="flex flex-col space-y-5 items-center justify-items-center pt-8">
          <Signup title='Login' className="hover:text-almost-black cursor-pointer" />
          <Signup title='Register' className="w-full text-center border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2 cursor-pointer" />
        </div>
      </div>
    </Transition.Child>

    {/* Sliding sidebar */}
    <Transition.Child
      enter="transition-opacity ease-linear duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        onClick={() => setIsOpen(false)}
        className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
      ></div>
    </Transition.Child>
  </Transition >
}

export default Sidebar