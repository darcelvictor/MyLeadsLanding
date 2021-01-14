import styled from "styled-components"
import { pxToRem, colors } from "../../theme/helpers"

const borderRadiusTop = (radius = 10) => {
  return ` border-top-right-radius: ${pxToRem(radius)};
  border-top-left-radius: ${pxToRem(radius)};`
}

const marginInForm = (marginHeight = 0, marginWidth = 15) => {
  return `margin: ${pxToRem(marginHeight)} ${pxToRem(marginWidth)};`
}
export const FormContainer = styled.section`
  ${borderRadiusTop()}
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
  ${borderRadiusTop()}
  color: white;
  background-color: ${colors.green};
  width: 100%;
  text-align: center;
  padding: ${pxToRem(20)} ${pxToRem(15)};
  margin: 0 0;
  font-family: Raleway;
  font-size: ${pxToRem(29)};
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
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
  ${marginInForm()}
  color: ${colors.blue};
  font-weight: 800;
  font-size: ${pxToRem(18)};
  background-color: white;
`
export const FormSeparator = styled.div`
  padding: 0 ${pxToRem(15)} ${pxToRem(15)};
  width: 100%;
  align-self: flex-start;
  div {
    background-color: ${colors.blue};
    width: 100%;
    height: 1px;
  }
`

export const Form = styled.form`
  padding: 0 ${pxToRem(15)};
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: Raleway;
  font-size: ${pxToRem(18)};
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
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    div {
      display: flex;
      justify-content: center;
      width: 50%;
      p {
        color: ${colors.blue};
      }
    }
  }
`
