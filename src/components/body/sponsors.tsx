import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  imgSource: string
  imgAlt: string
  className?: string
  imgWidth: string
}

const Sponsors = ({ children, ...props }: Props) => {
  return <img src={`images/${props.imgSource}`} alt={props.imgAlt} className={props.className} width={props.imgWidth} />
}

export default Sponsors