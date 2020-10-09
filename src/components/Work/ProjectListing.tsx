import tw, { styled } from 'twin.macro'
import Button from '@/components/layout/Button'
import Description from '@/components/Work/Description'
import DetailsContainer from '@/components/Work/DetailsContainer'
import HC from '@/components/Work/HorizontalContainer'
import Image from '@/components/Work/Image'
import ProjectTitle from '@/components/Work/ProjectTitle'
import React from 'react'
import Tag from '@/components/Work/Tag'

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
  crisscross,
}) => (
  <article className={className}>
    <DetailsContainer crisscross={crisscross}>
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

    <Image title={title} />
  </article>
)

const StyledProject = styled(Project)`
  ${tw`text-white bg-transparent w-full`}
  ${({ crisscross }) => crisscross && tw` `}
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, minmax(250px, 1fr));
  grid-template-areas:
    'info info'
    'image image';

  @media (min-width: 640px) {
    grid-template-areas:
      'info image'
      'info image';
  }
`

export default StyledProject
