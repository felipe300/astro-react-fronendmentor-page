// headless ui
import { Menu, Transition } from '@headlessui/react'
import NavMenuItem from './NavMenuItem'
import NavMenuItems from './NavMenuItems'

const NavMenu = () => {
  return <nav>
    <ul className='hidden lg:flex lg:space-x-7 lg:ml-14'>
      <li>
        <Menu>
          <Menu.Button className="hover:text-almost-black">
            Features
            < img className='inline-block ml-1' src='images/icon-arrow-down.svg' alt='Icon down arrow' />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <NavMenuItems className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <NavMenuItem imgSource='icon-todo.svg' imgAlt='Todo Logo' title='Todo' />
              <NavMenuItem imgSource='icon-calendar.svg' imgAlt='Calendar Logo' title='Calendar' />
              <NavMenuItem imgSource='icon-reminders.svg' imgAlt='Reminders Logo' title='Reminders' />
              <NavMenuItem imgSource='icon-planning.svg' imgAlt='Planning Logo' title='Planning' />
            </NavMenuItems>
          </Transition>
        </Menu>
      </li>
      <li>
        <Menu>
          <Menu.Button className="hover:text-almost-black">
            Features 2
            < img className='inline-block ml-1' src='images/icon-arrow-down.svg' alt='Icon down arrow' />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <NavMenuItems className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <NavMenuItem imgSource='icon-todo.svg' imgAlt='Todo Logo' title='Todo' />
              <NavMenuItem imgSource='icon-calendar.svg' imgAlt='Calendar Logo' title='Calendar' />
            </NavMenuItems>
          </Transition>
        </Menu>
      </li>
    </ul>
  </nav>
}

export default NavMenu