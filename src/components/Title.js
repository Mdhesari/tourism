import React from "react"
import styled from "styled-components"

const Title = ({ title, subTitle }) => (
  <TitleWrapper>
    <h4>
      <p className="title">{title}</p>
      <p className="subTitle">{subTitle}</p>
    </h4>
  </TitleWrapper>
)

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
    margin-bottom:0;
  }
  .subTitle {
      font-size:16px;
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default Title
