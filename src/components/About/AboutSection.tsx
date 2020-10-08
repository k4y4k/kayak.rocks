import { graphql, useStaticQuery } from 'gatsby'
import tw, { styled } from 'twin.macro'
import React from 'react'

const Outer = styled.section`
  ${tw`bg-gradient-to-t from-gray-900 via-cornflowerblue-900 to-chocolate-900 p-8 text-white flex flex-col justify-center align-middle text-center `}
  min-height:500px;
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
  const aboutText = useStaticQuery(graphql`
    {
      file(name: { eq: "about" }, extension: { eq: "md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  return (
    <Outer id='about'>
      <Inner
        dangerouslySetInnerHTML={{
          __html: aboutText.file.childMarkdownRemark.html,
        }}
      />
    </Outer>
  )
}

export default AboutSection
