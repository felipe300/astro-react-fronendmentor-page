import SimpleMenu from './SimpleMenu'
import NavMenuItem from './NavMenuItem'
import NavMenuItems from './NavMenuItems'
import NavImages from './NavImages'

const NavMenu = () => {
  return <nav>
    <ul className='hidden lg:flex lg:space-x-7 lg:ml-14'>
      <li>
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
  </nav>
}

export default NavMenu