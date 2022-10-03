import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
  title: string
}

const Signup = ({ children, ...props }: Props) => {
  return (
    <div className={props.className}>
      <a href='#'>{props.title}</a>
    </div>
  )
}

export default Signup