import { Menu } from '@headlessui/react'

const NevMenuItem = (data: { imgSource: string, imgAlt: string, title: string }) => {

  return <Menu.Item>
    {({ active }) => (
      <a
        className={`${active && 'bg-gray-100 text-gray-900'} block w-full text-left px-4 py-2 text-sm cursor-pointer`}
        href="/"
      >
        <img src={`images/${data.imgSource}`} alt={data.imgAlt} className='inline w-4 mr-3' />
        {data.title}
      </a>
    )}
  </Menu.Item>
}

export default NevMenuItem