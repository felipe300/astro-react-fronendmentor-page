import { Menu, Transition } from '@headlessui/react'
import type { ReactNode } from 'react'
import NavImages from './NavImages'

interface Props {
  children?: ReactNode
  title: string
  isDropDown: boolean
}

const SimpleMenu = ({ children, ...props }: Props) => {
  return <>
    <Menu>
      <Menu.Button className="hover:text-almost-black">
        {props.title}
        {/* < img className='inline-block ml-1' src='images/icon-arrow-down.svg' alt='Icon down arrow' /> */}
        {
          props.isDropDown && <NavImages imgSource='icon-arrow-down.svg' imgAlt='Icon down arrow' className='inline-block ml-1' />
        }
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {children}
      </Transition>
    </Menu>
  </>
}

export default SimpleMenu
