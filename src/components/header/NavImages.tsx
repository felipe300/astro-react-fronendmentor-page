import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  imgSource: string
  imgAlt: string
  className: string
}

const NavImages = ({ children, ...props }: Props) => {
  return <img src={`images/${props.imgSource}`} alt={props.imgAlt} className={props.className} />
}


export default NavImages
