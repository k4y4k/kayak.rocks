/* eslint-disable implicit-arrow-linebreak,operator-linebreak */

import { graphql, useStaticQuery } from 'gatsby'
import tw, { css, styled } from 'twin.macro'
import React from 'react'

type OuterProps = {
  projectsCount?: number
}

const Outer = styled.section`
  ${tw`p-8 py-24 text-white flex flex-col justify-center align-middle text-center`}
  min-height:500px;
  background: rgb(87, 56, 103);
  background: linear-gradient(
    180deg,
    rgb(87, 56, 103) 0%,
    rgb(115, 44, 91) 50%,
    rgb(106, 35, 46) 100%
  );

  ${({ projectsCount }: OuterProps) =>
    projectsCount % 2 === 0 &&
    css`
      background: linear-gradient(
        0deg,
        rgb(87, 56, 103) 0%,
        rgb(115, 44, 91) 50%,
        rgb(106, 35, 46) 100%
      );
    `}
`

const Inner = styled.div`
  ${tw`mx-auto py-4 px-8 bg-mediumpurple-900 rounded-lg shadow-lg`}
  max-width: 900px;
  line-height: 2;

  h1 {
    ${tw`text-2xl uppercase font-black m-4 tracking-widest`};
    font-family: 'Inconsolata', monospace;
  }

  p {
    ${tw`mb-4`}

    a {
      ${tw`bg-black p-2 py-1 hover:text-mediumpurple-500`}
    }

    span {
      ${tw`text-tomato-500 text-lg`}
      font-family: "Inconsolata", monospace;
    }
  }
`

const AboutSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      aboutText: file(name: { eq: "about" }, extension: { eq: "md" }) {
        childMarkdownRemark {
          html
        }
      }

      projectsCount: allFile(filter: { sourceInstanceName: { eq: "md" } }) {
        totalCount
      }
    }
  `)

  return (
    <Outer id='about' projectsCount={data.projectsCount.totalCount}>
      <Inner
        dangerouslySetInnerHTML={{
          __html: data.aboutText.childMarkdownRemark.html,
        }}
      />
    </Outer>
  )
}

export default AboutSection
