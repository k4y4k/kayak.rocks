import React from 'react'
import tw, { styled } from 'twin.macro'
import Button from '@/components/layout/Button'
import Tag from '@/components/Work/Tag'
import Image from '@/components/Work/Image'
import DetailsContainer from '@/components/Work/DetailsContainer'
import ProjectTitle from '@/components/Work/ProjectTitle'
import Description from '@/components/Work/Description'
import HC from '@/components/Work/HorizontalContainer'

interface ProjectProps {
  className?: string
  crisscross: boolean
}

const Project: React.FC<ProjectProps> = ({ className }) => (
  <article className={className}>
    <Image />

    <DetailsContainer>
      <ProjectTitle>Dummy Project</ProjectTitle>

      <Description>
        Aut autem molestiae dicta est qui culpa eos omnis. Cum rerum sunt
        exercitationem. Autem numquam est qui voluptatem a molestias sit et.
        Optio ullam a praesentium eos sed accusantium. Quo cumque eos aut error
        facere perspiciatis voluptas itaque. Voluptatem ex et molestiae aliquam.
      </Description>

      <HC>
        <Button>Read more</Button>
        <Button>Demo</Button>
        <Button>GitHub</Button>
      </HC>

      <HC>
        {['Gatsby', 'React', 'TypeScript'].map(tech => (
          <Tag key={tech} tagText={tech} />
        ))}
      </HC>
    </DetailsContainer>
  </article>
)

const StyledProject = styled(Project)`
  ${tw`bg-cornflowerblue-900 text-white flex`}
  ${({ crisscross }) => crisscross && tw`bg-pink-600 flex-row-reverse`}
  min-height: 75vh;
`

export default StyledProject
