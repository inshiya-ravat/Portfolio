import { type ReactNode } from 'react'

interface SectionProps{
    heading:string,
    children: ReactNode,
}
const Section = ({heading,children}:SectionProps) => {
  return (
    <section>
        <h2>{heading}</h2>
        {children}
    </section>
  )
}

export default Section