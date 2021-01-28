import styled from "styled-components"
import { pxToRem, colors, media } from "../../theme/helpers"

const marginInForm = (marginHeight = 0, marginWidth = 15) => {
  return `margin: ${pxToRem(marginHeight)} ${pxToRem(marginWidth)};`
}
export const FormContainer = styled.section`
  border-radius: ${pxToRem(10)};
  background-color: white;
  padding-top: 0;
  box-shadow: 0 6px 19px 0 rgba(0, 0, 0, 0.16);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${pxToRem(700)};
`

export const FormHeader = styled.h2`
  border-top-right-radius: ${pxToRem(10)};
  border-top-left-radius: ${pxToRem(10)};
  color: white;
  background-color: ${colors.green};
  width: 100%;
  text-align: center;
  padding: ${pxToRem(20)} ${pxToRem(15)};
  margin: 0 0;
  font-family: Raleway;
  font-size: ${pxToRem(25)};
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  text-transform: none !important;
  line-height: 1.17;
  ${media.medium`
  .myBr{
    display:none;
  }
  font-size: ${pxToRem(29)};
  `}
`
export const FormPresentation = styled.p`
  ${marginInForm()}
  color: ${colors.lightGrey};
  font-size: ${pxToRem(14)};
  background-color: white;
  text-align: center;
  padding: ${pxToRem(10)} ${pxToRem(15)};
`
export const FormTitle = styled.h3`
  color: ${colors.blue};
  font-weight: 800;
  font-size: ${pxToRem(18)};
  background-color: white;
  border-bottom: 1px solid ${colors.blue};
  margin-bottom: ${pxToRem(5)};
  margin-top: ${pxToRem(10)};
`

export const Form = styled.form`
  padding: 0 ${pxToRem(15)} ${pxToRem(15)};
  justify-content: center;
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
  }
`

export const Label = styled.label`
  font-family: Raleway;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: ${colors.blue};
  input,
  select {
    border-radius: 10px;
    width: 100%;
    border: solid 1px rgba(59, 180, 244, 0.76);
    background-color: rgba(206, 238, 255, 0.18);
  }
`
export const SemiContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const Semi = styled.div`
  width: 48%;
`
export const SemiContainerMed = styled.div`
  display: flex;
  flex-direction: column;
  ${media.medium`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  `}
`

export const SemiMed = styled.div`
  width: 100%;
  ${media.medium`
  width:48%;
  `}
`

export const BoldGreenText = styled.p`
  margin: ${pxToRem(10)} 0;
  font-family: Raleway;
  font-size: ${pxToRem(19)};
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #0fd344;
  ${media.small`
font-size:${pxToRem(23)};
`}
`
export const LegalText = styled.p`
  margin: ${pxToRem(15)} 0 0;
  font-family: Roboto;
  font-size: ${pxToRem(11)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
`
