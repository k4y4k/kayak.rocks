/* eslint-disable sort-imports */
/* I literally don't know why it's throwing an error */

import tw, { styled } from 'twin.macro'
import { Link } from 'gatsby'
import { RiGithubLine } from 'react-icons/ri'
import Button from '@/components/layout/Button'
import HeroImage from '@/components/Hero/HeroImage'
import Hi from '@/components/Hero/Hi'
import React from 'react'
import Title from '@/components/Hero/Title'

const Inner = styled.div`
  ${tw`w-full self-center p-2 py-4 border-brand border text-white bg-cornflowerblue-900 bg-opacity-50 grid`}
  max-width: 900px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
`

const Buttons = styled.div`
  ${tw`self-end flex align-middle justify-center`}
  grid-row-start: 3;
  grid-column-start: span 2;
`

const HeroContainer: React.FC = () => (
  <HeroImage>
    <Inner>
      <Hi />
      <Title />

      <Buttons>
        <Button large important>
          <Link to='#work'>Projects</Link>
        </Button>
        <Button large>
          <a href='https://github.com/k4y4k'>
            <RiGithubLine size={30} />
          </a>
        </Button>
      </Buttons>
    </Inner>
  </HeroImage>
)

export default HeroContainer
