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
  ${tw`self-center w-full p-8 py-4 m-8 text-center text-white bg-black border border-brand`}
  max-width: 900px;
`

const Buttons = styled.div`
  ${tw`flex self-end justify-center align-middle`}
  grid-row-start: 3;
  grid-column-start: span 2;
`

const Divider = styled.hr`
  ${tw`w-1/2 mx-auto my-6`}
`

const HeroContainer = (): JSX.Element => (
  <HeroImage>
    <Inner>
      <Hi />
      <Title />

      <Divider />

      <Buttons>
        <Button large important>
          <Link to='#work'>Projects</Link>
        </Button>

        <Button large important>
          <a href='https://github.com/k4y4k'>
            <RiGithubLine size={30} />
          </a>
        </Button>
      </Buttons>
    </Inner>
  </HeroImage>
)

export default HeroContainer
