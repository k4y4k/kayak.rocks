import tw, { styled } from 'twin.macro'
import Button from '@/components/layout/Button'
import HeroImage from '@/components/Hero/HeroImage'
import { Link } from 'gatsby'
import React from 'react'
import SEO from '../seo'

const Inner = styled.div`
  ${tw`self-center w-full p-8 py-4 m-8 text-center text-white bg-black border border-brand`}
  max-width: 900px;

  h1 {
    ${tw`mb-6 text-6xl`}
  }

  p {
    ${tw`text-xl`}
  }
`

const Divider = styled.hr`
  ${tw`w-1/2 mx-auto my-6`}
`

const HeroContainer = (): JSX.Element => (
  <>
    <SEO title='Not found 😢' />
    <HeroImage bw>
      <Inner>
        <h1>😔</h1>

        <p>What you&apos;re looking for isn&apos;t here!</p>
        <p>
          And, trust me, the little man that carries the internet over the wires
          looked really hard.
        </p>

        <br />

        <p>Try again?</p>

        <Divider />

        <Button important>
          <Link to='/'> Go home </Link>
        </Button>
      </Inner>
    </HeroImage>
  </>
)

export default HeroContainer
