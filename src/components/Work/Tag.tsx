import {
  SiGatsby,
  SiReact,
  SiStripe,
  SiStyledComponents,
  SiTailwindcss,
} from 'react-icons/si'
import tw, { styled } from 'twin.macro'
import React from 'react'

interface TagProps {
  className?: string
  tagText: string
}

const TagIcon = styled.span`
  ${tw`text-2xl p-1 pr-2 `}
`

const Tag: React.FC<TagProps> = ({ className, tagText }) => {
  let projectIcon

  switch (tagText) {
    case 'tailwindCSS':
      projectIcon = <SiTailwindcss />
      break
    case 'Gatsby':
      projectIcon = <SiGatsby />
      break

    case 'Stripe':
      projectIcon = <SiStripe />
      break

    case 'React':
      projectIcon = <SiReact />
      break

    case 'styled-components':
      projectIcon = <SiStyledComponents />
      break

    default:
      break
  }

  return (
    <div className={className}>
      <TagIcon>{projectIcon}</TagIcon>
      <span>{tagText}</span>
    </div>
  )
}

const StyledTag = styled(Tag)`
  ${tw`p-1 px-2 bg-black text-white m-1 text-sm tracking-widest whitespace-no-wrap`}
  font-family: "Inconsolata", monospace;

  span {
    ${tw`inline-flex align-middle`}
  }
`

export default StyledTag
