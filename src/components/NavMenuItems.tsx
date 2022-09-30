import { Menu } from '@headlessui/react'
import type { ReactNode } from 'react'


interface Props {
  children?: ReactNode
  className: string
}

const NavMenuItems = ({ children, ...props }: Props) => {
  return <Menu.Items {...props}>
    {children}
  </Menu.Items>
}

export default NavMenuItems