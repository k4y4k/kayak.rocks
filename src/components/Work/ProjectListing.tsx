import React from 'react'
import tw, { styled } from 'twin.macro'
import Button from '@/components/layout/Button'
import Tag from '@/components/Work/Tag'
import Image from '@/components/Work/Image'
import DetailsContainer from '@/components/Work/DetailsContainer'
import ProjectTitle from '@/components/Work/ProjectTitle'
import Description from '@/components/Work/Description'
import HC from '@/components/Work/HorizontalContainer'

type ProjectProps = {
  className?: string
  crisscross: boolean
  title: string
  excerpt: string
  // null is passed if there's no URL in the md frontmatter
  demo: string | null
  // same deal
  github: string | null
  tags: string[]
  goToButtonLabel?: string
}

const Project: React.FC<ProjectProps> = ({
  className,
  title,
  excerpt,
  demo,
  github,
  tags,
  goToButtonLabel,
}) => (
  <article className={className}>
    <Image title={title} />

    <DetailsContainer>
      <ProjectTitle>{title}</ProjectTitle>

      <Description>{excerpt}</Description>

      <HC>{tags && tags.map(tag => <Tag tagText={tag} />)}</HC>

      <HC>
        {demo && (
          <a href={demo}>
            <Button>{goToButtonLabel || 'Demo'}</Button>
          </a>
        )}

        {github && (
          <a href={github}>
            <Button>GitHub</Button>
          </a>
        )}
      </HC>
    </DetailsContainer>
  </article>
)

const StyledProject = styled(Project)`
  ${tw`text-white flex h-24 bg-gradient-to-b from-brand via-palevioletred-800 to-salmon-900`}
  ${({ crisscross }) => crisscross && tw`flex-row-reverse bg-gradient-to-t`}
  min-height: 75vh;
`

export default StyledProject
