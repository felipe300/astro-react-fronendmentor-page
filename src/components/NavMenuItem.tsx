import { Menu } from '@headlessui/react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  title: string
}

const NevMenuItem = ({ children, ...props }: Props) => {

  return <Menu.Item>
    {({ active }) => (
      <a
        className={`${active && 'bg-gray-100 text-gray-900'} block w-full text-left px-4 py-2 text-sm cursor-pointer`}
        href="/"
      >
        {children}
        {props.title}
      </a>
    )}
  </Menu.Item>
}

export default NevMenuItem